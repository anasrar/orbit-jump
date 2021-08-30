import DataGlobal from "../data/Global";
import DataStages from "../data/Stages";
import { Sprite, Vector } from "./kontra";
import { _mathCos, _mathPow, _mathSin } from "./Math";

/**
 * remove object from array.
 * 
 * Example :
 * ```js
 * let testArray = [1, 2, 3, 4, 5];
 * testArray = _removeObjectFromArray(testArray, 3);
 * console.log(testArray);
 * ```
 *
 * @function _removeObjectFromArray
 *
 * @param {Array} arr - Array it self.
 *
 * @param {Object} obj - Object that want to remove.
 *
 * @returns {Array} new array.
 */
export function _removeObjectFromArray(arr, obj) {
    return arr.filter(item => item !== obj);
}

/**
 * convert hex to rgb.
 * 
 * https://convertingcolors.com/blog/article/convert_hex_to_rgb_with_javascript.html
 *
 * @function _HEX2RGB
 *
 * @param {String} hex - hex string (6 digit allowed) with hash, example : #fff.
 *
 * @returns {Array} new array [r, g, b].
 */
export function _HEX2RGB(hex) {
    let c = hex.substring(1).match(/.{1,2}/g);
    return [
        parseInt(c[0], 16),
        parseInt(c[1], 16),
        parseInt(c[2], 16),
    ]
}

/**
 * linear interpolation.
 * 
 * @function _lerp
 *
 * @param {Number} a - a value.
 * 
 * @param {Number} b - b value.
 * 
 * @param {Number} f - factor value.
 *
 * @returns {Number} result interpolation.
 */
export function _lerp(a, b, f) {
    return a + f * (b - a);
}

/**
 * get rundom number with seed.
 * 
 * https://gist.github.com/blixt/f17b47c62508be59987b
 * 
 * @function _randomNumberWithSeed
 *
 * @param {Number} seed - seed.
 *
 * @returns {Number} result random number.
 */
export function _randomNumberWithSeed(seed) {
    let res = seed % 2147483647;
    return res <= 0 ? res + 2147483646 : res;
}

/**
 * checking collision using circle shape.
 *  
 * @function _circleCollisionCheck
 *
 * @param {Object} _obj1 - object 1.
 * 
 * @param {Object} _obj2 - object 2.
 * 
 * @param {Number} _additionalRadius - addition radius.
 *
 * @returns {Boolean} ture if 2 objects colliding.
 */
export function _circleCollisionCheck(_obj1, _obj2, _additionalRadius = 0) {
    return Vector(_obj1.world.x, _obj1.world.y).distance(Vector(_obj2.world.x, _obj2.world.y)) < (_obj2._radius + _obj1._radius + _additionalRadius);
}

export function _wallCollisionCheck(_ship, _point, _nextPoint) {
    let [__nextX, __nextY] = _nextPoint,
        [__x, __y] = _point;

    let __wallDirection = Vector(__nextX - __x, __nextY - __y);
    let __wallLength = __wallDirection.length();
    let __shipDirection = Vector(_ship.world.x - __x, _ship.world.y - __y);
    let __dotProduct = __shipDirection.dot(__wallDirection);
    let __wallProjection = __wallDirection.scale(__dotProduct / _mathPow(__wallLength, 2));

    if (__dotProduct > 0 && __wallProjection.length() < __wallLength) {
        return _circleCollisionCheck(
            {
                _radius: 7, // ship radius
                world: {
                    x: __shipDirection.x,
                    y: __shipDirection.y,
                }
            },
            {
                _radius: 4, // wall width in Stage.js
                world: {
                    x: __wallProjection.x,
                    y: __wallProjection.y,
                }
            }
        );
    }
    return false;
}

/**
 * load stage.
 *  
 * @function _loadStage
 *
 * @param {Number} _stage - stage.
 * 
 */

export function _loadStage(_stage) {
    _stage -= 1;
    DataGlobal._canRestart = true;
    DataGlobal._stage = _stage;
    let __stageInfo = DataStages[_stage];
    DataGlobal._fuel = __stageInfo._fuel;

    // clear objects and save the key poprerties as index layer becouse will be change in teaser mangler
    let __indexLayer = [];
    for (let __key in DataGlobal._objetcs) {
        __indexLayer.push(__key);
        DataGlobal._objetcs[__key]._items = [];
    }

    // add objects
    for (let __obj of __stageInfo._objects) {
        DataGlobal._objetcs[__indexLayer[__obj._layer]]._items.push(new __obj._class(__obj._prop));
    }
};
