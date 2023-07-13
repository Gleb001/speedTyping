// main ====================================================== //
function isEqual(source: any, check: any) {
    if (typeof source !== typeof check) return false;

    if (typeof source === "object") {
        if (source === null && check === null) return true;
        if (source === null || check === null) return false;

        if (Array.isArray(source)) {
            return isEqualArrays(source, check);
        } else {
            return isEqualObjects(source, check);
        }
    } else if (typeof source === "function") {
        return (
            source.toString().replace(/\s/g, "").replace(/(\r\n|\n|\r)/g, "") === 
            check.toString().replace(/\s/g, "").replace(/(\r\n|\n|\r)/g, "")
        );
    } else {
        if (Number.isNaN(source)) return Number.isNaN(check);
        return source === check;
    }
}
function isEqualArrays(source: Array<any>, check: Array<any>) {
    if (source === check) return true;
    if (source.length !== check.length) return false;

    source.sort(); check.sort();
    for (let index = 0; index < source.length; index++) {
        if (!isEqual(source[index], check[index])) return false;
    }

    return true;
}
function isEqualObjects(source: {}, check: {}) {
    if (
        typeof source === null ||
        typeof check === null ||
        typeof source !== typeof check
    ) return false;

    let source_props = Object.getOwnPropertyNames(source);
    let check_props = Object.getOwnPropertyNames(check);
    if (!isEqualArrays(source_props, check_props)) return false;

    for (let index = 0; index < source_props.length; index++) {
        let property_name = source_props[index];
        if (!isEqual(source[property_name], check[property_name])) return false;
    }

    return JSON.stringify(source) === JSON.stringify(check);
}

// export ==================================================== //
export { isEqualArrays, isEqualObjects };
export default isEqual;