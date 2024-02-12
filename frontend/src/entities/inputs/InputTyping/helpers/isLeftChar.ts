import { MatrixKeycapsWithSystem } from "../../../keyboard/types";

// types ==================================================== //
type isLeftChar = (char: string, matrix_keycaps: MatrixKeycapsWithSystem) => boolean | undefined

// main ===================================================== //
const isLeftChar: isLeftChar = (char, matrix_keycaps) => {
    
    // пропускаю первый и последний ряды, так как символы
    // расположены со 2 по 4 ряды
    for (let index = 1; index < matrix_keycaps.length - 1; index++) {
        const rowKeycaps = matrix_keycaps[index];
        for (let j = 0; j < rowKeycaps.length; j++) {
            const keycap = rowKeycaps[j];
            const hasChar = (
                keycap.includes(char.toUpperCase()) ||
                keycap.includes(char)
            );
            if (hasChar) {
                const isLeftChar = (j < Math.floor(rowKeycaps.length / 2));
                return isLeftChar;
            }
        }
    }

    return undefined;

}

// exports ================================================= //
export default isLeftChar;