const Game = {

  gameScreen: document.querySelector("#game-screen"),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  circles: [],

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    this.setEventListeners()
    this.startGameLoop()
  },

  setEventListeners() {
    document.onkeyup = event => {
      if (event.code === 'Space') this.shoot()
    }
  },

  shoot() {
    console.log(this.circles)
    const newBall = new Circle(this.gameSize)
    this.circles.push(newBall)
  },

  startGameLoop() {
    setInterval(() => {
      this.moveAll()
      this.clearAll()
    }, 30)
  },

  moveAll() {
    this.circles.forEach(elm => elm.move())
  },

  clearAll() {

    this.circles.forEach((eachBall, i) => {
      if (eachBall.circlePos.left >= this.gameSize.w) {
        eachBall.circleElement.remove()        // Eliminar del DOM
        this.circles.splice(i, 1)              // Eliminar del array (memoria)
      }
    })
  }

}