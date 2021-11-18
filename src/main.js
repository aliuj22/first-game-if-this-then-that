import Phaser from "phaser";

import game from "./scenes/game.js";
import game from "./scenes/start-page.js";
import game from "./scenes/game-over.js";
const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  scene: [game],
};

const game = new Phaser.Game(config);
