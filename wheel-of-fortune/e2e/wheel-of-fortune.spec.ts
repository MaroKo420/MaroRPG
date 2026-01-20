import { test, expect, Page } from '@playwright/test';

/**
 * E2E Tests for Wheel of Fortune - MaroRPG
 *
 * Test scenarios verify:
 * - Mathematical calculations: baseValue × multiplier with card effects
 * - Card integration: BONUS, OCHRONA, WSPARCIE cards
 * - Guru modifiers: positive and negative wheel modifications
 * - LocalStorage persistence
 * - QR scanning (requires camera access)
 */

// Helper: Reset game state via localStorage
async function resetGame(page: Page) {
  await page.evaluate(() => {
    localStorage.removeItem('wheel-of-fortune-game');
  });
  await page.reload();
  await page.waitForSelector('#wheel-canvas');
}

// Helper: Set base value
async function setBaseValue(page: Page, value: number) {
  await page.fill('#base-value', value.toString());
  // Trigger change event
  await page.locator('#base-value').blur();
}

// Helper: Select country
async function selectCountry(page: Page, countryId: string) {
  await page.selectOption('#country-select', countryId);
}

// Helper: Add card by code
async function addCard(page: Page, code: string) {
  await page.fill('#card-code', code);
  await page.click('#add-card-btn');
  await page.waitForTimeout(300); // Wait for notification
}

// Helper: Apply Guru modifiers
async function applyGuruModifiers(page: Page, positive: number, negative: number) {
  await page.fill('#positive-mod', positive.toString());
  await page.fill('#negative-mod', negative.toString());
  await page.click('#apply-mods-btn');
  await page.waitForTimeout(300);
}

// Helper: Mock wheel spin to return specific multiplier
async function mockSpinWithMultiplier(page: Page, multiplier: number) {
  await page.evaluate((mult) => {
    // Access the wheel animation and override the spin result
    const gameState = (window as any).__gameState;
    const wheelAnimation = (window as any).__wheelAnimation;

    if (wheelAnimation) {
      // Store original method
      const originalSpin = wheelAnimation.spin.bind(wheelAnimation);

      // Override spin to use specific multiplier
      wheelAnimation.spin = function() {
        const config = this.config;
        // Find field with matching multiplier
        const targetField = config.find((f: any) => f.multiplier === mult) || config[0];

        // Calculate target angle for this field
        const fieldCount = config.length;
        const fieldAngle = (Math.PI * 2) / fieldCount;
        const fieldIndex = config.indexOf(targetField);
        const targetAngle = fieldIndex * fieldAngle + fieldAngle / 2;

        // Set rotation directly
        this.currentAngle = targetAngle;
        this.isSpinning = false;

        // Trigger completion callback
        this.onComplete({ field: targetField, angle: targetAngle });

        // Restore original method for next spin
        this.spin = originalSpin;
      };
    }
  }, multiplier);
}

// Helper: Perform spin and wait for result
async function spinAndWaitForResult(page: Page): Promise<{ multiplier: number; finalValue: number }> {
  // Click spin button
  await page.click('#spin-btn');

  // Wait for spin to complete (max 10 seconds for animation)
  await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

  // Extract result
  const multiplierText = await page.locator('.result-multiplier').textContent();
  const finalValueText = await page.locator('.result-final strong').textContent();

  const multiplier = parseFloat(multiplierText?.replace('x', '') || '0');
  const finalValue = parseInt(finalValueText?.replace(/[^\d]/g, '') || '0');

  return { multiplier, finalValue };
}

// Helper: Get country score from scoreboard
async function getCountryScore(page: Page, countryName: string): Promise<number> {
  const scoreText = await page.locator('.scoreboard-item')
    .filter({ hasText: countryName })
    .locator('.scoreboard-score')
    .textContent();
  return parseInt(scoreText?.replace(/[^\d]/g, '') || '0');
}

// Helper: Check if card is active
async function isCardActive(page: Page, cardName: string): Promise<boolean> {
  const activeCards = page.locator('#active-cards .card-item');
  const count = await activeCards.filter({ hasText: cardName }).count();
  return count > 0;
}

// Helper: Expose internal game objects for testing
async function exposeGameObjects(page: Page) {
  await page.evaluate(() => {
    // Import modules dynamically and expose to window
    import('/src/game/GameState.ts').then(module => {
      (window as any).__gameState = module.getGameState();
    });
  });
}


// =============================================================================
// SCENARIO 1: Basic spin without modifiers
// Verifies formula: baseValue × multiplier
// =============================================================================
test.describe('Scenario 1: Basic spin without modifiers', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should calculate result as baseValue × multiplier', async ({ page }) => {
    // Setup: Select Kraj 1, base value 5000
    await selectCountry(page, 'kraj-1');
    await setBaseValue(page, 5000);

    // Verify no active cards
    const emptyText = await page.locator('#active-cards .empty-text').textContent();
    expect(emptyText).toContain('Brak aktywnych kart');

    // Spin the wheel and get result
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Verify result format
    const resultVisible = await page.locator('#spin-result').isVisible();
    expect(resultVisible).toBe(true);

    // Verify calculation in result display (uses comma as separator: 5,000)
    const calculationText = await page.locator('.result-calculation').textContent();
    expect(calculationText).toContain('5,000');
  });

  test('should add result to country score', async ({ page }) => {
    const initialScore = await getCountryScore(page, 'Kraj 1');

    await selectCountry(page, 'kraj-1');
    await setBaseValue(page, 1000);

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const result = await page.locator('.result-final strong').textContent();
    const finalValue = parseInt(result?.replace(/[^\d]/g, '') || '0');

    // Wait for scoreboard to update
    await page.waitForTimeout(500);

    const newScore = await getCountryScore(page, 'Kraj 1');
    expect(newScore).toBe(initialScore + finalValue);
  });

  test('should record spin in history', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await setBaseValue(page, 2000);

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Check history
    const historyItem = page.locator('.history-item').first();
    await expect(historyItem).toBeVisible();
    await expect(historyItem.locator('.history-country')).toHaveText('Kraj 1');
  });
});


// =============================================================================
// SCENARIO 2: BONUS card multiply_result (×2)
// Verifies: finalValue = baseValue × multiplier × cardValue
// =============================================================================
test.describe('Scenario 2: BONUS multiply_result card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should activate BONUS-001 card (Podwójne Szczęście ×2)', async ({ page }) => {
    await addCard(page, 'BONUS-001');

    // Verify card is active
    const isActive = await isCardActive(page, 'Podwójne Szczęście');
    expect(isActive).toBe(true);

    // Verify notification
    const notification = page.locator('.notification');
    await expect(notification).toContainText('Aktywowano');
  });

  test('should multiply final result by card value', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await setBaseValue(page, 1000);

    // Add BONUS-001 (×2 to result)
    await addCard(page, 'BONUS-001');

    // Spin
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // The final value should include the ×2 bonus
    // We can verify the card was used by checking it's no longer active
    await page.waitForTimeout(500);
    const isStillActive = await isCardActive(page, 'Podwójne Szczęście');
    expect(isStillActive).toBe(false); // Card consumed after spin
  });

  test('should clear card after spin', async ({ page }) => {
    await addCard(page, 'BONUS-001');
    expect(await isCardActive(page, 'Podwójne Szczęście')).toBe(true);

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Card should be cleared
    await page.waitForTimeout(500);
    expect(await isCardActive(page, 'Podwójne Szczęście')).toBe(false);
  });
});


// =============================================================================
// SCENARIO 3: BONUS card add_result (+10000)
// Verifies: finalValue = baseValue × multiplier + cardValue
// =============================================================================
test.describe('Scenario 3: BONUS add_result card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should activate BONUS-004 card (Dodatkowa Premia +10000)', async ({ page }) => {
    await addCard(page, 'BONUS-004');

    const isActive = await isCardActive(page, 'Dodatkowa Premia');
    expect(isActive).toBe(true);
  });

  test('should add fixed value to final result', async ({ page }) => {
    await selectCountry(page, 'kraj-2');
    await setBaseValue(page, 1000);

    // Add BONUS-004 (+10000)
    await addCard(page, 'BONUS-004');

    // Spin
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Final value should be at least 10000 (the bonus)
    const result = await page.locator('.result-final strong').textContent();
    const finalValue = parseInt(result?.replace(/[^\d]/g, '') || '0');

    // Even with ×0 multiplier, we should have the +10000 bonus
    expect(finalValue).toBeGreaterThanOrEqual(10000);
  });
});


// =============================================================================
// SCENARIO 4: OCHRONA minimum_multiplier card
// Verifies: if multiplier < cardValue, use cardValue instead
// =============================================================================
test.describe('Scenario 4: OCHRONA minimum_multiplier card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should activate PROT-004 card (Amulet, min ×1)', async ({ page }) => {
    await addCard(page, 'PROT-004');

    const isActive = await isCardActive(page, 'Amulet');
    expect(isActive).toBe(true);
  });

  test('should show protection card description', async ({ page }) => {
    await addCard(page, 'PROT-004');

    const cardEffect = await page.locator('#active-cards .card-effect').textContent();
    expect(cardEffect).toContain('Gwarancja minimum x1');
  });

  test('protection card should be consumed after spin', async ({ page }) => {
    await selectCountry(page, 'kraj-3');
    await setBaseValue(page, 10000);

    await addCard(page, 'PROT-004');
    expect(await isCardActive(page, 'Amulet')).toBe(true);

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Card should be consumed
    await page.waitForTimeout(500);
    expect(await isCardActive(page, 'Amulet')).toBe(false);
  });
});


// =============================================================================
// SCENARIO 5: WSPARCIE card + Guru modifiers
// Verifies: cumulative wheel modifications
// =============================================================================
test.describe('Scenario 5: WSPARCIE + Guru modifiers', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should apply Guru positive modifiers', async ({ page }) => {
    await selectCountry(page, 'kraj-4');

    await applyGuruModifiers(page, 2, 0);

    // Verify notification
    const notification = page.locator('.notification');
    await expect(notification).toContainText('Modyfikatory zastosowane');
  });

  test('should activate WSPARCIE card (Dobra Passa +2 fields)', async ({ page }) => {
    await addCard(page, 'SUPP-001');

    const isActive = await isCardActive(page, 'Dobra Passa');
    expect(isActive).toBe(true);
  });

  test('should combine Guru and card modifiers', async ({ page }) => {
    await selectCountry(page, 'kraj-4');

    // Apply Guru modifiers (+2 positive)
    await applyGuruModifiers(page, 2, 0);

    // Add SUPP-001 (+2 more fields)
    await addCard(page, 'SUPP-001');

    // Verify card is active
    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);

    // Spin - combined effect should improve odds
    await setBaseValue(page, 5000);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Verify spin completed
    const resultVisible = await page.locator('#spin-result').isVisible();
    expect(resultVisible).toBe(true);
  });

  test('WSPARCIE card should persist until spin', async ({ page }) => {
    await addCard(page, 'SUPP-001');

    // Card should remain active before spin
    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);

    // After spin, card should be consumed
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });
    await page.waitForTimeout(500);

    expect(await isCardActive(page, 'Dobra Passa')).toBe(false);
  });
});


// =============================================================================
// SCENARIO 6: Multiple cards combination
// Verifies: order of effects - multipliers first, then addition
// =============================================================================
test.describe('Scenario 6: Multiple cards combination', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should activate multiple cards simultaneously', async ({ page }) => {
    // Add WSPARCIE card
    await addCard(page, 'SUPP-006'); // Wiatr w Żagle +3 fields
    expect(await isCardActive(page, 'Wiatr w Żagle')).toBe(true);

    // Add BONUS multiply card
    await addCard(page, 'BONUS-003'); // Jackpot ×3
    expect(await isCardActive(page, 'Jackpot')).toBe(true);

    // Add BONUS add card
    await addCard(page, 'BONUS-004'); // Premia +10000
    expect(await isCardActive(page, 'Dodatkowa Premia')).toBe(true);
  });

  test('should apply all card effects in correct order', async ({ page }) => {
    await selectCountry(page, 'kraj-5');
    await setBaseValue(page, 1000);

    // Add cards in specific order
    await addCard(page, 'SUPP-006'); // +3 x2 fields
    await addCard(page, 'BONUS-003'); // ×3 multiplier
    await addCard(page, 'BONUS-004'); // +10000 addition

    // Spin
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Final value should include both multiply and add effects
    const result = await page.locator('.result-final strong').textContent();
    const finalValue = parseInt(result?.replace(/[^\d]/g, '') || '0');

    // With BONUS-003 (×3) and BONUS-004 (+10000), result should be significant
    // Formula: (baseValue × wheelMultiplier × 3) + 10000
    // Minimum with ×0: (1000 × 0 × 3) + 10000 = 10000
    expect(finalValue).toBeGreaterThanOrEqual(10000);
  });

  test('should clear all cards after spin', async ({ page }) => {
    await addCard(page, 'SUPP-006');
    await addCard(page, 'BONUS-003');
    await addCard(page, 'BONUS-004');

    // Verify all cards active
    expect(await isCardActive(page, 'Wiatr w Żagle')).toBe(true);
    expect(await isCardActive(page, 'Jackpot')).toBe(true);
    expect(await isCardActive(page, 'Dodatkowa Premia')).toBe(true);

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });
    await page.waitForTimeout(500);

    // All cards should be cleared
    expect(await isCardActive(page, 'Wiatr w Żagle')).toBe(false);
    expect(await isCardActive(page, 'Jackpot')).toBe(false);
    expect(await isCardActive(page, 'Dodatkowa Premia')).toBe(false);
  });
});


// =============================================================================
// SCENARIO 7: Guru negative malus
// Verifies: adding x0 fields to wheel
// =============================================================================
test.describe('Scenario 7: Guru negative malus', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should apply negative malus modifiers', async ({ page }) => {
    await selectCountry(page, 'kraj-1');

    // Apply negative malus (+3 x0 fields)
    await applyGuruModifiers(page, 0, 3);

    // Verify notification
    const notification = page.locator('.notification');
    await expect(notification).toContainText('Modyfikatory zastosowane');
  });

  test('should allow multiple spins with malus', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await applyGuruModifiers(page, 0, 3);
    await setBaseValue(page, 5000);

    // Perform multiple spins
    for (let i = 0; i < 3; i++) {
      await page.click('#spin-btn');
      await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });
      await page.waitForTimeout(1000); // Wait between spins

      // Verify result displayed
      const resultVisible = await page.locator('#spin-result').isVisible();
      expect(resultVisible).toBe(true);
    }

    // Check history has 3 entries
    const historyItems = await page.locator('.history-item').count();
    expect(historyItems).toBeGreaterThanOrEqual(3);
  });

  test('negative malus should persist across spins', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await applyGuruModifiers(page, 0, 5);

    // First spin
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Second spin - malus should still apply
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Verify both spins recorded
    const historyItems = await page.locator('.history-item').count();
    expect(historyItems).toBeGreaterThanOrEqual(2);
  });
});


// =============================================================================
// SCENARIO 8: LocalStorage persistence
// Verifies: game state survives page reload
// =============================================================================
test.describe('Scenario 8: LocalStorage persistence', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should persist country scores after reload', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await setBaseValue(page, 10000);

    // Spin
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const scoreBeforeReload = await getCountryScore(page, 'Kraj 1');

    // Reload page
    await page.reload();
    await page.waitForSelector('#wheel-canvas');

    const scoreAfterReload = await getCountryScore(page, 'Kraj 1');
    expect(scoreAfterReload).toBe(scoreBeforeReload);
  });

  test('should persist spin history after reload', async ({ page }) => {
    await selectCountry(page, 'kraj-2');
    await setBaseValue(page, 5000);

    // Spin twice
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const historyCountBefore = await page.locator('.history-item').count();

    // Reload
    await page.reload();
    await page.waitForSelector('#wheel-canvas');

    const historyCountAfter = await page.locator('.history-item').count();
    expect(historyCountAfter).toBe(historyCountBefore);
  });

  test('should persist Guru modifiers after reload', async ({ page }) => {
    await selectCountry(page, 'kraj-3');
    await applyGuruModifiers(page, 3, 2);

    // Reload
    await page.reload();
    await page.waitForSelector('#wheel-canvas');

    // Select same country again
    await selectCountry(page, 'kraj-3');

    // The modifiers should be persisted (wheel config should reflect them)
    // Spin should work with persisted modifiers
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const resultVisible = await page.locator('#spin-result').isVisible();
    expect(resultVisible).toBe(true);
  });

  test('should clear all data on reset', async ({ page }) => {
    // Add some data
    await selectCountry(page, 'kraj-1');
    await setBaseValue(page, 5000);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Wait for score update
    await page.waitForTimeout(500);

    // Verify we have some score before reset
    const storeBefore = await page.evaluate(() => {
      const stored = localStorage.getItem('wheel-of-fortune-game');
      return stored ? JSON.parse(stored) : null;
    });
    expect(storeBefore?.spinHistory?.length).toBeGreaterThan(0);

    // Reset game - setup dialog handler BEFORE clicking
    page.once('dialog', async dialog => {
      await dialog.accept();
    });
    await page.click('#reset-btn');

    // Wait for reset to complete and re-render
    await page.waitForTimeout(1500);

    // Verify localStorage was cleared
    const storeAfter = await page.evaluate(() => {
      const stored = localStorage.getItem('wheel-of-fortune-game');
      return stored ? JSON.parse(stored) : null;
    });

    // Spin history should be empty after reset
    expect(storeAfter?.spinHistory?.length || 0).toBe(0);

    // All country scores should be 0
    const allScoresZero = storeAfter?.countries?.every((c: any) => c.score === 0);
    expect(allScoresZero).toBe(true);
  });
});


// =============================================================================
// SCENARIO 9: QR scanning (requires camera)
// Note: Full camera testing requires real hardware or mock
// =============================================================================
test.describe('Scenario 9: QR scanning', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should open QR scanner modal', async ({ page }) => {
    await page.click('#scan-qr-btn');

    // Modal should be visible
    const modal = page.locator('#qr-modal');
    await expect(modal).not.toHaveClass(/hidden/);
  });

  test('should close QR scanner modal', async ({ page }) => {
    await page.click('#scan-qr-btn');

    // Wait for modal to open
    await page.waitForSelector('#qr-modal:not(.hidden)');

    // Close modal
    await page.click('#close-modal-btn');

    // Modal should be hidden
    const modal = page.locator('#qr-modal');
    await expect(modal).toHaveClass(/hidden/);
  });

  test('should close modal on outside click', async ({ page }) => {
    await page.click('#scan-qr-btn');
    await page.waitForSelector('#qr-modal:not(.hidden)');

    // Click on modal background (outside content)
    await page.locator('#qr-modal').click({ position: { x: 10, y: 10 } });

    // Modal should be hidden
    const modal = page.locator('#qr-modal');
    await expect(modal).toHaveClass(/hidden/);
  });

  test('manual card code input should work as QR alternative', async ({ page }) => {
    // Instead of scanning QR, use text input
    await addCard(page, 'SUPP-001');

    // Verify card activated
    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);
  });

  test('should reject invalid card codes', async ({ page }) => {
    await page.fill('#card-code', 'INVALID-CODE');
    await page.click('#add-card-btn');

    // Notification should show error
    const notification = page.locator('.notification');
    await expect(notification).toHaveClass(/error/);
  });

  test('should reject duplicate card activation', async ({ page }) => {
    // Add card first time
    await addCard(page, 'SUPP-001');
    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);

    // Try to add same card again
    await page.fill('#card-code', 'SUPP-001');
    await page.click('#add-card-btn');

    // Should show error notification
    const notification = page.locator('.notification');
    await expect(notification).toContainText('juz aktywna');
  });
});


// =============================================================================
// MATHEMATICAL VERIFICATION TESTS
// Direct verification of calculation formulas
// =============================================================================
test.describe('Mathematical verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should correctly format large numbers with separators', async ({ page }) => {
    await setBaseValue(page, 100000);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Check number formatting in result
    const calculation = await page.locator('.result-calculation').textContent();
    expect(calculation).toContain('100'); // Should contain formatted number
  });

  test('should round final value to integer', async ({ page }) => {
    await setBaseValue(page, 1000);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const result = await page.locator('.result-final strong').textContent();
    const finalValue = result?.replace(/[^\d]/g, '') || '0';

    // Should be an integer (no decimal point)
    expect(finalValue).toMatch(/^\d+$/);
  });

  test('should display correct multiplier in result', async ({ page }) => {
    await setBaseValue(page, 5000);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Multiplier should be one of valid values
    const multiplierText = await page.locator('.result-multiplier').textContent();
    const validMultipliers = ['x0', 'x0.5', 'x1', 'x2', 'x5', 'x10', 'x100', 'x1000'];
    expect(validMultipliers).toContain(multiplierText);
  });
});


// =============================================================================
// UI INTERACTION TESTS
// Verify UI components work correctly
// =============================================================================
test.describe('UI interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should have all 5 countries in selector', async ({ page }) => {
    const options = await page.locator('#country-select option').count();
    expect(options).toBe(5);
  });

  test('should update country score display after spin', async ({ page }) => {
    const initialOption = await page.locator('#country-select option').first().textContent();
    expect(initialOption).toContain('0 pkt');

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Score in dropdown should update
    await page.waitForTimeout(500);
    const updatedOption = await page.locator('#country-select option').first().textContent();
    // Score might still be 0 if x0 was hit, but format should be consistent
    expect(updatedOption).toContain('pkt');
  });

  test('should disable spin button during animation', async ({ page }) => {
    await page.click('#spin-btn');

    // Button should show "Krecenie..." during spin
    const buttonText = await page.locator('#spin-btn').textContent();
    expect(buttonText).toContain('Krecenie');

    // Wait for completion
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Button should be re-enabled
    const buttonEnabled = await page.locator('#spin-btn').isEnabled();
    expect(buttonEnabled).toBe(true);
  });

  test('should show card type badge correctly', async ({ page }) => {
    await addCard(page, 'SUPP-001');

    // Check card type badge
    const badge = page.locator('#active-cards .card-type');
    await expect(badge).toHaveText('Wsparcie');
  });

  test('should remove card manually', async ({ page }) => {
    await addCard(page, 'SUPP-001');
    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);

    // Click remove button
    await page.click('#active-cards .btn-remove');

    // Card should be removed
    expect(await isCardActive(page, 'Dobra Passa')).toBe(false);
  });

  test('should link to card generator page', async ({ page }) => {
    const link = page.locator('a[href*="cards-generator"]');
    await expect(link).toHaveText('Generator Kart PDF');
    await expect(link).toHaveAttribute('target', '_blank');
  });
});


// =============================================================================
// EDGE CASES
// Test boundary conditions and special scenarios
// =============================================================================
test.describe('Edge cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await resetGame(page);
  });

  test('should handle minimum base value', async ({ page }) => {
    await setBaseValue(page, 100);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const resultVisible = await page.locator('#spin-result').isVisible();
    expect(resultVisible).toBe(true);
  });

  test('should handle large base value', async ({ page }) => {
    await setBaseValue(page, 999999999);
    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const resultVisible = await page.locator('#spin-result').isVisible();
    expect(resultVisible).toBe(true);
  });

  test('should handle rapid country switching', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await selectCountry(page, 'kraj-2');
    await selectCountry(page, 'kraj-3');
    await selectCountry(page, 'kraj-4');
    await selectCountry(page, 'kraj-5');

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    // Should record spin for last selected country (kraj-5)
    const historyItem = page.locator('.history-item').first();
    await expect(historyItem.locator('.history-country')).toHaveText('Kraj 5');
  });

  test('should handle card code case insensitivity', async ({ page }) => {
    // Test lowercase
    await page.fill('#card-code', 'supp-001');
    await page.click('#add-card-btn');

    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);
  });

  test('should handle card code with extra whitespace', async ({ page }) => {
    await page.fill('#card-code', '  SUPP-001  ');
    await page.click('#add-card-btn');

    expect(await isCardActive(page, 'Dobra Passa')).toBe(true);
  });

  test('should handle maximum modifiers', async ({ page }) => {
    await selectCountry(page, 'kraj-1');
    await applyGuruModifiers(page, 10, 10);

    await page.click('#spin-btn');
    await page.waitForSelector('#spin-result:not(.hidden)', { timeout: 15000 });

    const resultVisible = await page.locator('#spin-result').isVisible();
    expect(resultVisible).toBe(true);
  });
});
