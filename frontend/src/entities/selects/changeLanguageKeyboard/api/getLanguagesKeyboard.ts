// imports =================================================== //
import type { LanguagesKeyboard } from "@entities/keyboard/types";
import withAPI from "@shared/libs/withAPI";

// types ===================================================== //
type getLanguagesKeyboard = () => Promise<string[]>

// main ====================================================== //
const getLanguagesKeyboard: getLanguagesKeyboard = async () => {
    const allTextsForTyping = await withAPI<string[][]>("data/texts.json");
    return allTextsForTyping[language];
}

// export ==================================================== //
export default getLanguagesKeyboard;