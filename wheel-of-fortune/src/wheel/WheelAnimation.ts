// Wheel Animation - GSAP-based spinning animation

import gsap from 'gsap';
import type { WheelCanvas } from './WheelCanvas';
import type { WheelField } from './WheelConfig';
import { getFieldByAngle } from './WheelConfig';

export interface SpinResult {
  field: WheelField;
  finalAngle: number;
}

export interface WheelAnimationOptions {
  wheelCanvas: WheelCanvas;
  config: WheelField[];
  onTick?: (field: WheelField) => void;
  onComplete?: (result: SpinResult) => void;
}

export class WheelAnimation {
  private wheelCanvas: WheelCanvas;
  private config: WheelField[];
  private isSpinning: boolean = false;
  private currentTimeline: gsap.core.Timeline | null = null;
  private onTick?: (field: WheelField) => void;
  private onComplete?: (result: SpinResult) => void;
  private lastTickField: WheelField | null = null;

  constructor(options: WheelAnimationOptions) {
    this.wheelCanvas = options.wheelCanvas;
    this.config = options.config;
    this.onTick = options.onTick;
    this.onComplete = options.onComplete;
  }

  setConfig(config: WheelField[]): void {
    this.config = config;
  }

  setOnTick(callback: (field: WheelField) => void): void {
    this.onTick = callback;
  }

  setOnComplete(callback: (result: SpinResult) => void): void {
    this.onComplete = callback;
  }

  spin(): void {
    if (this.isSpinning) return;

    this.isSpinning = true;

    // Random target: 5-8 full rotations + random final position
    const fullRotations = 5 + Math.random() * 3;
    const randomExtra = Math.random() * Math.PI * 2;
    const targetAngle = this.wheelCanvas.getRotation() + (fullRotations * Math.PI * 2) + randomExtra;

    // Create animation object for GSAP
    const animState = { rotation: this.wheelCanvas.getRotation() };

    // Kill any existing animation
    if (this.currentTimeline) {
      this.currentTimeline.kill();
    }

    // Create timeline for multi-phase animation
    this.currentTimeline = gsap.timeline({
      onComplete: () => {
        this.isSpinning = false;
        const finalField = getFieldByAngle(this.config, animState.rotation);
        if (this.onComplete) {
          this.onComplete({
            field: finalField,
            finalAngle: animState.rotation
          });
        }
      }
    });

    // Phase 1: Quick acceleration (0.5s)
    this.currentTimeline.to(animState, {
      rotation: animState.rotation + Math.PI * 4, // 2 full rotations
      duration: 0.5,
      ease: 'power1.in',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
        this.handleTick(animState.rotation);
      }
    });

    // Phase 2: Main spin at constant high speed (1.5s)
    this.currentTimeline.to(animState, {
      rotation: animState.rotation + (fullRotations - 2) * Math.PI * 2,
      duration: 1.5,
      ease: 'none',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
        this.handleTick(animState.rotation);
      }
    });

    // Phase 3: Deceleration (2.5s) - physics-based slowdown
    this.currentTimeline.to(animState, {
      rotation: targetAngle - 0.05, // Slightly before target
      duration: 2.5,
      ease: 'power3.out',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
        this.handleTick(animState.rotation);
      }
    });

    // Phase 4: Final settle with slight overshoot and bounce (0.4s)
    this.currentTimeline.to(animState, {
      rotation: targetAngle,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
      }
    });
  }

  // Spin to a specific field (for testing/demo)
  spinToField(fieldIndex: number): void {
    if (this.isSpinning) return;

    this.isSpinning = true;

    const fieldAngle = (Math.PI * 2) / this.config.length;
    // Calculate target angle so pointer points to center of field
    // Pointer is at top (PI/2), we need to account for rotation direction
    const targetFieldCenter = (this.config.length - fieldIndex - 0.5) * fieldAngle + Math.PI / 2;

    const fullRotations = 5 + Math.random() * 2;
    const currentRotation = this.wheelCanvas.getRotation();
    const targetAngle = currentRotation + (fullRotations * Math.PI * 2) +
      ((targetFieldCenter - (currentRotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2));

    const animState = { rotation: currentRotation };

    if (this.currentTimeline) {
      this.currentTimeline.kill();
    }

    this.currentTimeline = gsap.timeline({
      onComplete: () => {
        this.isSpinning = false;
        if (this.onComplete) {
          this.onComplete({
            field: this.config[fieldIndex],
            finalAngle: animState.rotation
          });
        }
      }
    });

    // Same animation phases as spin()
    this.currentTimeline.to(animState, {
      rotation: currentRotation + Math.PI * 4,
      duration: 0.5,
      ease: 'power1.in',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
        this.handleTick(animState.rotation);
      }
    });

    this.currentTimeline.to(animState, {
      rotation: targetAngle - Math.PI * 4,
      duration: 1.5,
      ease: 'none',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
        this.handleTick(animState.rotation);
      }
    });

    this.currentTimeline.to(animState, {
      rotation: targetAngle - 0.05,
      duration: 2.5,
      ease: 'power3.out',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
        this.handleTick(animState.rotation);
      }
    });

    this.currentTimeline.to(animState, {
      rotation: targetAngle,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
      onUpdate: () => {
        this.wheelCanvas.setRotation(animState.rotation);
      }
    });
  }

  private handleTick(rotation: number): void {
    if (!this.onTick) return;

    const currentField = getFieldByAngle(this.config, rotation);

    // Only fire tick when field changes
    if (this.lastTickField !== currentField) {
      this.lastTickField = currentField;
      this.onTick(currentField);
    }
  }

  stop(): void {
    if (this.currentTimeline) {
      this.currentTimeline.kill();
      this.isSpinning = false;
    }
  }

  getIsSpinning(): boolean {
    return this.isSpinning;
  }
}
