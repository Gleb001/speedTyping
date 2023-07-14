// constants ================================================= //
const convertKeys = {
    "Enter":     "◄════╝",
    "Backspace": "◄════",
    "CapsLock":  "caps",
    "Shift":     "shift",
    "ShiftLeft":     "shift",
    "ShiftRight":     "shift",
    "Space":     " ",
    "Control":   "control",
    "ControlLeft":   "control",
    "ControlRight":   "control",
    "Meta": "cmd",
    "Alt": "alt",
    "AltLeft": "alt",
    "AltRight": "alt",
};

// main ====================================================== //
function getKeycapOnKeyEvent(event: React.KeyboardEvent) {
    let isSymbol = event.key.length === 1 && event.key !== " ";
    let inputKey = isSymbol ? event.key : event.code;
    return {
        key: convertKeys[inputKey as "Enter"] ?? inputKey, 
        isFirst: inputKey.indexOf("Right") < 0
    };
}

// export ==================================================== //
export default getKeycapOnKeyEvent;