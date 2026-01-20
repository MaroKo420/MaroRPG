/**
 * SpinCalculator - Centralized spin result calculation logic
 *
 * FLOW OBLICZANIA WYNIKU:
 * =======================
 *
 * 1. GURU MODYFIKUJE KOŁO (przed spinem)
 *    - Łaska: zamienia pola x0 → x2 (więcej szans na wygraną)
 *    - Klątwa: zamienia pola x1 → x0 (więcej szans na przgraną)
 *    - TO NIE WPŁYWA NA OBLICZENIA - tylko na PRAWDOPODOBIEŃSTWO
 *
 * 2. SPIN - wylosowanie mnożnika z koła
 *    - Wynik zależy od konfiguracji koła (zmodyfikowanej przez Guru)
 *    - Mnożnik: x0, x0.5, x1, x2, x5, x10, x100, x1000
 *
 * 3. OBLICZENIE WYNIKU (po spinie)
 *    a) baseResult = baseValue × multiplier
 *    b) Karty OCHRONA (minimum_multiplier) - nadpisuje jeśli mnożnik < minimum
 *    c) Karty BONUS (multiply_result) - mnoży wynik
 *    d) Karty BONUS (add_result) - dodaje do wyniku
 *    e) finalValue = Math.round(result)
 */

import type { CardEffect as StoredCardEffect } from '../utils/storage';

// Card effect during calculation
export interface CardEffect {
  cardId: string;
  cardName: string;
  action: string;
  value: number;
  valueBefore: number;
  valueAfter: number;
}

// Input for calculation
export interface SpinInput {
  baseValue: number;
  multiplier: number;
  activeCards: Array<{
    id: string;
    name: string;
    type: 'WSPARCIE' | 'SABOTAZ' | 'BONUS' | 'OCHRONA';
    effect: {
      action: string;
      value?: number;
      count?: number;
    };
  }>;
}

// Output from calculation
export interface SpinOutput {
  baseValue: number;
  multiplier: number;
  baseResult: number;      // baseValue × multiplier
  finalValue: number;      // after all card effects
  cardEffects: CardEffect[];
}

/**
 * Calculates the final spin result
 *
 * Order of operations:
 * 1. Base calculation: baseValue × multiplier
 * 2. OCHRONA cards: override if multiplier < minimum
 * 3. BONUS multiply_result cards: multiply the result
 * 4. BONUS add_result cards: add to the result
 */
export function calculateSpinResult(input: SpinInput): SpinOutput {
  const { baseValue, multiplier, activeCards } = input;

  // Step 1: Base calculation
  const baseResult = baseValue * multiplier;
  let currentValue = baseResult;
  const cardEffects: CardEffect[] = [];

  // Step 2: Apply OCHRONA (protection) cards
  // These can override a bad multiplier with a minimum guaranteed value
  for (const card of activeCards) {
    if (card.type === 'OCHRONA' && card.effect.action === 'minimum_multiplier') {
      const minMultiplier = card.effect.value || 1;
      if (multiplier < minMultiplier) {
        const valueBefore = currentValue;
        currentValue = baseValue * minMultiplier;
        cardEffects.push({
          cardId: card.id,
          cardName: card.name,
          action: 'minimum_multiplier',
          value: minMultiplier,
          valueBefore,
          valueAfter: currentValue
        });
      }
    }
  }

  // Step 3: Apply BONUS multiply_result cards
  for (const card of activeCards) {
    if (card.type === 'BONUS' && card.effect.action === 'multiply_result') {
      const multiplierValue = card.effect.value || 1;
      const valueBefore = currentValue;
      currentValue *= multiplierValue;
      cardEffects.push({
        cardId: card.id,
        cardName: card.name,
        action: 'multiply_result',
        value: multiplierValue,
        valueBefore,
        valueAfter: currentValue
      });
    }
  }

  // Step 4: Apply BONUS add_result cards
  for (const card of activeCards) {
    if (card.type === 'BONUS' && card.effect.action === 'add_result') {
      const addValue = card.effect.value || 0;
      const valueBefore = currentValue;
      currentValue += addValue;
      cardEffects.push({
        cardId: card.id,
        cardName: card.name,
        action: 'add_result',
        value: addValue,
        valueBefore,
        valueAfter: currentValue
      });
    }
  }

  // Step 5: Round final value
  const finalValue = Math.round(currentValue);

  return {
    baseValue,
    multiplier,
    baseResult,
    finalValue,
    cardEffects
  };
}

/**
 * Formats calculation breakdown for display
 * Returns human-readable steps of the calculation
 */
export function formatCalculationBreakdown(output: SpinOutput): string[] {
  const steps: string[] = [];

  // Base calculation
  steps.push(`${output.baseValue.toLocaleString()} × ${output.multiplier} = ${output.baseResult.toLocaleString()}`);

  // Card effects
  for (const effect of output.cardEffects) {
    if (effect.action === 'minimum_multiplier') {
      steps.push(`Ochrona (${effect.cardName}): ×${effect.value} → ${Math.round(effect.valueAfter).toLocaleString()}`);
    } else if (effect.action === 'multiply_result') {
      steps.push(`×${effect.value} (${effect.cardName}) → ${Math.round(effect.valueAfter).toLocaleString()}`);
    } else if (effect.action === 'add_result') {
      steps.push(`+${effect.value.toLocaleString()} (${effect.cardName}) → ${Math.round(effect.valueAfter).toLocaleString()}`);
    }
  }

  return steps;
}
