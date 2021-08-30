import { Sprite } from "../core/kontra";
import DataGlobal from "../data/Global";
import { _mathPi, _mathSin, _mathCos, _mathPow } from "../core/Math";

export default class Portal extends Sprite.class {
    constructor(prop) {
        super({
            x: prop.x,
            y: prop.y,
            width: prop._radius * 2,
            height: prop._radius * 2,
            anchor: { x: 0.5, y: 0.5 },
            // color: "#AD98FF",
        });
        this._color = prop._color;
        this._radius = prop._radius;
        this._trail = prop._trail;
        this._trailLength = prop._trailLength;
        this._trailWidth = prop._trailWidth;
        this._time = 0;
    }

    render() {
        super.render();
        this._time += 1 / 60;
        let __ctx = DataGlobal._init._context;

        for (let i = 0; i < this._trail; i++) {
            let __theta = 2 * _mathPi / this._trail * i;
            let __x = _mathCos(__theta + this._time);
            let __y = _mathSin(__theta + this._time);
            let __xCurve = _mathCos(__theta + this._time + 1);
            let __yCurve = _mathSin(__theta + this._time + 1);
            __ctx.lineCap = "round";
            __ctx.strokeStyle = this._color;
            __ctx.lineWidth = this._trailWidth;
            __ctx.beginPath();
            __ctx.moveTo(this.x + (__x * this._radius), this.y + (__y * this._radius));
            __ctx.quadraticCurveTo(this.x + (__xCurve * ((this._trailLength / 3) + this._radius)), this.y + (__yCurve * ((this._trailLength / 3) + this._radius)), this.x + (__x * (this._trailLength + this._radius)), this.y + (__y * (this._trailLength + this._radius)));
            __ctx.stroke();
            __ctx.closePath();
        }

        __ctx.fillStyle = this._color;
        __ctx.beginPath();
        __ctx.arc(this.x, this.y, this._radius, 0, 2 * _mathPi);
        __ctx.fill();
        __ctx.closePath();

        let innerGradient = __ctx.createRadialGradient(this.world.x, this.world.y, 0, this.world.x, this.world.y, this._radius - 5);
        innerGradient.addColorStop(0, "#000");
        innerGradient.addColorStop(0.5 + (_mathPow(_mathSin(this._time), 2) * 0.2), "#000");
        innerGradient.addColorStop(0.51 + (_mathPow(_mathSin(this._time), 2) * 0.2), "rgba(255, 255, 255, 0.7)");
        innerGradient.addColorStop(1, "rgba(255, 255, 255, 0.7)");

        __ctx.fillStyle = innerGradient;
        __ctx.beginPath();
        __ctx.arc(this.x, this.y, this._radius - 5, 0, 2 * _mathPi);
        __ctx.fill();
        __ctx.closePath();
    }

}