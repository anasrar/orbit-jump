import { init, initKeys, GameLoop, Vector } from "./core/kontra";
import { _loadStage, _removeObjectFromArray, _circleCollisionCheck, _wallCollisionCheck } from "./core/utilities";
import DataGlobal from "./data/Global";
import DataSound from "./data/Sound";
import DataStages from "./data/Stages";
import { zzfx } from "zzfx";
import { _loadStageHTML, _unlockStage } from "./data/Persistence";

_loadStageHTML();
initKeys();
let { canvas, context } = init();
DataGlobal._init = { _canvas: canvas, _context: context };

let _W = window, _D = document;

// resize window
let __resize = () => {
    let __size = _W.innerHeight < _W.innerWidth ? _W.innerHeight : _W.innerWidth;
    canvas.setAttribute("style", __size < 700 ? `width:${__size}px;height:${__size}px` : "");
};
__resize();
_W.onresize = __resize;

// restart / try again function
let __restart = () => {
    _D.querySelectorAll(".b").forEach(el => {
        el.classList.remove("s");
    });
    if (DataGlobal._gameLoop.isStopped) {
        DataGlobal._gameLoop.start();
    }
    _loadStage(DataGlobal._stage + 1);
}
// select stages function
let __selectStages = () => {
    _loadStageHTML();
    _D.querySelectorAll(".b").forEach(el => {
        el.classList.remove("s");
    });
    _D.getElementById("menu-stages").classList.add("s");
}

// restart stage and select stages
_W.onkeyup = e => {
    if (e.key === "r" && DataGlobal._canRestart) {
        __restart();
    } else if (e.key === "p" && DataGlobal._canRestart && !DataGlobal._gameLoop.isStopped) {
        __selectStages();
    }
};

// try again button
_D.querySelectorAll(".rs").forEach(el => {
    el.onclick = __restart;
});
// select stages button
_D.querySelectorAll(".ss").forEach(el => {
    el.onclick = __selectStages;
});
// next stage button
_D.getElementById("ns").onclick = () => {
    _D.querySelectorAll(".b").forEach(el => {
        el.classList.remove("s");
    });
    if (DataGlobal._gameLoop.isStopped) {
        DataGlobal._gameLoop.start();
    }
    _loadStage(DataGlobal._stage + 2);
}

// volume control
let _volumeInput = document.querySelectorAll(".volume");
_volumeInput.forEach(el => {
    el.value = 100;
    el.onchange = e => {
        for (let __keySound in DataSound) {
            DataSound[__keySound][0] = parseInt(e.target.value) / 100;
        }
        _volumeInput.forEach(el => {
            if (e.target !== el) {
                el.value = e.target.value;
            }
        })
    }
});

DataGlobal._gameLoop = GameLoop({
    update: function () {
        for (const __ship of DataGlobal._objetcs._ship._items) {
            if (__ship) {

                // Collision Wall
                DataStages[DataGlobal._stage]._walls.forEach((__w, __i, __arr) => {
                    if (_wallCollisionCheck(__ship, __w, __arr.length - 1 !== __i ? __arr[__i + 1] : __arr[0])) {
                        zzfx(...DataSound._explode);
                        DataGlobal._gameLoop.stop();
                        DataGlobal._canRestart = false;
                        setTimeout(() => {
                            _D.getElementById("menu-crash").classList.add("s");
                        }, 1.5 * 1000);
                        return;
                    }
                });

                // Collision Portal
                for (let __portal of DataGlobal._objetcs._portals._items) {
                    if (_circleCollisionCheck(__portal, __ship)) {
                        zzfx(...DataSound._portal);
                        DataGlobal._gameLoop.stop();
                        DataGlobal._canRestart = false;
                        _unlockStage(DataGlobal._stage + 2)
                        setTimeout(() => {
                            _D.getElementById("menu-" + (DataGlobal._stage !== 5 ? "finish" : "thanks")).classList.add("s");
                        }, 1.5 * 1000);
                        return;
                    }
                }

                // Collision Fuel
                for (let __fuel of DataGlobal._objetcs._fuels._items) {
                    if (_circleCollisionCheck(__fuel, __ship)) {
                        DataGlobal._objetcs._fuels._items = _removeObjectFromArray(DataGlobal._objetcs._fuels._items, __fuel);
                        DataGlobal._fuel += __fuel._fuel;
                        if (DataGlobal._fuel > 100) DataGlobal._fuel = 100;
                        zzfx(...DataSound._fuel);
                    }
                }

                // Collision Planet and Orbit
                for (let __planet of DataGlobal._objetcs._planets._items) {
                    if (_circleCollisionCheck(__planet, __ship)) {
                        zzfx(...DataSound._explode);
                        DataGlobal._gameLoop.stop();
                        DataGlobal._canRestart = false;
                        setTimeout(() => {
                            _D.getElementById("menu-crash").classList.add("s");
                        }, 1.5 * 1000);
                        return;
                    }

                    __ship._orbit = _circleCollisionCheck(__planet, __ship, __planet._collision_radius);
                    if (__ship._orbit) {
                        __ship._orbitOrigin = Vector(__planet.world.x, __planet.world.y);
                        __ship._orbitSpeed = __planet._orbitSpeed;
                        break;
                    }
                }
            }
        }

        // Update Object
        for (let __key in DataGlobal._objetcs) {
            let __obj = DataGlobal._objetcs[__key];
            if (__obj._update) {
                for (let __item of __obj._items) {
                    if (__item) __item.update();
                }
            }
        }
    },
    render: function () {
        // Render Object
        for (let __key in DataGlobal._objetcs) {
            let __obj = DataGlobal._objetcs[__key];
            if (__obj._render) {
                for (let __item of __obj._items) {
                    if (__item) __item.render();
                }
            }
        }

        if (DataGlobal._testDebug) {
            DataGlobal._testDebug.render();
        }
    }
});

DataGlobal._gameLoop.start();