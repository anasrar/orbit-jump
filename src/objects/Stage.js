import { Sprite } from "../core/kontra";
import DataGlobal from "../data/Global";
import { _mathCos, _mathPi, _mathSin } from "../core/Math";
import DataStages from "../data/Stages";

export default class Level extends Sprite.class {
    constructor() {
        super({});
    }

    render() {
        let __ctx = DataGlobal._init._context;

        __ctx.lineCap = "round";
        __ctx.lineWidth = 8;
        __ctx.strokeStyle = "#ff9898";

        DataStages[DataGlobal._stage]._walls.forEach((__p, __i, __arr) => {
            let [__nextX, __nextY] = __arr.length - 1 !== __i ? __arr[__i + 1] : __arr[0];
            let [__x, __y] = __p;
            __ctx.beginPath();
            __ctx.lineTo(__x, __y);
            __ctx.lineTo(__nextX, __nextY);
            __ctx.stroke();
            __ctx.closePath();
        });
    }
}