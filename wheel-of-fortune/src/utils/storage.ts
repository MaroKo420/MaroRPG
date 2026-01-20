// LocalStorage helpers for game state persistence

const STORAGE_KEY = 'wheel-of-fortune-game';

export interface StoredGameState {
  countries: StoredCountry[];
  spinHistory: StoredSpinResult[];
  activeCards: string[];
  lastUpdated: number;
}

export interface StoredCountry {
  id: string;
  name: string;
  score: number;
  positiveModifier: number;
  negativeModifier: number;
}

export interface CardEffect {
  cardId: string;
  cardName: string;
  action: string;
  value: number;
  valueBefore: number;
  valueAfter: number;
}

export interface GuruModifiers {
  positiveBonus: number; // +pola x2
  negativeBonus: number; // +pola x0
  wheelFieldsChanged: number; // ile pól zostało zmodyfikowanych
}

export interface StoredSpinResult {
  countryId: string;
  multiplier: number;
  baseValue: number;
  baseResult: number; // baseValue × multiplier (before cards)
  finalValue: number;
  timestamp: number;
  cardsUsed: string[];
  cardEffects: CardEffect[]; // Detailed breakdown of card effects
  guruModifiers?: GuruModifiers; // Modyfikatory ustawione przez Guru
}

const defaultState: StoredGameState = {
  countries: [
    { id: 'kraj-1', name: 'Kraj 1', score: 0, positiveModifier: 0, negativeModifier: 0 },
    { id: 'kraj-2', name: 'Kraj 2', score: 0, positiveModifier: 0, negativeModifier: 0 },
    { id: 'kraj-3', name: 'Kraj 3', score: 0, positiveModifier: 0, negativeModifier: 0 },
    { id: 'kraj-4', name: 'Kraj 4', score: 0, positiveModifier: 0, negativeModifier: 0 },
    { id: 'kraj-5', name: 'Kraj 5', score: 0, positiveModifier: 0, negativeModifier: 0 },
  ],
  spinHistory: [],
  activeCards: [],
  lastUpdated: Date.now()
};

export function loadGameState(): StoredGameState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as StoredGameState;
    }
  } catch (error) {
    console.error('Failed to load game state:', error);
  }
  return { ...defaultState };
}

export function saveGameState(state: StoredGameState): void {
  try {
    state.lastUpdated = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

export function resetGameState(): StoredGameState {
  const newState = { ...defaultState, lastUpdated: Date.now() };
  saveGameState(newState);
  return newState;
}

export function updateCountry(
  state: StoredGameState,
  countryId: string,
  updates: Partial<StoredCountry>
): StoredGameState {
  const newState = {
    ...state,
    countries: state.countries.map(c =>
      c.id === countryId ? { ...c, ...updates } : c
    )
  };
  saveGameState(newState);
  return newState;
}

export function addSpinResult(
  state: StoredGameState,
  result: StoredSpinResult
): StoredGameState {
  const newState = {
    ...state,
    spinHistory: [...state.spinHistory, result]
  };

  // Also update country score
  const country = newState.countries.find(c => c.id === result.countryId);
  if (country) {
    country.score += result.finalValue;
  }

  saveGameState(newState);
  return newState;
}

export function addActiveCard(state: StoredGameState, cardId: string): StoredGameState {
  if (!state.activeCards.includes(cardId)) {
    const newState = {
      ...state,
      activeCards: [...state.activeCards, cardId]
    };
    saveGameState(newState);
    return newState;
  }
  return state;
}

export function removeActiveCard(state: StoredGameState, cardId: string): StoredGameState {
  const newState = {
    ...state,
    activeCards: state.activeCards.filter(id => id !== cardId)
  };
  saveGameState(newState);
  return newState;
}

export function clearActiveCards(state: StoredGameState): StoredGameState {
  const newState = {
    ...state,
    activeCards: []
  };
  saveGameState(newState);
  return newState;
}
