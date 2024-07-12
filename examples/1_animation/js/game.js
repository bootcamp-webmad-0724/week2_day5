const Game = {

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  circle: undefined,

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    document.querySelector("#game-screen").style.width = `${this.gameSize.w}px`
    document.querySelector("#game-screen").style.height = `${this.gameSize.h}px`
  },

  start() {
    this.createElements()
    this.startGameLoop()
  },

  createElements() {
    this.circle = new Circle(this.gameSize)
  },

  startGameLoop() {

    setInterval(() => {
      this.moveAll()
    }, 20)
  },

  moveAll() {
    this.circle.move()
  }

}