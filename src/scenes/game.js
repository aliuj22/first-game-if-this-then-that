import Phaser from "phaser";

class Game extends Phaser.Scene {
  preload() {
    // this.load.image("Chik", "../Assets/ChikBoy_idle.png");
    // this.load.image("chicken", "./Assets/ChikBoy_idle.png");
  }

  create() {
    this.add.text(400, 300, "this is alex");
    // this.add.image(50, 100, "chicken");
  }

  update() {}
}

export default Game;
