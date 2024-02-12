// types ==================================================== //
type getShortenKeycapName = (value: string) => string

// main ===================================================== //
const getShortenKeycapName: getShortenKeycapName = (value) => {
    if (value.length > 1) {
        let shorten_name = "";
        for (let char of value) {
            const isEndShortenName = (
                char === char.toUpperCase() &&
                char !== char.toLowerCase() &&
                shorten_name !== ""
            );
            if (isEndShortenName) break;
            shorten_name += char.toLowerCase();
        }
        return shorten_name;
    }
    return value;
}

// exports ================================================= //
export default getShortenKeycapName;