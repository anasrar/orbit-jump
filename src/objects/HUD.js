import { Sprite, Text } from "../core/kontra";
import DataGlobal from "../data/Global";

export default class HUD extends Sprite.class {
    constructor() {
        super({
            x: 0,
            y: 0,
        });
        // Background And Fuel Bar
        [
            {
                x: 0,
                y: 0,
                width: DataGlobal._init._canvas.width,
                height: 52,
                color: "#45454D",
            },
            {
                x: 0,
                y: DataGlobal._init._canvas.height - 52,
                width: DataGlobal._init._canvas.width,
                height: 52,
                color: "#45454D",
            },
            {
                x: 64,
                y: 16,
                width: 220,
                height: 20,
                color: "#222",
            },
            {
                x: 64,
                y: 16,
                width: DataGlobal._fuel / 100 * 220,
                height: 20,
                color: "#FBFBFD",
            },
        ].forEach(p => {
            this.addChild(Sprite(p));
        });

        // Text HUD
        let __dataText = {
            _font: "20px Verdana",
            _color: "#FFF"
        };

        [
            {
                text: "fuel",
                font: __dataText._font,
                color: __dataText._color,
                x: 16,
                y: 16,
            },
            {
                text: "R - restart stage",
                font: __dataText._font,
                color: __dataText._color,
                x: DataGlobal._init._canvas.width - 16,
                y: 16,
                anchor: { x: 1, y: 0 },
            },
            {
                text: "A/D - rotate",
                font: __dataText._font,
                color: __dataText._color,
                x: 16,
                y: DataGlobal._init._canvas.height - 16,
                anchor: { x: 0, y: 1 },
            },
            {
                text: "P - select stages",
                font: __dataText._font,
                color: __dataText._color,
                x: DataGlobal._init._canvas.width - 16,
                y: DataGlobal._init._canvas.height - 16,
                anchor: { x: 1, y: 1 },
            },
            {
                text: "W - boost",
                font: __dataText._font,
                color: __dataText._color,
                x: DataGlobal._init._canvas.width / 2,
                y: DataGlobal._init._canvas.height - 16,
                anchor: { x: 0.5, y: 1 },
            },
        ].forEach(p => {
            this.addChild(Text(p));
        });

    }
}