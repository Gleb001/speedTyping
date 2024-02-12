// imports ================================================== //
import { AnimationJS } from "moveton";

// main ===================================================== //
const animations = {
    async show(TrainingRef: HTMLElement) {

        const animation_show = new AnimationJS(
            [TrainingRef],
            {
                opacity: "0 -> 1"
            }
        );

        return animation_show.start("linear", 300);

    },
    async hide(TrainingRef: HTMLElement) {

        const animation_hide = new AnimationJS(
            [TrainingRef],
            {
                opacity: "1 -> 0"
            }
        );

        return animation_hide.start("linear", 600);

    }
};

// exports ================================================= //
export { animations };