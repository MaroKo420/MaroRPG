// Card Manager - handles card activation and effects

import type { Card } from '../game/GameState';
import { getGameState } from '../game/GameState';

export interface CardActivationResult {
  success: boolean;
  card?: Card;
  message: string;
}

export class CardManager {
  private gameState = getGameState();

  // Activate card by ID (from QR or text input)
  activateCard(cardId: string): CardActivationResult {
    const card = this.gameState.getCardById(cardId);

    if (!card) {
      return {
        success: false,
        message: `Nie znaleziono karty: ${cardId}`
      };
    }

    if (this.gameState.getActiveCardIds().includes(cardId)) {
      return {
        success: false,
        card,
        message: `Karta "${card.name}" jest juz aktywna`
      };
    }

    const activated = this.gameState.activateCard(cardId);

    if (activated) {
      return {
        success: true,
        card,
        message: `Aktywowano: ${card.name}`
      };
    }

    return {
      success: false,
      card,
      message: `Nie udalo sie aktywowac karty: ${card.name}`
    };
  }

  // Deactivate a card
  deactivateCard(cardId: string): void {
    this.gameState.deactivateCard(cardId);
  }

  // Get all currently active cards
  getActiveCards(): Card[] {
    return this.gameState.getActiveCards();
  }

  // Get card info by ID
  getCard(cardId: string): Card | undefined {
    return this.gameState.getCardById(cardId);
  }

  // Parse card ID from QR code data
  // QR data format: {"id": "SUPP-001", ...} or just "SUPP-001"
  parseQRData(data: string): string | null {
    // Try parsing as JSON
    try {
      const parsed = JSON.parse(data);
      if (parsed.id) {
        return parsed.id;
      }
    } catch {
      // Not JSON, try as plain ID
    }

    // Try as plain card ID
    const trimmed = data.trim().toUpperCase();
    if (this.gameState.getCardById(trimmed)) {
      return trimmed;
    }

    // Try with different cases
    const allCards = this.gameState.getAllCards();
    const found = allCards.find(c => c.id.toUpperCase() === trimmed);
    if (found) {
      return found.id;
    }

    return null;
  }

  // Get cards by type for display
  getCardsByType(type: Card['type']): Card[] {
    return this.gameState.getCardsByType(type);
  }

  // Get all available cards
  getAllCards(): Card[] {
    return this.gameState.getAllCards();
  }

  // Clear all active cards
  clearAllCards(): void {
    this.gameState.clearAllActiveCards();
  }

  // Get card effect description in Polish
  getEffectDescription(card: Card): string {
    const { effect } = card;

    switch (effect.action) {
      case 'add_fields':
        return `+${effect.count} ${effect.count === 1 ? 'pole' : 'pola'} x${effect.multiplier}`;
      case 'remove_fields':
        return `-${effect.count} ${effect.count === 1 ? 'pole' : 'pola'} x${effect.multiplier}`;
      case 'add_enemy_fields':
        return `+${effect.count} ${effect.count === 1 ? 'pole' : 'pola'} x${effect.multiplier} dla wroga`;
      case 'remove_enemy_fields':
        return `-${effect.count} ${effect.count === 1 ? 'pole' : 'pola'} x${effect.multiplier} z kola wroga`;
      case 'multiply_result':
        return `x${effect.value} do wyniku`;
      case 'add_result':
        return `+${effect.value} do wyniku`;
      case 'block_sabotage':
        return `Blokuje ${effect.count} ${effect.count === 1 ? 'sabotaz' : 'sabotaze'}`;
      case 'reflect_sabotage':
        return `Odbija sabotaz`;
      case 'minimum_multiplier':
        return `Gwarancja minimum x${effect.value}`;
      case 'remove_all_enemy_effects':
        return `Usuwa wszystkie negatywne efekty`;
      default:
        return card.description;
    }
  }

  // Get card type color
  getCardTypeColor(type: Card['type']): string {
    switch (type) {
      case 'WSPARCIE':
        return '#4ade80'; // Green
      case 'SABOTAZ':
        return '#f87171'; // Red
      case 'BONUS':
        return '#fbbf24'; // Yellow/Gold
      case 'OCHRONA':
        return '#60a5fa'; // Blue
      default:
        return '#9ca3af'; // Gray
    }
  }

  // Get card type label in Polish
  getCardTypeLabel(type: Card['type']): string {
    switch (type) {
      case 'WSPARCIE':
        return 'Wsparcie';
      case 'SABOTAZ':
        return 'Sabotaz';
      case 'BONUS':
        return 'Bonus';
      case 'OCHRONA':
        return 'Ochrona';
      default:
        return type;
    }
  }
}

// Singleton instance
let cardManagerInstance: CardManager | null = null;

export function getCardManager(): CardManager {
  if (!cardManagerInstance) {
    cardManagerInstance = new CardManager();
  }
  return cardManagerInstance;
}
