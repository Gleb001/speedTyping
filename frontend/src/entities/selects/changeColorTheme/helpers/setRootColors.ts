// types ==================================================== //
interface ColorsTheme {
    [key: string]: string
}
type setRootColors = (colors: ColorsTheme) => void 

// main ===================================================== //
const setRootColors: setRootColors = (colorsTheme) => {
    const root = document.documentElement;
    let cssText = "";
    for (let css_variable in colorsTheme) {
        cssText += `${css_variable}: ${colorsTheme[css_variable]}; `;
    }
    root.style.cssText = cssText;
};

// exports ================================================= //
export default setRootColors;