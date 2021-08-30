import { Sprite, Text } from "../core/kontra";
import DataGlobal from "../data/Global";
import { _HEX2RGB } from "../core/utilities";
import { _mathPi, _mathSin, _mathPow } from "../core/Math";

export default class Planet extends Sprite.class {
    constructor(prop) {
        super({
            x: prop.x,
            y: prop.y,
            width: prop._radius * 2,
            height: prop._radius * 2,
            anchor: { x: 0.5, y: 0.5 },
        });
        this._color = prop._color;
        this._radius = prop._radius;
        this._collision_radius = prop._collision_radius;
        this._speed = prop._speed;
        this._orbitSpeed = prop._orbitSpeed;
        this._time = 0;

        [
            [-18, 12, 25],
            [20, 2, 30],
            [-10, -10, 50],
        ].forEach(p => {
            this.addChild(Text({
                x: p[0],
                y: p[1],
                text: "●",
                font: `${p[2]}px Arial`,
                color: "rgba(0, 0, 0, 0.2)",
                anchor: { x: 0.5, y: 0.5 },
            }));
        })
    }

    render() {
        this._time += 1 / 60;
        this.rotation += this._speed * _mathPi / 180;
        let __ctx = DataGlobal._init._context;

        let __layer = 2;
        for (let i = 0; i < __layer; i++) {
            __ctx.fillStyle = `rgba(${_HEX2RGB(this._color)}, ${0.2})`;
            __ctx.beginPath();
            __ctx.arc(this.x, this.y, this._radius + this._collision_radius - (i * this._collision_radius / __layer) - (_mathPow(_mathSin(this._time), 2) * 10), 0, 2 * _mathPi);
            __ctx.fill();
            __ctx.closePath();
        }

        __ctx.fillStyle = this._color;
        __ctx.beginPath();
        __ctx.arc(this.x, this.y, this._radius, 0, 2 * _mathPi);
        __ctx.fill();
        __ctx.closePath();
        super.render();
    }
}