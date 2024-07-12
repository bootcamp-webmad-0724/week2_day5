class Square {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.squareSize = {
            width: 200,
            height: 200
        }
    }

    init() {

        this.squareElement = document.createElement('div')

        this.squareElement.style.position = "absolute"
        this.squareElement.style.width = `${this.squareSize.width}px`
        this.squareElement.style.height = `${this.squareSize.height}px`
        this.squareElement.style.left = `${this.gameSize.width / 2 - this.squareSize.width / 2}px`
        this.squareElement.style.top = `${this.gameSize.height / 2 - this.squareSize.height / 2}px`
        this.squareElement.style.backgroundColor = `black`

        document.querySelector('#game-screen').appendChild(this.squareElement)
    }

}