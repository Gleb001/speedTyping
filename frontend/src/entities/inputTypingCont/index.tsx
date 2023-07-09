// imports =================================================== //
// external
import React, { FC, useEffect, useRef, useState } from "react";
import splitBy from "@shared/helpers/splitBy";
import getChildHTMLElements from "@shared/helpers/getChildHTMLElements";
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
import { ErrorType, TextTypingRefType, TextTypingType } from "./types";
import getTextsTyping from "./api/getTextsTyping";
import InputTyping from "./components/inputTyping";
import { useDispatch } from "react-redux";

// main ====================================================== //
const Error: ErrorType = ({ value }) => (
    <span className="error">{value}</span>
);

let TextTyping: TextTypingType = ({ }) => {

    let dispatch = useDispatch();
    let check_point = useAppSelector(state => state.check_point);
    let mistakes_counter = useAppSelector(state => state.mistakes_counter);

    const textTypingRef = useRef<TextTypingRefType>(null);

    let [isFalledLine, setFilledLine] = useState(true);
    let [source_text, setSourceText] = useState("");
    let [disabled_text, active_text] = splitBy(source_text, check_point.current);

    useEffect(() => {
        if (isUpdateSourceText()) {
            setFilledLine(true);
            setSourceText(active_text);
        }
    }, [check_point]);
    useEffect(() => {
        if (source_text === "") {
            getTextsTyping().then(result => setSourceText(result));
        } else {
            setFilledLine(false);
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
    function editWithErrors() {
        return Array.from(disabled_text).map((char, index) => {
            let hasMistake = mistakes_counter.current.includes(index);
            return hasMistake ? <Error key={char + index} value={char} /> : char;
        });
    }

    return (
        <div>
            <InputTyping
                updateValue={() => dispatch(increment_point())}
                current_symbol={active_text[0]}
                value={disabled_text}
            />
            <p
                id="text_typing"
                style={{
                    borderColor: `var(${isFalledLine ?
                        "--secondary-additional-color" :
                        "--secondary-color"
                        })`,
                }}
                ref={textTypingRef}
            >
                <span className="disabled_text">{editWithErrors()}</span>
                <span className="active_text">{active_text}</span>
            </p>
        </div >
    );

};

// export ==================================================== //
export default TextTyping;