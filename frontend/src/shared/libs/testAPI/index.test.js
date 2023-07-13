// imports =================================================== //
import { createMicroTest, microTest } from ".";
import { LinkList, LinkNode } from "../linkList";

// main ====================================================== //
const testingCreateMicroTest = createMicroTest(
    createMicroTest,
    [
        [
            function a(b) { return b;},
            [[5], 5]
        ],
        {
            api: function a(b) { return b;},
            checks: function () {
                const first_test = new LinkList();
                first_test.push([[5], 5]);
                return first_test;
            }()
        }
    ],
    [
        [
            function a(b) {return b;},
            [[10], 10],
            [[20], 20],
            [[20, 10], 20]
        ],
        {
            api: function a(b) {return b;},
            checks: function () {
                const first_test = new LinkList();
                first_test.push([[10], 10]);
                first_test.push([[20], 20]);
                first_test.push([[20, 10], 20]);
                return first_test;
            }()
        }
    ],
);
const testingMicroTest = createMicroTest(
    microTest,
    [
        [{
            api: () => 5,
            checks: function () {
                const first_test = new LinkList();
                first_test.push([[], 5]);
                return first_test;
            }()
        }],
        [
            true, ["Good!", ""]
        ]
    ],
    [
        [{
            api: (a) => a,
            checks: function () {
                const first_test = new LinkList();
                first_test.push([[10], 10]);
                return first_test;
            }()
        }],
        [
            true, ["Good!", ""]
        ]
    ],
    [
        [{
            api: (a) => a,
            checks: function () {
                const first_test = new LinkList();
                first_test.push([[10], 10]);
                first_test.push([[210], 210]);
                return first_test;
            }()
        }],
        [
            true, ["Good!", ""]
        ]
    ],
    [
        [{
            api: function sum(a, b) { return a + b },
            checks: function () {
                const first_test = new LinkList();
                first_test.push([[10, 20], 30]);
                first_test.push([[20, -10], 0]);
                return first_test;
            }()
        }],
        [
            false,
            [
                [
                    `the test was executed with an error!` ,
                    ` `,
                    `Function under test: ${"sum"}`,
                    `-------------------------------------`,
                    `Parameters:          ${JSON.stringify([20, -10])}`,
                    `-------------------------------------`,
                    `Expected output:     ${0}`,
                    `------------------------------------`,
                    `Current output:      ${10}`
                ],
                "\n"
            ]
        ]
    ],
);

// export ==================================================== //
export { testingCreateMicroTest, testingMicroTest };