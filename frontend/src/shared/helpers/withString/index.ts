// main ====================================================== //
const isUpperCase = (value: string) => (
    value.toUpperCase() === value &&
    isChar(value)
);
const isChar = (check: string) => (
    (check.toUpperCase() !== check.toLowerCase()) &&
    check.length === 1
);

// export ==================================================== //
export { isUpperCase, isChar };