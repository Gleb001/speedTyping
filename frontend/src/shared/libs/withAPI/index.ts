// imports =================================================== //
import withAPIType from "./types";

// constants ================================================= //
// Data Base URL
// const DB_URL = "http://localhost:8000/speedTyping/backend/withDataBase/api";
// Build-in data
const BUILDIN_DATA_URL = "https://gleb001.github.io/speedTyping/backend/withBuildIn";

// main ====================================================== //
const withAPI: withAPIType = async function (path, options) {
    return await fetch(BUILDIN_DATA_URL + path, options)
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error();
        })
        .catch(error => console.log(error));
};

// export ==================================================== //
export default withAPI;
