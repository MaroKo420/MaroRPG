// Game UI - User interface components

import type { Card } from './GameState';
import { getGameState } from './GameState';
import { getCardManager } from '../cards/CardManager';
import { WheelCanvas } from '../wheel/WheelCanvas';
import type { SpinResult } from '../wheel/WheelAnimation';
import { WheelAnimation } from '../wheel/WheelAnimation';
import { CardScanner, activateCardByCode } from '../cards/CardScanner';
import type { WheelField } from '../wheel/WheelConfig';

export class GameUI {
  private gameState = getGameState();
  private cardManager = getCardManager();
  private wheelCanvas: WheelCanvas | null = null;
  private wheelAnimation: WheelAnimation | null = null;
  private cardScanner: CardScanner | null = null;
  private selectedCountryId: string = 'kraj-1';
  private baseValue: number = 10000;

  constructor() {
    this.setupEventListeners();
    this.render();
  }

  private setupEventListeners(): void {
    // Game state changes
    this.gameState.on('stateChanged', () => this.updateUI());
    this.gameState.on('spinComplete', (result) => this.showSpinResult(result as SpinResult));
    this.gameState.on('cardUsed', (data) => this.showCardNotification(data as { card: Card; action: string }));
  }

  render(): void {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      <div class="game-container">
        <header class="game-header">
          <h1>Kolo Fortuny</h1>
          <p class="subtitle">MaroRPG - Mechanika Losowania</p>
        </header>

        <main class="game-main">
          <section class="wheel-section">
            <div class="wheel-container">
              <canvas id="wheel-canvas"></canvas>
            </div>
            <div class="wheel-controls">
              <button id="spin-btn" class="btn btn-primary btn-large">
                KREC!
              </button>
            </div>
            <div id="spin-result" class="spin-result hidden"></div>
          </section>

          <section class="controls-section">
            <div class="panel country-panel">
              <h2>Wybierz Kraj</h2>
              <select id="country-select" class="select">
                ${this.gameState.getCountries().map(c => `
                  <option value="${c.id}" ${c.id === this.selectedCountryId ? 'selected' : ''}>
                    ${c.name} (${c.score.toLocaleString()} pkt)
                  </option>
                `).join('')}
              </select>

              <div class="base-value-control">
                <label>Wartosc bazowa akcji:</label>
                <input type="number" id="base-value" value="${this.baseValue}" min="100" step="1000" class="input">
              </div>
            </div>

            <div class="panel guru-panel">
              <div class="guru-header">
                <span class="guru-icon">⚖️</span>
                <h2>Panel Guru</h2>
              </div>
              <p class="panel-desc guru-desc">Guru modyfikuje koło - zmienia szanse na wygraną</p>

              <div class="modifier-controls">
                <div class="modifier-row">
                  <label>🍀 Łaska (+pola x2):</label>
                  <input type="number" id="positive-mod" value="0" min="0" max="10" class="input input-small input-bonus">
                </div>
                <div class="modifier-row">
                  <label>💀 Klątwa (+pola x0):</label>
                  <input type="number" id="negative-mod" value="0" min="0" max="10" class="input input-small input-malus">
                </div>
                <button id="apply-mods-btn" class="btn btn-guru">Wydaj Wyrok</button>
              </div>
            </div>

            <div class="panel cards-panel">
              <h2>Aktywne Karty</h2>
              <div id="active-cards" class="cards-list">
                <p class="empty-text">Brak aktywnych kart</p>
              </div>

              <div class="card-input">
                <h3>Dodaj Karte</h3>
                <div class="input-row">
                  <input type="text" id="card-code" placeholder="Kod karty (np. SUPP-001)" class="input">
                  <button id="add-card-btn" class="btn btn-secondary">Dodaj</button>
                </div>
                <button id="scan-qr-btn" class="btn btn-secondary btn-full">
                  Skanuj QR
                </button>
              </div>
            </div>
          </section>
        </main>

        <section class="history-section">
          <div class="panel">
            <h2>Historia Krecen</h2>
            <div id="spin-history" class="history-list">
              ${this.renderSpinHistory()}
            </div>
          </div>
        </section>

        <section class="scoreboard-section">
          <div class="panel">
            <h2>Wyniki Krajow</h2>
            <div class="scoreboard">
              ${this.renderScoreboard()}
            </div>
          </div>
        </section>

        <footer class="game-footer">
          <button id="reset-btn" class="btn btn-danger">Resetuj Gre</button>
          <a href="print/cards-generator.html" target="_blank" class="btn btn-secondary">Generator Kart PDF</a>
        </footer>

        <!-- QR Scanner Modal -->
        <div id="qr-modal" class="modal hidden">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Skanuj Karte QR</h2>
              <button id="close-modal-btn" class="btn-close">&times;</button>
            </div>
            <div id="qr-reader"></div>
            <p class="modal-hint">Skieruj kamere na kod QR karty</p>
          </div>
        </div>

        <!-- Notification -->
        <div id="notification" class="notification hidden"></div>
      </div>
    `;

    this.initializeWheel();
    this.bindEvents();
  }

  private initializeWheel(): void {
    const canvas = document.getElementById('wheel-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const config = this.gameState.getWheelConfigForCountry(this.selectedCountryId);

    this.wheelCanvas = new WheelCanvas({
      canvas,
      config
    });

    this.wheelAnimation = new WheelAnimation({
      wheelCanvas: this.wheelCanvas,
      config,
      onTick: (field) => this.handleWheelTick(field),
      onComplete: (result) => this.handleSpinComplete(result)
    });

    // Handle resize
    window.addEventListener('resize', () => {
      this.wheelCanvas?.resize();
    });
  }

  private bindEvents(): void {
    // Spin button
    document.getElementById('spin-btn')?.addEventListener('click', () => this.spin());

    // Country select
    document.getElementById('country-select')?.addEventListener('change', (e) => {
      const select = e.target as HTMLSelectElement;
      this.selectedCountryId = select.value;
      this.updateWheelConfig();
    });

    // Base value
    document.getElementById('base-value')?.addEventListener('change', (e) => {
      const input = e.target as HTMLInputElement;
      this.baseValue = parseInt(input.value) || 10000;
    });

    // Apply modifiers
    document.getElementById('apply-mods-btn')?.addEventListener('click', () => {
      const positiveInput = document.getElementById('positive-mod') as HTMLInputElement;
      const negativeInput = document.getElementById('negative-mod') as HTMLInputElement;

      const positive = parseInt(positiveInput.value) || 0;
      const negative = parseInt(negativeInput.value) || 0;

      this.gameState.updateCountryModifiers(this.selectedCountryId, positive, negative);
      this.updateWheelConfig();
      this.showNotification('Modyfikatory zastosowane', 'success');
    });

    // Add card by code
    document.getElementById('add-card-btn')?.addEventListener('click', () => {
      const input = document.getElementById('card-code') as HTMLInputElement;
      const code = input.value.trim();
      if (code) {
        const result = activateCardByCode(code);
        this.showNotification(result.message, result.success ? 'success' : 'error');
        if (result.success) {
          input.value = '';
          this.updateActiveCards();
          this.updateWheelConfig();
        }
      }
    });

    // QR Scanner
    document.getElementById('scan-qr-btn')?.addEventListener('click', () => this.openQRScanner());
    document.getElementById('close-modal-btn')?.addEventListener('click', () => this.closeQRScanner());

    // Reset game
    document.getElementById('reset-btn')?.addEventListener('click', () => {
      if (confirm('Czy na pewno chcesz zresetowac gre? Wszystkie dane zostana utracone.')) {
        this.gameState.resetGame();
        this.render();
      }
    });

    // Click outside modal to close
    document.getElementById('qr-modal')?.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).id === 'qr-modal') {
        this.closeQRScanner();
      }
    });
  }

  private spin(): void {
    if (this.wheelAnimation?.getIsSpinning()) return;

    const spinBtn = document.getElementById('spin-btn') as HTMLButtonElement;
    spinBtn.disabled = true;
    spinBtn.textContent = 'Krecenie...';

    // Hide previous result
    document.getElementById('spin-result')?.classList.add('hidden');

    this.wheelAnimation?.spin();
  }

  private handleWheelTick(_field: WheelField): void {
    // Play tick sound or visual feedback
    // Could add audio tick or visual indicator here
  }

  private handleSpinComplete(result: SpinResult): void {
    const spinBtn = document.getElementById('spin-btn') as HTMLButtonElement;
    spinBtn.disabled = false;
    spinBtn.textContent = 'KREC!';

    // Record the spin
    const activeCardIds = this.cardManager.getActiveCards().map(c => c.id);
    const spinResult = this.gameState.recordSpin(
      this.selectedCountryId,
      result.field.multiplier,
      this.baseValue,
      activeCardIds
    );

    this.showSpinResult(spinResult);
  }

  private showSpinResult(result: unknown): void {
    const spinResult = result as {
      multiplier: number;
      baseValue: number;
      baseResult: number;
      finalValue: number;
      cardEffects?: Array<{
        cardId: string;
        cardName: string;
        action: string;
        value: number;
        valueBefore: number;
        valueAfter: number;
      }>;
      guruModifiers?: {
        positiveBonus: number;
        negativeBonus: number;
        wheelFieldsChanged: number;
      };
    };

    const resultDiv = document.getElementById('spin-result');
    if (!resultDiv) return;

    const isWin = spinResult.multiplier >= 1;
    const isBigWin = spinResult.multiplier >= 10;
    const hasCardEffects = spinResult.cardEffects && spinResult.cardEffects.length > 0;
    const hasGuruMods = spinResult.guruModifiers && spinResult.guruModifiers.wheelFieldsChanged > 0;

    // Build Guru info HTML - shows wheel modification, NOT calculation impact
    let guruHTML = '';
    if (hasGuruMods && spinResult.guruModifiers) {
      const mods = spinResult.guruModifiers;
      const parts: string[] = [];
      if (mods.positiveBonus > 0) {
        parts.push(`<span class="guru-bonus">+${mods.positiveBonus}×2</span>`);
      }
      if (mods.negativeBonus > 0) {
        parts.push(`<span class="guru-malus">+${mods.negativeBonus}×0</span>`);
      }
      // NOTE: This is informational only - Guru affected the wheel, not the calculation
      guruHTML = `
        <div class="guru-wheel-info">
          <span class="guru-wheel-label">🎯 Koło zmodyfikowane:</span>
          ${parts.join(' ')}
        </div>
      `;
    }

    // Build card effects HTML
    let cardEffectsHTML = '';
    if (hasCardEffects && spinResult.cardEffects) {
      cardEffectsHTML = spinResult.cardEffects.map((effect, index) => {
        let effectSymbol = '';
        let effectText = '';

        if (effect.action === 'multiply_result') {
          effectSymbol = `×${effect.value}`;
          effectText = effect.cardName;
        } else if (effect.action === 'add_result') {
          effectSymbol = `+${effect.value.toLocaleString()}`;
          effectText = effect.cardName;
        } else if (effect.action === 'minimum_multiplier') {
          effectSymbol = `→×${effect.value}`;
          effectText = `${effect.cardName} (ochrona)`;
        }

        return `
          <div class="card-effect-row" style="animation-delay: ${(index + 1) * 0.5}s">
            <span class="effect-symbol">${effectSymbol}</span>
            <span class="effect-name">${effectText}</span>
            <span class="effect-result">= ${Math.round(effect.valueAfter).toLocaleString()}</span>
          </div>
        `;
      }).join('');
    }

    resultDiv.innerHTML = `
      <div class="result-content ${isBigWin ? 'big-win' : isWin ? 'win' : 'loss'}">
        ${guruHTML}
        <div class="result-multiplier">x${spinResult.multiplier}</div>
        <div class="result-calculation">
          ${spinResult.baseValue.toLocaleString()} × ${spinResult.multiplier} = ${(spinResult.baseResult || spinResult.baseValue * spinResult.multiplier).toLocaleString()}
        </div>
        ${hasCardEffects ? `
          <div class="card-effects-container">
            ${cardEffectsHTML}
          </div>
        ` : ''}
        <div class="result-final ${hasCardEffects || hasGuruMods ? 'with-modifiers' : ''}">
          = <strong>${spinResult.finalValue.toLocaleString()}</strong> pkt
        </div>
      </div>
    `;

    resultDiv.classList.remove('hidden');

    // Update UI
    this.updateUI();
  }

  private showCardNotification(data: { card: Card; action: string }): void {
    this.showNotification(`Karta aktywowana: ${data.card.name}`, 'success');
  }

  private showNotification(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    const notification = document.getElementById('notification');
    if (!notification) return;

    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.remove('hidden');

    setTimeout(() => {
      notification.classList.add('hidden');
    }, 3000);
  }

  private updateUI(): void {
    this.updateCountrySelect();
    this.updateActiveCards();
    this.updateSpinHistory();
    this.updateScoreboard();
  }

  private updateCountrySelect(): void {
    const select = document.getElementById('country-select') as HTMLSelectElement;
    if (!select) return;

    const countries = this.gameState.getCountries();
    select.innerHTML = countries.map(c => `
      <option value="${c.id}" ${c.id === this.selectedCountryId ? 'selected' : ''}>
        ${c.name} (${c.score.toLocaleString()} pkt)
      </option>
    `).join('');
  }

  private updateActiveCards(): void {
    const container = document.getElementById('active-cards');
    if (!container) return;

    const activeCards = this.cardManager.getActiveCards();

    if (activeCards.length === 0) {
      container.innerHTML = '<p class="empty-text">Brak aktywnych kart</p>';
      return;
    }

    container.innerHTML = activeCards.map(card => `
      <div class="card-item" style="border-left-color: ${this.cardManager.getCardTypeColor(card.type)}">
        <div class="card-header">
          <span class="card-type" style="background: ${this.cardManager.getCardTypeColor(card.type)}">
            ${this.cardManager.getCardTypeLabel(card.type)}
          </span>
          <span class="card-name">${card.name}</span>
        </div>
        <div class="card-effect">${card.description}</div>
        <button class="btn-remove" data-card-id="${card.id}">&times;</button>
      </div>
    `).join('');

    // Bind remove buttons
    container.querySelectorAll('.btn-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cardId = (e.target as HTMLElement).dataset.cardId;
        if (cardId) {
          this.cardManager.deactivateCard(cardId);
          this.updateActiveCards();
          this.updateWheelConfig();
        }
      });
    });
  }

  private updateWheelConfig(): void {
    const config = this.gameState.getWheelConfigForCountry(this.selectedCountryId);
    this.wheelCanvas?.setConfig(config);
    this.wheelAnimation?.setConfig(config);
  }

  private updateSpinHistory(): void {
    const container = document.getElementById('spin-history');
    if (!container) return;

    container.innerHTML = this.renderSpinHistory();
  }

  private renderSpinHistory(): string {
    const history = this.gameState.getSpinHistory().slice(-10).reverse();

    if (history.length === 0) {
      return '<p class="empty-text">Brak historii</p>';
    }

    const countries = this.gameState.getCountries();

    return history.map(spin => {
      const country = countries.find(c => c.id === spin.countryId);
      const time = new Date(spin.timestamp).toLocaleTimeString('pl-PL');
      const hasCards = spin.cardEffects && spin.cardEffects.length > 0;
      const hasGuru = spin.guruModifiers && spin.guruModifiers.wheelFieldsChanged > 0;
      const hasModifiers = hasCards || hasGuru;

      // Build Guru wheel info - informational only (affected probability, not calculation)
      let guruHTML = '';
      if (hasGuru && spin.guruModifiers) {
        const parts: string[] = [];
        if (spin.guruModifiers.positiveBonus > 0) {
          parts.push(`<span class="history-guru-bonus">+${spin.guruModifiers.positiveBonus}×2</span>`);
        }
        if (spin.guruModifiers.negativeBonus > 0) {
          parts.push(`<span class="history-guru-malus">+${spin.guruModifiers.negativeBonus}×0</span>`);
        }
        guruHTML = `<div class="history-guru">🎯 Koło: ${parts.join(' ')}</div>`;
      }

      // Build card effects summary
      let cardsHTML = '';
      if (hasCards && spin.cardEffects) {
        const cardsSummary = spin.cardEffects.map(effect => {
          if (effect.action === 'multiply_result') {
            return `<span class="history-card-effect">×${effect.value} ${effect.cardName}</span>`;
          } else if (effect.action === 'add_result') {
            return `<span class="history-card-effect">+${effect.value.toLocaleString()} ${effect.cardName}</span>`;
          } else if (effect.action === 'minimum_multiplier') {
            return `<span class="history-card-effect">min×${effect.value} ${effect.cardName}</span>`;
          }
          return '';
        }).filter(Boolean).join('');

        cardsHTML = `<div class="history-cards">${cardsSummary}</div>`;
      }

      // Full calculation display
      const baseResult = spin.baseResult || (spin.baseValue * spin.multiplier);
      const calculationHTML = hasModifiers
        ? `<span class="history-calculation">${spin.baseValue.toLocaleString()} × ${spin.multiplier} = ${baseResult.toLocaleString()}</span>`
        : '';

      return `
        <div class="history-item ${hasModifiers ? 'with-modifiers' : ''}">
          <div class="history-main">
            <span class="history-country">${country?.name || spin.countryId}</span>
            <span class="history-multiplier">x${spin.multiplier}</span>
            <span class="history-value">${spin.finalValue.toLocaleString()} pkt</span>
            <span class="history-time">${time}</span>
          </div>
          ${hasModifiers ? `
            <div class="history-details">
              ${guruHTML}
              ${calculationHTML}
              ${cardsHTML}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  private updateScoreboard(): void {
    const container = document.querySelector('.scoreboard');
    if (!container) return;

    container.innerHTML = this.renderScoreboard();
  }

  private renderScoreboard(): string {
    const countries = this.gameState.getCountries()
      .sort((a, b) => b.score - a.score);

    return countries.map((country, index) => `
      <div class="scoreboard-item ${index === 0 && country.score > 0 ? 'leader' : ''}">
        <span class="scoreboard-rank">${index + 1}</span>
        <span class="scoreboard-name">${country.name}</span>
        <span class="scoreboard-score">${country.score.toLocaleString()} pkt</span>
      </div>
    `).join('');
  }

  private async openQRScanner(): Promise<void> {
    const modal = document.getElementById('qr-modal');
    if (!modal) return;

    modal.classList.remove('hidden');

    // Check camera availability
    const cameraAvailable = await CardScanner.isCameraAvailable();
    if (!cameraAvailable) {
      this.showNotification('Kamera nie jest dostepna', 'error');
      return;
    }

    // Initialize scanner
    this.cardScanner = new CardScanner({
      containerId: 'qr-reader',
      onScan: (result) => {
        this.showNotification(result.message, result.success ? 'success' : 'error');
        if (result.success) {
          this.closeQRScanner();
          this.updateActiveCards();
          this.updateWheelConfig();
        }
      },
      onError: (error) => {
        this.showNotification(`Blad skanera: ${error}`, 'error');
      }
    });

    await this.cardScanner.start();
  }

  private async closeQRScanner(): Promise<void> {
    const modal = document.getElementById('qr-modal');
    if (modal) {
      modal.classList.add('hidden');
    }

    await this.cardScanner?.stop();
    this.cardScanner = null;

    // Clear the reader container
    const reader = document.getElementById('qr-reader');
    if (reader) {
      reader.innerHTML = '';
    }
  }
}
