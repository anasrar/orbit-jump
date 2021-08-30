import { _mathPi } from "../core/Math";
import Fuel from "../objects/Fuel";
import Planet from "../objects/Planet";
import Portal from "../objects/Portal";
import Ship from "../objects/Ship";
import Stage from "../objects/Stage";
import HUD from "../objects/HUD";

export default [
    {
        // Stage 1
        _walls: [
            [100, 548],
            [100, 430],
            [380, 430],
            [450, 330],
            [450, 150],
            [600, 152],
            [600, 548],
        ],
        _objects: [
            {
                // layer index [_stage ,_portals, _planets, _fuels, _ship, _HUD]
                _layer: 0,
                _class: Stage,
                _prop: {},
            },
            {
                _layer: 5,
                _class: HUD,
                _prop: {},
            },
            {
                _layer: 1,
                _class: Portal,
                _prop: {
                    x: 525,
                    y: 220,
                    _color: "#AD98FF",
                    _radius: 30,
                    _trail: 12,
                    _trailLength: 10,
                    _trailWidth: 10,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 474,
                    y: 422,
                    _color: "#FBFBFD",
                    _radius: 30,
                    _collision_radius: 80,
                    _speed: -2,
                    _orbitSpeed: -0.1,
                },
            },
            {
                _layer: 3,
                _class: Fuel,
                _prop: {
                    x: 280,
                    y: 473,
                    _fuel: 80,
                },
            },
            {
                _layer: 4,
                _class: Ship,
                _prop: {
                    x: 180,
                    y: 473,
                    _rotation: -1,
                },
            },
        ],
        _fuel: 30,
    },
    {
        // Stage 2
        _walls: [
            [67, 103],
            [517, 103],
            [517, 504],
            [633, 504],
            [633, 596],
            [143, 596],
            [143, 169],
            [67, 169],
        ],
        _objects: [
            {
                // layer index [_stage ,_portals, _planets, _fuels, _ship, _HUD]
                _layer: 0,
                _class: Stage,
                _prop: {},
            },
            {
                _layer: 5,
                _class: HUD,
                _prop: {},
            },
            {
                _layer: 1,
                _class: Portal,
                _prop: {
                    x: 580,
                    y: 548,
                    _color: "#f94e93",
                    _radius: 30,
                    _trail: 12,
                    _trailLength: 10,
                    _trailWidth: 10,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 378,
                    y: 460,
                    _color: "#37bcd4",
                    _radius: 30,
                    _collision_radius: 90,
                    _speed: -2.8,
                    _orbitSpeed: -0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 273,
                    y: 230,
                    _color: "#95f54f",
                    _radius: 30,
                    _collision_radius: 80,
                    _speed: 2.5,
                    _orbitSpeed: 0.15,
                },
            },
            {
                _layer: 4,
                _class: Ship,
                _prop: {
                    x: 103,
                    y: 143,
                    _rotation: 1,
                },
            },
        ],
        _fuel: 60,
    },
    {
        // Stage 3
        _walls: [
            [57, 150],
            [117, 150],
            [117, 350],
            [217, 350],
            [403, 115],
            [643, 115],
            [643, 585],
            [403, 585],
            [403, 205],
            [272, 375],
            [272, 375],
            [267, 500],
            [57, 500],
        ],
        _objects: [
            {
                // layer index [_stage ,_portals, _planets, _fuels, _ship, _HUD]
                _layer: 0,
                _class: Stage,
                _prop: {},
            },
            {
                _layer: 5,
                _class: HUD,
                _prop: {},
            },
            {
                _layer: 1,
                _class: Portal,
                _prop: {
                    x: 586,
                    y: 525,
                    _color: "#f9ad4e",
                    _radius: 30,
                    _trail: 12,
                    _trailLength: 10,
                    _trailWidth: 10,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 167,
                    y: 400,
                    _color: "#efff98",
                    _radius: 30,
                    _collision_radius: 50,
                    _speed: -1.5,
                    _orbitSpeed: -0.04,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 487,
                    y: 330,
                    _color: "#4f5bf5",
                    _radius: 30,
                    _collision_radius: 100,
                    _speed: 2.5,
                    _orbitSpeed: 0.15,
                },
            },
            {
                _layer: 3,
                _class: Fuel,
                _prop: {
                    x: 320,
                    y: 270,
                    _fuel: 40,
                },
            },
            {
                _layer: 4,
                _class: Ship,
                _prop: {
                    x: 87,
                    y: 180,
                    _rotation: 2,
                },
            },
        ],
        _fuel: 50,
    },
    {
        // Stage 4
        _walls: [
            [338.2, 535.5],
            [338.2, 599],
            [55, 599],
            [350, 99],
            [645, 599,],
            [361.8, 599],
            [361.8, 535.5],
            [524.64, 535.5],
            [350, 229],
            [179.49, 535.5],
        ],
        _objects: [
            {
                // layer index [_stage ,_portals, _planets, _fuels, _ship, _HUD]
                _layer: 0,
                _class: Stage,
                _prop: {},
            },
            {
                _layer: 5,
                _class: HUD,
                _prop: {},
            },
            {
                _layer: 1,
                _class: Portal,
                _prop: {
                    x: 429,
                    y: 569,
                    _color: "#6E7C7C",
                    _radius: 30,
                    _trail: 12,
                    _trailLength: 10,
                    _trailWidth: 10,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 350,
                    y: 267,
                    _color: "#98DDCA",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 207,
                    y: 510,
                    _color: "#CD5D7D",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 496,
                    y: 515,
                    _color: "#949CDF",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 3,
                _class: Fuel,
                _prop: {
                    x: 350,
                    y: 180,
                    _fuel: 60,
                },
            },
            {
                _layer: 4,
                _class: Ship,
                _prop: {
                    x: 300,
                    y: 569,
                    _rotation: _mathPi - 1,
                },
            },
        ],
        _fuel: 56,
    },
    {
        // Stage 5
        _walls: [
            [143, 600],
            [143, 100],
            [322, 100],
            [322, 523],
            [359, 523],
            [359, 100],
            [542, 100],
            [542, 600],
            [465, 600],
            [465, 166],
            [434, 166],
            [434, 600],
            [256, 600],
            [256, 166],
            [207, 166],
            [207, 600],
        ],
        _objects: [
            {
                // layer index [_stage ,_portals, _planets, _fuels, _ship, _HUD]
                _layer: 0,
                _class: Stage,
                _prop: {},
            },
            {
                _layer: 5,
                _class: HUD,
                _prop: {},
            },
            {
                _layer: 1,
                _class: Portal,
                _prop: {
                    x: 503,
                    y: 545,
                    _color: "#E36387",
                    _radius: 30,
                    _trail: 12,
                    _trailLength: 10,
                    _trailWidth: 10,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 232,
                    y: 185,
                    _color: "#9DAD7F",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 346,
                    y: 508,
                    _color: "#DF7861",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: -2.8,
                    _orbitSpeed: -0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 346,
                    y: 341,
                    _color: "#6155A6",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: -2.8,
                    _orbitSpeed: -0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 453,
                    y: 185,
                    _color: "#5EAAA8",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 3,
                _class: Fuel,
                _prop: {
                    x: 352,
                    y: 580,
                    _fuel: 80,
                },
            },
            {
                _layer: 4,
                _class: Ship,
                _prop: {
                    x: 176,
                    y: 570,
                    _rotation: -1,
                },
            },
        ],
        _fuel: 80
    },
    {
        // Stage 6
        _walls: [
            [113, 81], [30, 94], [42, 345],
            [228, 327], [220, 185], [243, 180],
            [252, 261], [437, 247], [426, 143],
            [554, 150], [567, 170], [473, 179],
            [485, 261], [267, 272], [273, 440],
            [572, 429], [577, 552], [121, 562],
            [107, 420], [153, 413], [157, 544],
            [556, 539], [548, 445], [243, 458],
            [228, 345], [30, 364], [42, 639],
            [670, 634], [677, 351], [367, 364],
            [363, 345], [577, 338], [581, 243],
            [671, 233], [670, 81], [332, 69],
            [340, 193], [320, 190], [304, 69],
            [153, 89], [148, 241], [121, 247],
        ],
        _objects: [
            {
                // layer index [_stage ,_portals, _planets, _fuels, _ship, _HUD]
                _layer: 0,
                _class: Stage,
                _prop: {},
            },
            {
                _layer: 5,
                _class: HUD,
                _prop: {},
            },
            {
                _layer: 1,
                _class: Portal,
                _prop: {
                    x: 502,
                    y: 499,
                    _color: "#679B9B",
                    _radius: 30,
                    _trail: 12,
                    _trailLength: 10,
                    _trailWidth: 10,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 127,
                    y: 233,
                    _color: "#82C4C3",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: -2.8,
                    _orbitSpeed: -0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 324,
                    y: 168,
                    _color: "#B49C73",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: -2.8,
                    _orbitSpeed: -0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 554,
                    y: 152,
                    _color: "#856C8B",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 368,
                    y: 350,
                    _color: "#424874",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: -2.8,
                    _orbitSpeed: -0.17,
                },
            },
            {
                _layer: 2,
                _class: Planet,
                _prop: {
                    x: 127,
                    y: 435,
                    _color: "#424874",
                    _radius: 30,
                    _collision_radius: 43,
                    _speed: 2.8,
                    _orbitSpeed: 0.17,
                },
            },
            {
                _layer: 3,
                _class: Fuel,
                _prop: {
                    x: 520,
                    y: 290,
                    _fuel: 100,
                },
            },
            {
                _layer: 3,
                _class: Fuel,
                _prop: {
                    x: 300,
                    y: 600,
                    _fuel: 90,
                },
            },
            {
                _layer: 4,
                _class: Ship,
                _prop: {
                    x: 69,
                    y: 124,
                    _rotation: _mathPi - 1,
                },
            },
        ],
        _fuel: 100
    },
];