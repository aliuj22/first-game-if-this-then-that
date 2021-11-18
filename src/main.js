import Phaser from "phaser";

//import Game from "./scenes/game.js";
// // import Game from "../scenes/start-page.js";
// // import Game from "../scenes/game-over.js";
const gameState = {};

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 500,

  //backgroundColor: 0x2a832,
  physics: {
    default: "arcade",
  },
  scene: {
    preload,
    create,
  },
};

function preload() {
  console.log(preload);
  this.load.image("chik", "./ChikBoy_idle.png");
  // this.load.image("chicken", "./Assets/ChikBoy_idle.png");
}

function create() {
  this.add.image = (400, 300, "chik");
  // this.add.image(50, 100, "chicken");
}

const Game = new Phaser.Game(config);
//function update() {}
