import { Sprite, Text } from "../core/kontra";

export default class Fuel extends Sprite.class {
    constructor(prop) {
        super({
            x: prop.x,
            y: prop.y,
            width: 22,
            height: 22,
            color: "#d44646",
            anchor: { x: 0.5, y: 0.5 },
        });

        this._radius = 13;
        this._fuel = prop._fuel;

        [
            Sprite({
                x: 0,
                y: -11,
                width: 22,
                height: 2,
                color: "rgba(255, 255, 255, 0.3)",
                anchor: { x: 0.5, y: 0 },
            }),
            Sprite({
                x: 0,
                y: 9,
                width: 22,
                height: 2,
                color: "rgba(255, 255, 255, 0.3)",
                anchor: { x: 0.5, y: 0 },
            }),
            Sprite({
                x: 0,
                y: 0,
                width: 22,
                height: 2,
                color: "rgba(255, 255, 255, 0.3)",
                anchor: { x: 0.5, y: 0.5 },
            }),
            Text({
                text: "fuel",
                font: "12px Verdana",
                color: "#FFF",
                x: 2,
                y: 3,
            }),
        ].forEach(__obj => {
            this.addChild(__obj);
        });
    }
}