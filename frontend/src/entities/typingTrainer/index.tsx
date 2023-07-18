// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useRef, useState } from "react";
// redux ----------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { set as set_current_char } from "@app/redux/reducers/currentChar";
import { increment as increment_point, reset as reset_point } from "@app/redux/reducers/checkPoint";
import { increment as increment_mistake, reset as reset_mistakes } from "@app/redux/reducers/mistakesCounter";
// components ------------------------------------------------ //
import InputTyping from "./components/inputTyping";
import ErrorChar from "./components/errorChar";
// helpers --------------------------------------------------- //
import isResetTextTyping from "./helpers";
// api ------------------------------------------------------- //
import getTextsTyping from "./api/getTextsTyping";
// internal -------------------------------------------------- //
import "./ui/index.css"
import {
    DisabledTextType,
    TextTypingRefType,
    TypingTrainerType,
} from "./types";

// main ====================================================== //
let TypingTrainer: TypingTrainerType = ({ }) => {

    let dispatch = useAppDispatch();

    let textTypingRef = useRef<TextTypingRefType>(null);
    let [disabled_text, setDisabledText] = useState<DisabledTextType[]>([]);
    let [active_text, setActiveText] = useState("");

    useEffect(() => {
        let isGetActiveText = (active_text === "");
        if (
            isGetActiveText ||
            isResetTextTyping(textTypingRef.current)
        ) {

            if (isGetActiveText) {
                getTextsTyping().then(result => {
                    setActiveText(result);
                    set_current_char(active_text[0]);
                });
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
        if (active_text[1]) {
            dispatch(set_current_char(active_text[1]));
        }

    }

    return (
        <div id="typing_trainer">
            <InputTyping
                updateTextTyping={updateTextTyping}
                active_char={active_text[0]}
                isResetValue={disabled_text.length === 0}
            />
            <p id="text_typing" ref={textTypingRef} >
                <span className="disabled_text before_disabled_text" >{
                    disabled_text.map(char => char)
                }</span>
                <span className="active_text">{active_text}</span>
            </p>
        </div>
    );

};

// export ==================================================== //
export default TypingTrainer;