// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import { LinkNode } from ".";

// main ====================================================== //
const testingLinkNode = createMicroTest(
    (value) => new LinkNode(value),
    [ ["Hello world!"], { current: "Hello world!", next: null } ],
    [ [              ], { current: null,           next: null } ],
    [ [{a: 5, b: "3"}], { current: {a: 5, b: "3"}, next: null } ],
);

// export ==================================================== //
export default testingLinkNode;