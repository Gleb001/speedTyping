// imports =================================================== //
// external
import React, { useEffect, useRef, useState } from "react";
import getChildHTMLElements from "@shared/helpers/getChildHTMLElements";
import {
    increment as increment_point,
    reset as reset_point
} from "@app/redux/reducers/checkPoint";
import {
    increment as increment_mistake,
    reset as reset_mistakes
} from "@app/redux/reducers/mistakesCounter";
import { useDispatch } from "react-redux";
// internal
import "./ui/index.css"
import {
    DisabledTextType,
    ErrorCharType,
    TextTypingRefType,
    TextTypingType
} from "./types";
import getTextsTyping from "./api/getTextsTyping";
import InputTyping from "./components/inputTyping";

// constants ================================================= //
const ErrorChar: ErrorCharType = ({ value }) => (
    <span className="error_text before_disabled_text">{
        value
    }</span>
);

// inner logic main function component ======================= //
function isResetTextTyping(textTyping: TextTypingRefType) {

    if (!textTyping) return false;

    let [disabledText, activeText] = getChildHTMLElements(textTyping);
    return (disabledText.offsetTop < activeText.offsetTop);
}

// main ====================================================== //
let TextTyping: TextTypingType = ({ }) => {

    const dispatch = useDispatch();

    const textTypingRef = useRef<TextTypingRefType>(null);
    let [disabled_text, setDisabledText] = useState<DisabledTextType[]>([]);
    let [active_text, setActiveText] = useState("");

    useEffect(() => {
        let isGetActiveText = active_text === "";
        if (isGetActiveText || isResetTextTyping(textTypingRef.current)) {

            if (isGetActiveText) {
                getTextsTyping().then(result => setActiveText(result));
            }

            setDisabledText([]);
            dispatch(reset_mistakes());
            dispatch(reset_point());

        }
    }, [active_text]);

    function updateTextTyping(hasError: boolean) {

        let char: DisabledTextType = active_text[0];
        if (hasError) {
            dispatch(increment_mistake());
            char = (
                <ErrorChar
                    key={char + active_text.length}
                    value={char}
                />
            );
        }
        disabled_text.push(char);

        setDisabledText(disabled_text);
        setActiveText(active_text.slice(1));
        dispatch(increment_point());

    }

    return (
        <div>
            <InputTyping
                updateTextTyping={updateTextTyping}
                current_symbol={active_text[0]}
                isResetValue={(
                    disabled_text.length === 0 ||
                    active_text === ""
                )}
            />
            <p id="text_typing" ref={textTypingRef} >
                <span className="disabled_text before_disabled_text" >{
                    disabled_text.map(char => char)
                }</span>
                <span className="active_text">{
                    active_text
                }</span>
            </p>
        </div>
    );

};

// export ==================================================== //
export default TextTyping;