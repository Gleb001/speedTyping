// imports =================================================== //
// helpers --------------------------------------------------- //
import { getChildHTMLElements } from "@shared/helpers";
import { playAnimationCSS } from "@shared/libs";
// internal -------------------------------------------------- //
import {
    actionOnKeyboardType,
    getHeightKeyboardType 
} from "./types";

// main ====================================================== //
let getHeightKeyboard: getHeightKeyboardType = (
    keyboardRef,
) => {
    let rows_keyboard = getChildHTMLElements(keyboardRef);
    return rows_keyboard.length * (rows_keyboard[0].offsetHeight + 2.5);
};
let actionOnKeyboard: actionOnKeyboardType = (
    type,
) => {
    let keyboardRef = document.getElementById("keyboard");
    if (!keyboardRef) return new Promise(() => {});

    let [start, end] = type === "hide" ?
                            [getHeightKeyboard(keyboardRef), 0] :
                            [0, getHeightKeyboard(keyboardRef)];

    keyboardRef.style.setProperty("--start-height", start + "px");
    keyboardRef.style.setProperty("--end-height", end + "px");

    return playAnimationCSS(
        keyboardRef,
        `
            ${type === "hide" ? "disappear" : "appear"} linear 400ms forwards,
            changeHeightKeyboard linear 400ms forwards
        `,
        600
    ).then(() => end);
};

// export ==================================================== //
export { getHeightKeyboard, actionOnKeyboard };