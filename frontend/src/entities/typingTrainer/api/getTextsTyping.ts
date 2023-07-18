// imports =================================================== //
import withAPI from "@shared/libs/withAPI";

// constants ================================================= //
const TEXTS_TYPING_URL = "/texts_typing/get.php";

// main ====================================================== //
// with data base -------------------------------------------- //
// let getTextsTyping = async () => (
//     await withAPI<string>(TEXTS_TYPING_URL)
// );
// with build-in data ---------------------------------------- //
let getTextsTyping = async () => (
    await withAPI<string>("/index.php")
)

// export ==================================================== //
export default getTextsTyping;