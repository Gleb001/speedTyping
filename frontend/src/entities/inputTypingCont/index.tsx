// imports =================================================== //
// external
import React, { useEffect, useRef, useState } from "react";
import splitBy from "@shared/helpers/splitBy";
import getChildHTMLElements from "@shared/helpers/getChildHTMLElements";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import {
    increment as increment_point,
    reset as reset_point
} from "@app/redux/reducers/checkPoint";
import {
    reset as reset_mistakes
} from "@app/redux/reducers/mistakesCounter";
// internal
import "./ui/index.css"
import { TextTypingRefType } from "./types";
import getTextsTyping from "./api/getTextsTyping";
import InputTyping from "./components/inputTyping";

// main ====================================================== //
let TextTyping = ({}) => {

    const textTypingRef = useRef<TextTypingRefType>(null);

    let dispatch = useAppDispatch();

    let [source_text, setSourceText] = useState("");
    let check_point = useAppSelector(state => state.check_point);
    let [disabled_text, active_text] = splitBy(source_text, check_point);

    useEffect(() => {
        if (isUpdateSourceText()) setSourceText(active_text);
    }, [check_point]);
    useEffect(() => {
        if (source_text === "") {
            getTextsTyping().then(result => setSourceText(result));
        } else {
            dispatch(reset_point());
            dispatch(reset_mistakes())
        }
    }, [source_text]);

    function isUpdateSourceText() {
        if (!textTypingRef.current) return false;

        let [disTextElement, actTextElement] = getChildHTMLElements(
            textTypingRef.current
        );

        return (
            disTextElement.offsetTop < actTextElement.offsetTop ||
            active_text === ""
        );
    }

    return (
        <div>
            <InputTyping
                updateValue={() => dispatch(increment_point())}
                current_symbol={active_text[0]}
                value={disabled_text}
            />
            <p id="text_typing" ref={textTypingRef}>
                <span className="disabled_text">{disabled_text}</span>
                <span className="active_text">{active_text}</span>
            </p>
        </div>
    );

};

// export ==================================================== //
export default TextTyping;