// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import splitBy from ".";

// main ====================================================== //
const testingSplitBy = createMicroTest(
    splitBy,
    [["split me", 5], ["split", " me"]],
    [["split me", 0], ["", "split me"]],
    [["split me", -100], ["", "split me"]],
    [["split me", -2], ["", "split me"]],
);

// export ==================================================== //
export default testingSplitBy;