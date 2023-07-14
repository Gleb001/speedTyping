// types ===================================================== //
// simple ---------------------------------------------------- //
type Languages = ("english" | "russia")
type TypesKeyboards = ("ansi")
type MatrixKeyboard = string[][][]

// composite ------------------------------------------------- //
interface KeyboardType {
    [key: Languages | string]: MatrixKeyboard
}
interface KeyboardsType {
    [key: TypesKeyboards | string]: KeyboardType
}
type getKeyboardType = (
    type: TypesKeyboards,
    language: Languages
) => MatrixKeyboard

// constants ================================================= //
const ANSI_keyboard: KeyboardType = {
    english: [
        [
            ["`", "~"],
            ["1", "!"],
            ["2", "@"],
            ["3", "#"],
            ["4", "$"],
            ["5", "%"],
            ["6", "^"],
            ["7", "&"],
            ["8", "*"],
            ["9", "("],
            ["0", ")"],
            ["-", "_"],
            ["=", "+"],
        ],
        [
            ["Q"],
            ["W"],
            ["E"],
            ["R"],
            ["T"],
            ["Y"],
            ["U"],
            ["I"],
            ["O"],
            ["P"],
            ["[", "{"],
            ["]", "}"],
            ["\\", "|"],
        ],
        [
            ["A"],
            ["S"],
            ["D"],
            ["F"],
            ["G"],
            ["H"],
            ["J"],
            ["K"],
            ["L"],
            [";", ":"],
            ["'", "\""],
        ],
        [
            ["Z"],
            ["X"],
            ["C"],
            ["V"],
            ["B"],
            ["N"],
            ["M"],
            [",", "<"],
            [".", ">"],
            ["/", "?"],
        ],
    ],
};
const keyboards: KeyboardsType = {
    ansi: ANSI_keyboard
};
const getKeyboard: getKeyboardType = (type, language) =>
[
    [               ...keyboards[type][language][0], ["◄═════"] ],
    [   ["tab"],    ...keyboards[type][language][1]             ],
    [   ["caps"],   ...keyboards[type][language][2], ["◄════╝"] ],
    [   ["shift"],  ...keyboards[type][language][3], ["shift" ] ],
    [
        ["control"],
        ["cmd"],
        ["alt"],
        [" "],
        ["alt"],
        ["fn"],
        ["control"],
        ["don't click"],
    ],
];

// exports =================================================== //
export default getKeyboard;