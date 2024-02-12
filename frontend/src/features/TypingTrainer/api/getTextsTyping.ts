// imports =================================================== //
import type { LanguagesKeyboard } from "@entities/keyboard/types";
import withAPI from "@shared/libs/withAPI";

// types ===================================================== //
type getTextsTyping = (language: LanguagesKeyboard) => Promise<string[]>

// main ====================================================== //
const getTextsTyping: getTextsTyping = async (language) => {
    const allTextsForTyping = await withAPI<string[][]>("data/texts.json");
    return allTextsForTyping[language];
}

// export ==================================================== //
export default getTextsTyping;