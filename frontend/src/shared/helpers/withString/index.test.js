// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import { isChar, isUpperCase } from ".";

// main ====================================================== //
const testingIsChar = createMicroTest(
    isChar,
    [["a"], true],
    [["A"], true],
    [["g"], true],
    [["G"], true],

    [["/"       ], false],
    [["abc"     ], false],
    [[" "       ], false],
    [["shift"   ], false],
    [["Control" ], false],
    [["0"       ], false],
    [["`"       ], false],
    [[""        ], false],
);
const testingIsUpperCase = createMicroTest(
    isUpperCase,
    [["A"], true],
    [["G"], true],

    [["a"], false],
    [["g"], false],
    [["/"       ], false],
    [["abc"     ], false],
    [[" "       ], false],
    [["shift"   ], false],
    [["Control" ], false],
    [["0"       ], false],
    [["`"       ], false],
    [[""        ], false],
);

// export ==================================================== //
export {testingIsChar, testingIsUpperCase};