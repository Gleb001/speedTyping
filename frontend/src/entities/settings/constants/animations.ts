// imports ================================================== //
import { AnimationJS } from "moveton";

// main ===================================================== //
const animations = {
    show(WindowSettingsRef: HTMLElement) {

        const heightWindow = window.innerHeight;
        const centerHeight = (heightWindow - WindowSettingsRef.offsetHeight) / 2;

        const animation_show = new AnimationJS(
            [WindowSettingsRef],
            {
                top: `${heightWindow} -> ${centerHeight} px`
            }
        );

        return animation_show.start("linear", 450);

    },
    hide(WindowSettingsRef: HTMLElement) {

        const heightWindow = window.innerHeight;

        const animation_hide = new AnimationJS(
            [WindowSettingsRef],
            {
                top: `${WindowSettingsRef.offsetTop} -> ${heightWindow} px`
            }
        );
        
        return animation_hide.start("linear", 450);

    }
};

// exports ================================================= //
export { animations };