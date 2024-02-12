// imports ================================================== //
import { ColorTheme } from "@app/redux/reducers/settings";

// main ===================================================== //
const DATA: ColorTheme[] = [
    "Светлая",
    "Тёмная"
];
const ColorsThemes = {
    "Светлая": {
        "--primary-color"               : "white",
        "--primary-additional-color"    : "#d4d4d4",
        "--secondary-additional-color"  : "#999999",
        "--secondary-color"             : "#2C2C2C"
    },
    "Тёмная": {
        "--primary-color"               : "#2C2C2C",
        "--primary-additional-color"    : "#353535",
        "--secondary-additional-color"  : "#505050",
        "--secondary-color"             : "white"
    }
};

// exports ================================================= //
export { DATA, ColorsThemes };