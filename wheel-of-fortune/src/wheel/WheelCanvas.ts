// Wheel Canvas - Drawing the wheel using Canvas API

import type { WheelField } from './WheelConfig';

export interface WheelCanvasOptions {
  canvas: HTMLCanvasElement;
  config: WheelField[];
  radius?: number;
  centerX?: number;
  centerY?: number;
}

export class WheelCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: WheelField[];
  private radius: number;
  private centerX: number;
  private centerY: number;
  private rotation: number = 0;

  constructor(options: WheelCanvasOptions) {
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d')!;
    this.config = options.config;

    // Set canvas size based on container
    const size = Math.min(
      this.canvas.parentElement?.clientWidth || 500,
      500
    );
    this.canvas.width = size;
    this.canvas.height = size;

    this.radius = options.radius || size * 0.45;
    this.centerX = options.centerX || size / 2;
    this.centerY = options.centerY || size / 2;

    this.draw();
  }

  setConfig(config: WheelField[]): void {
    this.config = config;
    this.draw();
  }

  setRotation(angle: number): void {
    this.rotation = angle;
    this.draw();
  }

  getRotation(): number {
    return this.rotation;
  }

  draw(): void {
    const { ctx, config, radius, centerX, centerY } = this;

    // Clear canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const fieldCount = config.length;
    const fieldAngle = (Math.PI * 2) / fieldCount;

    // Draw each field
    config.forEach((field, index) => {
      const startAngle = index * fieldAngle + this.rotation;
      const endAngle = startAngle + fieldAngle;

      // Draw field segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      // Fill with field color
      ctx.fillStyle = field.color;
      ctx.fill();

      // Draw border
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      this.drawLabel(field.label, startAngle + fieldAngle / 2, radius * 0.7);
    });

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.12, 0, Math.PI * 2);
    ctx.fillStyle = '#1a1a1a';
    ctx.fill();
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw outer ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2);
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Draw pointer at top
    this.drawPointer();
  }

  private drawLabel(text: string, angle: number, distance: number): void {
    const { ctx, centerX, centerY } = this;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.translate(distance, 0);
    ctx.rotate(Math.PI / 2);

    // Text styling
    ctx.font = 'bold 14px system-ui, Arial, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Add shadow for readability
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    ctx.fillText(text, 0, 0);
    ctx.restore();
  }

  private drawPointer(): void {
    const { ctx, centerX } = this;
    const pointerSize = 25;

    ctx.save();
    ctx.beginPath();

    // Triangle pointer at top
    ctx.moveTo(centerX, 10);
    ctx.lineTo(centerX - pointerSize / 2, 0);
    ctx.lineTo(centerX + pointerSize / 2, 0);
    ctx.closePath();

    ctx.fillStyle = '#ff6b35';
    ctx.fill();
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Pointer stem
    ctx.beginPath();
    ctx.moveTo(centerX, 10);
    ctx.lineTo(centerX, 35);
    ctx.strokeStyle = '#ff6b35';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.restore();
  }

  // Resize handler
  resize(): void {
    const size = Math.min(
      this.canvas.parentElement?.clientWidth || 500,
      500
    );
    this.canvas.width = size;
    this.canvas.height = size;
    this.radius = size * 0.45;
    this.centerX = size / 2;
    this.centerY = size / 2;
    this.draw();
  }
}
