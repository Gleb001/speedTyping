// imports =================================================== //
import { Languages } from "@shared/constants/keyboards";
import withAPI from "@shared/libs/withAPI";

// types ===================================================== //
type getTextsTyping = (language: Languages) => Promise<string[]>

// constants ================================================= //
// const TEXTS_TYPING_URL = "/texts_typing/get.php";

// main ====================================================== //
// with data base -------------------------------------------- //
// let getTextsTyping = async () => (
//     await withAPI<string>(TEXTS_TYPING_URL)
// );
// with build-in data ---------------------------------------- //
let getTextsTyping: getTextsTyping = async (language) => {
    let all_texts = await withAPI<string[][]>("data/texts.json");
    return all_texts[language];
}

// export ==================================================== //
export default getTextsTyping;
