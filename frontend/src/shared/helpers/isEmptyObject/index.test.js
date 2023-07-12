// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import isEmptyObject from ".";

// main ====================================================== //
let testingIsEmptyObject = createMicroTest(
    isEmptyObject,
    [[{}], true],
    [[[]], false],
    [[{ length: 1 }], false],
    [[[1, 2, 3]], false],
);

// export ==================================================== //
export default testingIsEmptyObject;