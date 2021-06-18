// GameCanva.js renders the 2D display to an user

export default class GameCanva {
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