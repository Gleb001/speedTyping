// imports =================================================== //
import { playAnimationCSSType } from "./types";

// main ====================================================== //
let playAnimationCSS: playAnimationCSSType = async (
    element, animation_css, duration
) => {
    element.style.animation = animation_css;
    await new Promise(resolve => setTimeout(() => {
        element.style.animation = "";
        resolve(true);
    }, duration));
};

// export ==================================================== //
export default playAnimationCSS;