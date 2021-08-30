import { Sprite, keyPressed, Vector } from "../core/kontra";
import { _lerp } from "../core/utilities";
import { _mathCos, _mathSin, _mathPi, _mathSign, _mathAtan2 } from "../core/Math";
import DataGlobal from "../data/Global";
import DataSound from "../data/Sound";
import { zzfx } from "zzfx";

export default class Ship extends Sprite.class {
    constructor(prop) {
        super({
            x: prop.x,
            y: prop.y,
            anchor: { x: 0.5, y: 0.5 },
            width: 18,
            height: 18,
            color: "#FFF",
            rotation: prop._rotation || 0,
        });

        this._radius = 7;
        this._orbit = false;
        this._orbitSpeed = 0.1;
        this._orbitOrigin = Vector(0, 0);

        [
            {
                x: 3,
                y: 0,
                anchor: { x: 0.5, y: 0.5 },
                width: 8,
                height: 10,
                color: "#98DEFF",
            },
            {
                x: -10,
                y: -8,
                anchor: { x: 0.5, y: 0.5 },
                width: 16,
                height: 8,
                color: "#CCC",
            },
            {
                x: -10,
                y: 8,
                anchor: { x: 0.5, y: 0.5 },
                width: 16,
                height: 8,
                color: "#CCC",
            },
            {
                x: -18,
                y: -8,
                anchor: { x: 1, y: 0.5 },
                width: 0,
                height: 6,
                color: "#FF9898",
            },
            {
                x: -18,
                y: 8,
                anchor: { x: 1, y: 0.5 },
                width: 0,
                height: 6,
                color: "#FF9898",
            },
        ].forEach(p => {
            this.addChild(Sprite(p));
        });
    }

    update() {
        // Orbit
        if (this._orbit) {
            let __worldPosition = Vector(this.world.x, this.world.y);
            let __radNextD = _mathAtan2(this.world.y - this._orbitOrigin.y, this.world.x - this._orbitOrigin.x) + this._orbitSpeed; // add _orbitSpeed as degree ahead
            let __vecNextD = Vector(_mathCos(__radNextD), _mathSin(__radNextD)).scale(this._orbitOrigin.distance(__worldPosition)).add(this._orbitOrigin).subtract(__worldPosition).scale(0.1);
            this.dx = __vecNextD.x;
            this.dy = __vecNextD.y;
        }

        // Rotation
        let __inputRotation = ((keyPressed("d") ? 1 : 0) - (keyPressed("a") ? 1 : 0));
        __inputRotation = DataGlobal._fuel > 0 ? __inputRotation * 3 * _mathPi / 180 : 0;
        this.rotation += __inputRotation;
        DataGlobal._fuel -= _mathSign(__inputRotation) * _mathSign(__inputRotation) * 0.1;
        if (__inputRotation !== 0) {
            zzfx(...DataSound._shipBoost);
        }

        // Boost
        let __boost = keyPressed("w") && DataGlobal._fuel > 0 ? 1 : 0;
        this.dx = __boost ? _mathCos(this.rotation) * 2 * __boost : _lerp(this.dx, 0, 0.04);
        this.dy = __boost ? _mathSin(this.rotation) * 2 * __boost : _lerp(this.dy, 0, 0.04);
        DataGlobal._fuel -= __boost * 0.5;
        [3, 4].forEach(i => {
            this.children[i].width = 6 * __boost;
        });
        if (__boost && __inputRotation === 0) {
            zzfx(...DataSound._shipBoost);
        }

        // Update Fuel HUD
        DataGlobal._objetcs._HUD._items[0].children[3].width = DataGlobal._fuel / 100 * 220;

        super.update();
    }
}