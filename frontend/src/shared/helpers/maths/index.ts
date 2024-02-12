// main ====================================================== //
const getPercent = (
    part: number, total: number, accuracy: number = 0
) => {
    let accuracy_coef = 10 ** accuracy;
    let percent = (part / total) * 100;
    return Math.trunc(percent * accuracy_coef) / accuracy_coef;
};
const range = (
    value: number, start: number, end: number,
) => (
    start > end   ? NaN   :
    value > end   ? end   :
    value < start ? start :
    value
)
const getRandom = (
    min: number, max: number
) => (
    Math.floor(
        Math.random() * (max - min) + min
    )
);
const getSpeed = (distance: number, time: number) => (
    time === 0 ? 0 : distance / time
);

// export ==================================================== //
export { getPercent, range, getRandom, getSpeed };