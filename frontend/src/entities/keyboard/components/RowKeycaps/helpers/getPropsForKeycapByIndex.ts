// imports ================================================== //
import type { FingerStatus } from "../../Keycap/types";

// types ==================================================== //
type getPropsForKeycapByIndex = (index: number) => [FingerStatus, boolean]

// main ===================================================== //
const getPropsForKeycapByIndex: getPropsForKeycapByIndex = (index) => {

    switch (index) {

        // left hand
        case 0:
        case 1: return ["little", true];
        case 2: return ["ring"  , true];
        case 3: return ["middle", true];
        case 4:
        case 5: return ["index" , true];

        // right hand
        case 6:
        case 7: return ["little", false];
        case 8: return ["ring"  , false];
        case 9: return ["middle", false];
        default: return ["little", false];

    }

}

// exports ================================================= //
export default getPropsForKeycapByIndex;