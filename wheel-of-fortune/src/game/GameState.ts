// Game State Management

import type {
  StoredGameState,
  StoredCountry,
  StoredSpinResult,
  CardEffect,
  GuruModifiers
} from '../utils/storage';
import {
  loadGameState,
  resetGameState,
  updateCountry,
  addSpinResult,
  addActiveCard,
  removeActiveCard,
  clearActiveCards
} from '../utils/storage';
import type { WheelField } from '../wheel/WheelConfig';
import { DEFAULT_WHEEL_CONFIG, createModifiedWheel } from '../wheel/WheelConfig';
import { calculateSpinResult } from './SpinCalculator';
import cardsData from '../cards/cards.json';

export interface Card {
  id: string;
  type: 'WSPARCIE' | 'SABOTAZ' | 'BONUS' | 'OCHRONA';
  name: string;
  effect: CardEffect;
  description: string;
  flavor: string;
}

export interface CardEffect {
  action: string;
  multiplier?: number;
  count?: number;
  value?: number;
}

export interface SpinContext {
  countryId: string;
  baseValue: number;
  activeCards: Card[];
  wheelConfig: WheelField[];
}

export type GameEventType = 'stateChanged' | 'spinComplete' | 'cardUsed' | 'countryChanged';
export type GameEventCallback = (data: unknown) => void;

export class GameState {
  private state: StoredGameState;
  private cards: Card[];
  private listeners: Map<GameEventType, GameEventCallback[]> = new Map();

  constructor() {
    this.state = loadGameState();
    this.cards = cardsData.cards as Card[];
  }

  // Event system
  on(event: GameEventType, callback: GameEventCallback): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  off(event: GameEventType, callback: GameEventCallback): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  private emit(event: GameEventType, data?: unknown): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach(cb => cb(data));
    }
  }

  // Country management
  getCountries(): StoredCountry[] {
    return [...this.state.countries];
  }

  getCountry(id: string): StoredCountry | undefined {
    return this.state.countries.find(c => c.id === id);
  }

  updateCountryName(countryId: string, name: string): void {
    this.state = updateCountry(this.state, countryId, { name });
    this.emit('countryChanged', { countryId, name });
    this.emit('stateChanged', this.state);
  }

  updateCountryModifiers(countryId: string, positive: number, negative: number): void {
    this.state = updateCountry(this.state, countryId, {
      positiveModifier: positive,
      negativeModifier: negative
    });
    this.emit('countryChanged', { countryId, positive, negative });
    this.emit('stateChanged', this.state);
  }

  // Wheel configuration based on country
  getWheelConfigForCountry(countryId: string): WheelField[] {
    const country = this.getCountry(countryId);
    if (!country) return [...DEFAULT_WHEEL_CONFIG];

    // Get active cards that modify the wheel
    const activeCards = this.getActiveCards();
    let positiveBonus = country.positiveModifier;
    let negativeBonus = country.negativeModifier;

    // Apply card effects
    activeCards.forEach(card => {
      if (card.type === 'WSPARCIE' && card.effect.action === 'add_fields') {
        // Adds positive fields
        positiveBonus += card.effect.count || 0;
      } else if (card.type === 'WSPARCIE' && card.effect.action === 'remove_fields') {
        // Removes negative fields (effectively positive)
        negativeBonus -= card.effect.count || 0;
      }
    });

    return createModifiedWheel(
      DEFAULT_WHEEL_CONFIG,
      Math.max(0, positiveBonus),
      Math.max(0, negativeBonus)
    );
  }

  // Card management
  getAllCards(): Card[] {
    return [...this.cards];
  }

  getCardById(id: string): Card | undefined {
    return this.cards.find(c => c.id === id);
  }

  getCardsByType(type: Card['type']): Card[] {
    return this.cards.filter(c => c.type === type);
  }

  getActiveCardIds(): string[] {
    return [...this.state.activeCards];
  }

  getActiveCards(): Card[] {
    return this.state.activeCards
      .map(id => this.getCardById(id))
      .filter((c): c is Card => c !== undefined);
  }

  activateCard(cardId: string): boolean {
    const card = this.getCardById(cardId);
    if (!card) {
      console.error('Card not found:', cardId);
      return false;
    }

    if (this.state.activeCards.includes(cardId)) {
      console.warn('Card already active:', cardId);
      return false;
    }

    this.state = addActiveCard(this.state, cardId);
    this.emit('cardUsed', { card, action: 'activated' });
    this.emit('stateChanged', this.state);
    return true;
  }

  deactivateCard(cardId: string): void {
    this.state = removeActiveCard(this.state, cardId);
    this.emit('stateChanged', this.state);
  }

  clearAllActiveCards(): void {
    this.state = clearActiveCards(this.state);
    this.emit('stateChanged', this.state);
  }

  // Spin management
  recordSpin(
    countryId: string,
    multiplier: number,
    baseValue: number,
    cardsUsed: string[]
  ): StoredSpinResult {
    // Get active cards for calculation
    const activeCards = this.getActiveCards();

    // Use centralized calculation logic
    const calcResult = calculateSpinResult({
      baseValue,
      multiplier,
      activeCards: activeCards.map(card => ({
        id: card.id,
        name: card.name,
        type: card.type,
        effect: card.effect
      }))
    });

    // Record Guru modifiers for historical reference only
    // NOTE: Guru modifiers affect WHEEL CONFIGURATION (probability),
    // NOT the calculation. They've already influenced which multiplier was landed on.
    const country = this.getCountry(countryId);
    const guruModifiers: GuruModifiers = {
      positiveBonus: country?.positiveModifier || 0,
      negativeBonus: country?.negativeModifier || 0,
      wheelFieldsChanged: (country?.positiveModifier || 0) + (country?.negativeModifier || 0)
    };

    const result: StoredSpinResult = {
      countryId,
      multiplier: calcResult.multiplier,
      baseValue: calcResult.baseValue,
      baseResult: calcResult.baseResult,
      finalValue: calcResult.finalValue,
      timestamp: Date.now(),
      cardsUsed,
      cardEffects: calcResult.cardEffects,
      guruModifiers: guruModifiers.wheelFieldsChanged > 0 ? guruModifiers : undefined
    };

    this.state = addSpinResult(this.state, result);

    // Clear used cards after spin
    this.clearAllActiveCards();

    this.emit('spinComplete', result);
    this.emit('stateChanged', this.state);

    return result;
  }

  getSpinHistory(): StoredSpinResult[] {
    return [...this.state.spinHistory];
  }

  getCountrySpinHistory(countryId: string): StoredSpinResult[] {
    return this.state.spinHistory.filter(s => s.countryId === countryId);
  }

  // Game management
  resetGame(): void {
    this.state = resetGameState();
    this.emit('stateChanged', this.state);
  }

  getState(): StoredGameState {
    return { ...this.state };
  }
}

// Singleton instance
let gameStateInstance: GameState | null = null;

export function getGameState(): GameState {
  if (!gameStateInstance) {
    gameStateInstance = new GameState();
  }
  return gameStateInstance;
}
