// main ====================================================== //
let isEmptyObject = (object: object) => (
    object
    && Object.keys(object).length === 0
    && Object.getPrototypeOf(object) === Object.prototype
);

// export ==================================================== //
export default isEmptyObject;