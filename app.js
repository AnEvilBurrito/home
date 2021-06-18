import GameCanva from './js-src/GameCanva.js'
var VirtualPoint = require('./ts-built/engine/World.js');

const gameBoard = new GameCanva(512, 512);

//Add the canvas that Pixi automatically created for you to the HTML document
// document.body.appendChild(gameBoard.app.view);
gameBoard.render()
PIXI.utils.sayHello(gameBoard.type)