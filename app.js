class GameCanva {
  constructor(width, height) {
    this.width = width;
    this.height = height; 
    this.type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
      this.type = "canvas"
    }
    this.app = new PIXI.Application({width: this.width, height: this.height});

  }

  render() {
    document.body.appendChild(this.app.view);
  }

}

const gameBoard = new GameCanva(512, 512);

//Add the canvas that Pixi automatically created for you to the HTML document
// document.body.appendChild(gameBoard.app.view);
gameBoard.render()
PIXI.utils.sayHello(gameBoard.type)