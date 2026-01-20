// Main entry point - Wheel of Fortune for MaroRPG

import './style.css';
import { GameUI } from './game/GameUI';

// Initialize the game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new GameUI();
});
