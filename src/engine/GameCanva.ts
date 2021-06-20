// GameCanva.ts renders the 2D display to an user

import * as PIXI from 'pixi.js';

export default class GameCanva {
    width: number;
    height: number;
    type: string;
    app: any;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.type = "WebGL";
        if (!PIXI.utils.isWebGLSupported()) {
            this.type = "canvas"
        }
        this.app = new PIXI.Application({ width: this.width, height: this.height });

    }

    render() {
        document.body.appendChild(this.app.view);
    }

}