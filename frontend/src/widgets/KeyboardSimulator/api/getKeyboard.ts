// imports ================================================== //
import { withAPI } from "@shared/libs";
import { LanguagesKeyboard, MatrixKeycapsWithoutSystem, TypesKeyboards } from "../../../entities/keyboard/types";

// types ==================================================== //
type KeycapsByLanguage = {
    english: MatrixKeycapsWithoutSystem,
    russia: MatrixKeycapsWithoutSystem,
}
interface KeycapsByType {
    [key: TypesKeyboards | string]: KeycapsByLanguage
}

// constants ================================================= //
// const keyboards = {
//     ansi: {
//         english: [
//             [
//                 ["`", "~"],
//                 ["1", "!"],
//                 ["2", "@"],
//                 ["3", "#"],
//                 ["4", "$"],
//                 ["5", "%"],
//                 ["6", "^"],
//                 ["7", "&"],
//                 ["8", "*"],
//                 ["9", "("],
//                 ["0", ")"],
//                 ["-", "_"],
//                 ["=", "+"],
//             ],
//             [
//                 ["Q"],
//                 ["W"],
//                 ["E"],
//                 ["R"],
//                 ["T"],
//                 ["Y"],
//                 ["U"],
//                 ["I"],
//                 ["O"],
//                 ["P"],
//                 ["[", "{"],
//                 ["]", "}"],
//                 ["\\", "|"],
//             ],
//             [
//                 ["A"],
//                 ["S"],
//                 ["D"],
//                 ["F"],
//                 ["G"],
//                 ["H"],
//                 ["J"],
//                 ["K"],
//                 ["L"],
//                 [";", ":"],
//                 ["'", "\""],
//             ],
//             [
//                 ["Z"],
//                 ["X"],
//                 ["C"],
//                 ["V"],
//                 ["B"],
//                 ["N"],
//                 ["M"],
//                 [",", "<"],
//                 [".", ">"],
//                 ["/", "?"],
//             ],
//         ],
//         russia: [
//             [
//                 ["Ё"],
//                 ["1", "!"],
//                 ["2", "\""],
//                 ["3", "№"],
//                 ["4", ";"],
//                 ["5", "%"],
//                 ["6", ":"],
//                 ["7", "?"],
//                 ["8", "*"],
//                 ["9", "("],
//                 ["0", ")"],
//                 ["-", "_"],
//                 ["=", "+"],
//             ],
//             [
//                 ["Й"],
//                 ["Ц"],
//                 ["У"],
//                 ["К"],
//                 ["Е"],
//                 ["Н"],
//                 ["Г"],
//                 ["Ш"],
//                 ["Щ"],
//                 ["З"],
//                 ["Х"],
//                 ["Ъ"],
//                 ["\\", "/"],
//             ],
//             [
//                 ["Ф"],
//                 ["Ы"],
//                 ["В"],
//                 ["А"],
//                 ["П"],
//                 ["Р"],
//                 ["О"],
//                 ["Л"],
//                 ["Д"],
//                 ["Ж"],
//                 ["Э"],
//             ],
//             [
//                 ["Я"],
//                 ["Ч"],
//                 ["С"],
//                 ["М"],
//                 ["И"],
//                 ["Т"],
//                 ["Ь"],
//                 ["Б"],
//                 ["Ю"],
//                 [".", ","],
//             ]
//         ]
//     }
// };
type getKeyboard = (type: TypesKeyboards, language: LanguagesKeyboard) => Promise<MatrixKeycapsWithoutSystem>

// main ===================================================== //
const getKeyboard: getKeyboard = async (type, language) => {
    const keyboards = await withAPI<KeycapsByType>("data/keyboards.json");
    return keyboards[type][language];
};

// exports ================================================= //
export default getKeyboard;