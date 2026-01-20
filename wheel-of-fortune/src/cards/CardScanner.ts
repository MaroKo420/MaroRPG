// Card Scanner - QR code scanning using html5-qrcode

import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import type { CardActivationResult } from './CardManager';
import { getCardManager } from './CardManager';

export interface ScannerOptions {
  containerId: string;
  onScan: (result: CardActivationResult) => void;
  onError?: (error: string) => void;
}

export class CardScanner {
  private scanner: Html5Qrcode | null = null;
  private containerId: string;
  private onScan: (result: CardActivationResult) => void;
  private onError?: (error: string) => void;
  private isScanning: boolean = false;
  private cardManager = getCardManager();

  constructor(options: ScannerOptions) {
    this.containerId = options.containerId;
    this.onScan = options.onScan;
    this.onError = options.onError;
  }

  async start(): Promise<void> {
    if (this.isScanning) {
      console.warn('Scanner already running');
      return;
    }

    try {
      this.scanner = new Html5Qrcode(this.containerId, {
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
        verbose: false
      });

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      };

      await this.scanner.start(
        { facingMode: 'environment' },
        config,
        (decodedText) => this.handleScan(decodedText),
        () => {} // Ignore errors during scanning
      );

      this.isScanning = true;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to start scanner';
      console.error('Scanner error:', message);
      if (this.onError) {
        this.onError(message);
      }
    }
  }

  async stop(): Promise<void> {
    if (!this.scanner || !this.isScanning) return;

    try {
      await this.scanner.stop();
      this.isScanning = false;
    } catch (error) {
      console.error('Error stopping scanner:', error);
    }
  }

  private handleScan(decodedText: string): void {
    // Parse QR data to get card ID
    const cardId = this.cardManager.parseQRData(decodedText);

    if (cardId) {
      // Activate the card
      const result = this.cardManager.activateCard(cardId);
      this.onScan(result);

      // Auto-stop after successful scan
      if (result.success) {
        this.stop();
      }
    } else {
      this.onScan({
        success: false,
        message: `Nierozpoznany kod QR: ${decodedText.substring(0, 50)}`
      });
    }
  }

  getIsScanning(): boolean {
    return this.isScanning;
  }

  // Static method to check if camera is available
  static async isCameraAvailable(): Promise<boolean> {
    try {
      const devices = await Html5Qrcode.getCameras();
      return devices.length > 0;
    } catch {
      return false;
    }
  }
}

// Text input handler (alternative to QR scanning)
export function activateCardByCode(code: string): CardActivationResult {
  const cardManager = getCardManager();
  const cardId = cardManager.parseQRData(code);

  if (cardId) {
    return cardManager.activateCard(cardId);
  }

  return {
    success: false,
    message: `Nierozpoznany kod: ${code}`
  };
}
