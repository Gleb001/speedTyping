// imports =================================================== //
import withAPI from "@libs/withAPI";

// constants ================================================= //
const TEXTS_TYPING_URL = "/texts_typing/get.php";

// main ====================================================== //
async function getTextsTyping() {
    return await withAPI<string>(TEXTS_TYPING_URL);
};

// export ==================================================== //
export default getTextsTyping;