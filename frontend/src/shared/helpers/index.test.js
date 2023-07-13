// imports =================================================== //
// external
import Test from "@shared/libs/testAPI";
// internal
import testingIsEqual from "./isEqual/index.test";
import testingSplitBy from "./splitBy/index.test";
import testingIsEmptyObject from "./isEmptyObject/index.test";
import testingConvertToMinutes from "./convertToMinutes/index.test";
import testingGetChildHTMLElements from "./getChildHTMLElements/index.test";

// main ====================================================== //
Test("Testing helpers  (path: @shared/helpers)", [
    testingGetChildHTMLElements,
    testingConvertToMinutes,
    testingIsEmptyObject,
    testingSplitBy,
    testingIsEqual,
]);