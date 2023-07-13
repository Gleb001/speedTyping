// imports =================================================== //
// external
import Test from "@shared/libs/testAPI";
// internal
import { testingMicroTest, testingCreateMicroTest } from "./testAPI/index.test";
import testingLinkNode from "./linkList/index.test";

// main ====================================================== //
Test("Testing libs (path: @shared/libs)", [
    testingLinkNode,
    testingMicroTest,
    testingCreateMicroTest,
]);