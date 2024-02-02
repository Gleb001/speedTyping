// types ==================================================== //
type getRandomNumberType = (min: number, max: number) => number

// main ===================================================== //
const getRandomNumber: getRandomNumberType  = (min, max) => {
    return Math.floor(
        Math.random() *
        (max - min) + min
    );
};

// exports ================================================= //
export default getRandomNumber;