// imports =================================================== //
// libs
import splitBy from "@helpers/splitBy";
import React, { useEffect, useRef, useState } from "react";
import getChildHTMLElements from "@helpers/getChildHTMLElements";
// components
import "./ui/index.css";
import InputTyping from "../../entites/inputTyping";
import getTextsTyping from "./api/getTextsTyping";

// main ====================================================== //
let TypingTrainer = ({ }) => {

    const textTypingRef = useRef<HTMLParagraphElement | null>(null);

    let [source_text, setSourceText] = useState("");
    let [check_point, setCheckPoint] = useState(0);
    let [disabled_text, active_text] = splitBy(source_text, check_point);

    useEffect(() => {
        if (isUpdateSourceText()) setSourceText(active_text);
    }, [check_point]);
    useEffect(() => {
        setCheckPoint(0);
        if (source_text === "") {
            getTextsTyping().then(result => setSourceText(result));
        }
    }, [source_text]);

    function isUpdateSourceText() {
        if (!textTypingRef.current) return;

        let [disTextElement, actTextElement] = getChildHTMLElements(
            textTypingRef.current
        );

        return (
            disTextElement.offsetTop < actTextElement.offsetTop ||
            active_text === ""
        );
    }

    return (
        <div id="typing_trainer">
            <InputTyping
                updateValue={() => setCheckPoint(++check_point)}
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
export default TypingTrainer;