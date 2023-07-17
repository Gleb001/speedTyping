// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import { getPercent, range } from ".";

// main ====================================================== //
const testingGetPercent = createMicroTest(
    getPercent,
    [[  5,  10,  1 ], 50.0   ],
    [[ 10,  10,  1 ], 100.0  ],
    [[  1,  10,  3 ], 10.000 ],
    [[  1,  10     ], 10     ],
);
const testingRange = createMicroTest(
    range,
    [[  5,  0, 10 ], 5   ],
    [[ -5,  0, 10 ], 0   ],
    [[ 15,  0, 10 ], 10  ],
    [[  5, 10,  0 ], NaN ],
);

// export ==================================================== //
export {testingGetPercent, testingRange};