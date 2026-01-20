// Wheel configuration - multipliers and field definitions

export interface WheelField {
  multiplier: number;
  color: string;
  label: string;
}

// Color scheme for multipliers
export const MULTIPLIER_COLORS: Record<number, string> = {
  0: '#2d2d2d',      // Dark gray - total loss
  0.5: '#6b4c4c',    // Dark red-brown - half loss
  1: '#4a5568',      // Gray - neutral
  2: '#2d5a3d',      // Dark green - small win
  5: '#3d6b3d',      // Green - medium win
  10: '#4a7c4a',     // Bright green - good win
  100: '#ffd700',    // Gold - great win
  1000: '#ff6b35',   // Orange - jackpot
};

// Default wheel configuration (20 fields)
export const DEFAULT_WHEEL_CONFIG: WheelField[] = [
  { multiplier: 0, color: MULTIPLIER_COLORS[0], label: 'x0' },
  { multiplier: 1, color: MULTIPLIER_COLORS[1], label: 'x1' },
  { multiplier: 0.5, color: MULTIPLIER_COLORS[0.5], label: 'x0.5' },
  { multiplier: 2, color: MULTIPLIER_COLORS[2], label: 'x2' },
  { multiplier: 0, color: MULTIPLIER_COLORS[0], label: 'x0' },
  { multiplier: 1, color: MULTIPLIER_COLORS[1], label: 'x1' },
  { multiplier: 5, color: MULTIPLIER_COLORS[5], label: 'x5' },
  { multiplier: 0.5, color: MULTIPLIER_COLORS[0.5], label: 'x0.5' },
  { multiplier: 1, color: MULTIPLIER_COLORS[1], label: 'x1' },
  { multiplier: 0, color: MULTIPLIER_COLORS[0], label: 'x0' },
  { multiplier: 2, color: MULTIPLIER_COLORS[2], label: 'x2' },
  { multiplier: 1, color: MULTIPLIER_COLORS[1], label: 'x1' },
  { multiplier: 0.5, color: MULTIPLIER_COLORS[0.5], label: 'x0.5' },
  { multiplier: 10, color: MULTIPLIER_COLORS[10], label: 'x10' },
  { multiplier: 1, color: MULTIPLIER_COLORS[1], label: 'x1' },
  { multiplier: 0.5, color: MULTIPLIER_COLORS[0.5], label: 'x0.5' },
  { multiplier: 2, color: MULTIPLIER_COLORS[2], label: 'x2' },
  { multiplier: 100, color: MULTIPLIER_COLORS[100], label: 'x100' },
  { multiplier: 1, color: MULTIPLIER_COLORS[1], label: 'x1' },
  { multiplier: 1000, color: MULTIPLIER_COLORS[1000], label: 'x1000' },
];

// Create a modified wheel based on country status
// positiveBonus: number of extra positive fields
// negativeBonus: number of extra negative fields
export function createModifiedWheel(
  baseConfig: WheelField[],
  positiveBonus: number = 0,
  negativeBonus: number = 0
): WheelField[] {
  const config = [...baseConfig];

  // Add positive fields (replace x0 with x2)
  for (let i = 0; i < positiveBonus && i < config.length; i++) {
    const zeroIndex = config.findIndex(f => f.multiplier === 0);
    if (zeroIndex !== -1) {
      config[zeroIndex] = {
        multiplier: 2,
        color: MULTIPLIER_COLORS[2],
        label: 'x2'
      };
    }
  }

  // Add negative fields (replace x1 with x0)
  for (let i = 0; i < negativeBonus && i < config.length; i++) {
    const oneIndex = config.findIndex(f => f.multiplier === 1);
    if (oneIndex !== -1) {
      config[oneIndex] = {
        multiplier: 0,
        color: MULTIPLIER_COLORS[0],
        label: 'x0'
      };
    }
  }

  return config;
}

// Get field by angle (in radians)
export function getFieldByAngle(config: WheelField[], angle: number): WheelField {
  const fieldCount = config.length;
  const fieldAngle = (Math.PI * 2) / fieldCount;

  // Normalize angle to 0-2PI
  let normalizedAngle = angle % (Math.PI * 2);
  if (normalizedAngle < 0) normalizedAngle += Math.PI * 2;

  // Adjust for pointer at top (subtract PI/2 and account for rotation direction)
  // Pointer is at -PI/2 (top), so we need 3PI/2 = 1.5PI offset
  const adjustedAngle = (Math.PI * 1.5 - normalizedAngle + Math.PI * 2) % (Math.PI * 2);

  const fieldIndex = Math.floor(adjustedAngle / fieldAngle) % fieldCount;
  return config[fieldIndex];
}
