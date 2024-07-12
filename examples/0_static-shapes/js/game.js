const Game = {

  gameSize: {
    width: 900,
    height: 500
  },

  init() {
    this.setGameDimensions()
    this.createSquare()
  },

  setGameDimensions() {
    document.querySelector('#game-screen').style.height = `${this.gameSize.height}px`
    document.querySelector('#game-screen').style.width = `${this.gameSize.width}px`
  },

  createSquare() {
    const firstSquare = new Square(this.gameSize)
    firstSquare.init()
  }

}