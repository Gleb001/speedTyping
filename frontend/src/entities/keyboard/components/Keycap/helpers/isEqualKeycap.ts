// imports ================================================== //
import type { Keycap } from "@entities/keyboard/types";

// types ==================================================== //
type isActiveKeycap = (activeKeycaps: Keycap, checkKeycaps: Keycap) => boolean

// main ===================================================== //
const isActiveKeycap: isActiveKeycap = (activeKeycaps, checkKeycaps) => {
    for (const checkKeycap of checkKeycaps) {
        for (const activeKeycap of activeKeycaps) {
            if (activeKeycap.toLowerCase() === checkKeycap.toLowerCase()) {
                return true;
            }
        }
    }
    return false;
};

// exports ================================================= //
export default isActiveKeycap;