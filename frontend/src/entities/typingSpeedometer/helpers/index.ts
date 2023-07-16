// imports =================================================== //
import { TotalSpeedType } from "./types";

// main ====================================================== //
const getSpeed: TotalSpeedType = (length_char, time) => (
    time !== 0 ? Math.floor(length_char / time) : 0
);

// export ==================================================== //
export { getSpeed };