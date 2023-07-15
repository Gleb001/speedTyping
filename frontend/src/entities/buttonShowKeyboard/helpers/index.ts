// imports =================================================== //
// helpers --------------------------------------------------- //
import { getChildHTMLElements } from "@shared/helpers";
// internal -------------------------------------------------- //
import { getHeightKeyboardType } from "./types";

// main ====================================================== //
let getHeightKeyboard: getHeightKeyboardType = (keyboardRef) => {
    let rows_keyboard = getChildHTMLElements(keyboardRef);
    return rows_keyboard.length * (rows_keyboard[0].offsetHeight + 2.5);
}

// export ==================================================== //
export default getHeightKeyboard;