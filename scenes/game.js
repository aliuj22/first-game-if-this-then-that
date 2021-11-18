// import Phaser from 'phaser';

// import {} from '..'

class Game extends Phaser.Scene {
  preload() {
    this.load.image("chicken", "./Assets/ChikBoy_idle.png");
  }

  create() {
    this.add.image(50, 100, "chicken");
  }

  update() {}
}

export default Game;
