import DataGlobal from "../data/Global";
import { _loadStage } from "../core/utilities";

let __localStorage = localStorage;
let __d = document;

export function _loadStageHTML() {
    let __section = __d.getElementById("stages");
    __section.innerHTML = "";
    for (let __i = 0; __i < 6; __i++) {
        let __buttonElement = __d.createElement("button");
        __buttonElement.innerHTML = `<h3 class="btn">${__i + 1}</h3>`;
        __buttonElement.setAttribute("class", "s-b" + (__i === 0 ? "" : (_getUnlockStageStatus(__i + 1) ? "" : " l")));
        __section.appendChild(__buttonElement);
        __buttonElement.onclick = e => {
            e.preventDefault();
            if (__i === 0 || _getUnlockStageStatus(__i + 1)) {
                __d.querySelectorAll(".b").forEach(el => {
                    el.classList.remove("s");
                });
                if (DataGlobal._gameLoop.isStopped) {
                    DataGlobal._gameLoop.start();
                }
                _loadStage(__i + 1);
            }
        }
    }
}

export function _getUnlockStageStatus(num) {
    return !!parseInt((__localStorage.getItem("oj_" + num) || "0"));
}

export function _unlockStage(num) {
    __localStorage.setItem("oj_" + num, "1");
}