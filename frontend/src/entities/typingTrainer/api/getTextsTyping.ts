// imports =================================================== //
import withAPI from "@shared/libs/withAPI";

// constants ================================================= //
const TEXTS_TYPING_URL = "/texts_typing/get.php";

// main ====================================================== //
let getTextsTyping = async () => (
    await withAPI<string>(TEXTS_TYPING_URL)
);

// export ==================================================== //
export default getTextsTyping;