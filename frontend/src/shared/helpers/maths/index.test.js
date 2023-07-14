// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import getPercent from ".";

// main ====================================================== //
const testingGetPercent = createMicroTest(
    getPercent,
    [[  5,  10,  1 ], 50.0   ],
    [[ 10,  10,  1 ], 100.0  ],
    [[  1,  10,  3 ], 10.000 ],
    [[  1,  10     ], 10     ],
);

// export ==================================================== //
export default testingGetPercent;