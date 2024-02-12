// imports ================================================== //
import { getChildHTMLElements } from "@shared/helpers";
import { AnimationJS } from "moveton";

// helpers ================================================== //
function getHeightKeyboard(keyboardRef: HTMLElement) {
    let rows_keyboard = getChildHTMLElements(keyboardRef);
    return rows_keyboard.length * (rows_keyboard[0].offsetHeight + 2.5);
};

// main ===================================================== //
const animations = {
    show(keyboardRef: HTMLElement) {

        setTimeout(() => {
            const animation_show = new AnimationJS(
                [keyboardRef],
                {
                    height: `0 -> ${getHeightKeyboard(keyboardRef)} px`,
                    opacity: "0 -> 1"
                }
            );

            return animation_show.start("linear", 300);
        }, 100)

    },
    hide(keyboardRef: HTMLElement) {

        const animation_hide = new AnimationJS(
            [keyboardRef],
            {
                height: `${keyboardRef.offsetHeight} -> 0 px`,
                opacity: "1 -> 0"
            }
        );

        return animation_hide.start("linear", 300);

    }
};

// exports ================================================= //
export { animations };