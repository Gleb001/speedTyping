// main ====================================================== //
type getHeightKeyboardType = (
    keyboardRef: HTMLElement
) => number
type actionOnKeyboardType = (
    type: "show" | "hide",
) => Promise<unknown>;

// export ==================================================== //
export { getHeightKeyboardType, actionOnKeyboardType };