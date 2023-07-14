// imports =================================================== //
import { getChildHTMLElements } from "@shared/helpers";
import { TextTypingRefType } from "../types";

// main ====================================================== //
function isResetTextTyping(textTyping: TextTypingRefType) {
    if (!textTyping) return false;
    let [disabledText, activeText] = getChildHTMLElements(textTyping);
    return (disabledText.offsetTop < activeText.offsetTop);
}

// export ==================================================== //
export default isResetTextTyping;