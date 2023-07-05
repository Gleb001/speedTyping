// imports =================================================== //
import withAPIType from "./types";

// constants ================================================= //
// Data Base URL
const DB_URL = "http://localhost:8000/speedTyping/backend/api";

// main ====================================================== //
const withAPI: withAPIType = async function (path, options) {
    return await fetch(DB_URL + path, options)
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error();
        })
        .catch(error => console.log(error));
};

// export ==================================================== //
export default withAPI;