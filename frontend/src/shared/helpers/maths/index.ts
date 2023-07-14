// main ====================================================== //
const getPercent = (
    part: number, total: number, accuracy: number = 0
) => {
    let accuracy_coef = 10 ** accuracy;
    let percent = (part / total) * 100;
    return Math.trunc(percent * accuracy_coef) / accuracy_coef;
};

// export ==================================================== //
export default getPercent;