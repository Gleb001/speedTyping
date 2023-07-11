// main ====================================================== //
// milliseconds -> minutes
// (ms / 1000) -> (sec / 60) -> min
// (ms / 60000) -> min
const convertToMinutes = (time: number) => time / 60000;

// export ==================================================== //
export default convertToMinutes;