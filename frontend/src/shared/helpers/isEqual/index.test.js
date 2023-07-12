// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import isEqual from ".";

// main ====================================================== //
let testingIsEqual = createMicroTest(
    isEqual,
    // on true
    [ ["", ""], true ],
    [ ["123", "123"], true ],
    [ [String(123), String(123)], true ],
    [ [123, 123], true ],
    [ [Number(123), Number(123)], true ],
    [ [NaN, NaN], true ],
    [ [null, null], true ],
    [ [false, false], true ],
    [ [true, true], true ],
    [ [Boolean("123"), Boolean("123")], true ],
    [ [[], []], true ],
    [ [{}, {}], true ],
    [ [{ a: 123}, { a: 123}], true ],
    [ [{ a: () => 123}, { a: () => 123}], true ],
    [ [ { a: () => 123, b: { a: 123 } }, { a: () => 123, b: { a: 123 } } ], true ],
    [ [[123], [123]], true ],
    [ [[[[123]]], [[[123]]]], true ],
    [ [Date, Date], true ],
    [ [undefined, undefined], true ],
    [ [BigInt, BigInt], true ],
    // on false 
    [ ["", "123"], false ],
    [ [[], "123"], false ],
    [ [Number(123), String(123)], false ],
    [ [123, (123.12)], false ],
    [ [Number, String], false ],
    [ [{ a: 123 }, {}], false ],
    [ [{}, null], false ],
    [ [true, false], false ],
    [ [Boolean("123"), Boolean("")], false ],
    [ [[], [{}]], false ],
    [ [["123"], [123]], false ],
    [ [[[[123]]], [["123"]]], false ],
    [ [[[[123]]], [[123]]], false ],
    [ [Date, {}], false ],
    [ [false, undefined], false ],
    [ [BigInt, Object], false ],
    [ [{}, { x: {} }], false ],
    [ [{ a: 123}, {}], false ],
    [ [{ b: () => 123}, { a: () => 123}], false ],
    [ [ { a: () => 123, b: { a: 123 } }, { a: () => 123 } ], false ],
);

// export ==================================================== //
export default testingIsEqual;