// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import convertToMinutes from ".";

// main ====================================================== //
const testingConvertToMinutes = createMicroTest(
    convertToMinutes,
    [[60000], 1                     ],
    [[250  ], 0.004166666666666667  ],
    [[100  ], 0.0016666666666666668 ],
    [[333  ], 0.00555               ],
    [[1482 ], 0.0247                ],
);

// export ==================================================== //
export default testingConvertToMinutes;