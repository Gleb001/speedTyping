// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useMemo } from "react";
// hooks ----------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// redux ----------------------------------------------------- //
import { set as setKeyboardData } from "@app/redux/reducers/keyboard";
// helpers --------------------------------------------------- //
import { isEqual } from "@shared/helpers";
// special --------------------------------------------------- //
import "./ui/index.css";
import RowKeycaps from "./components/RowKeycaps";
import getKeyboard from "./api/getKeyboard";

// main ====================================================== //
const Keyboard = () => {

    const dispatch = useAppDispatch();

    const keyboard_layout = useAppSelector(state => state.settings.keyboard_layout!);
    const language = useAppSelector(state => state.settings.language);
    const matrix_keycaps = useAppSelector(state => state.keyboard.matrix_keycaps);

    // set matris keycaps
    useEffect(() => {
        const new_keyboard = getKeyboard(keyboard_layout, language);
        const isNewKeyboard = !isEqual(new_keyboard, matrix_keycaps);
        if (isNewKeyboard) {
            dispatch(
                setKeyboardData({
                    matrix_keycaps: new_keyboard
                })
            );
        }
    }, [language, keyboard_layout]);

    return (
        <div id="keyboard">
            {
                matrix_keycaps.length !== 0 && matrix_keycaps.map(
                    (keycaps, index) => {
                        const key = "row_keycaps " + index;
                        return <RowKeycaps key={key} data={keycaps} />;
                    }
                )
            }
        </div>
    );

}

// export ==================================================== //
export default Keyboard;