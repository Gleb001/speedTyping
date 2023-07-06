// imports =================================================== //
// libs
import splitBy from "@helpers/splitBy";
import React, { useEffect, useRef, useState } from "react";
import getChildHTMLElements from "@helpers/getChildHTMLElements";
import convertToMinutes from "@helpers/convertToMinutes";
// components
import { TypingTrainerType } from "./types";
import "./ui/index.css";
import InputTyping from "./components/inputTyping";
import getTextsTyping from "./api/getTextsTyping";
import TextSpeedometr from "./components/textSpeedometr";

// main ====================================================== //
let TypingTrainer: TypingTrainerType = ({ }) => {

    const textTypingRef = useRef<HTMLParagraphElement | null>(null);

    let [start, setStart] = useState(0);
    let [speed, setSpeed] = useState(0);
    let [totalTime, setTotalTime] = useState(0);
    let [input_symbols, setInputSymbols] = useState(0);

    let [check_point, setCheckPoint] = useState(0);
    let [source_text, setSourceText] = useState("");
    let [disabled_text, active_text] = splitBy(source_text, check_point);

    useEffect(() => {
        if (isUpdateSourceText()) {
            setSourceText(active_text);
        } else {
            let difference_time = convertToMinutes(Date.now() - start);
            if (difference_time >= 1) {
                setTotalTime(0);
                setSpeed(0);
                setInputSymbols(0);
            } else {
                setSpeed(Math.floor(1 / difference_time));
                setTotalTime(totalTime + difference_time);
            }
            setStart(Date.now());
        }
    }, [check_point]);
    useEffect(() => {
        if (source_text === "") {
            getTextsTyping().then(result => setSourceText(result));
        } else {
            setCheckPoint(0);
            setStart(Date.now());
            setSpeed(0);
            setInputSymbols(input_symbols + check_point);
        }
    }, [source_text]);

    function getTotalSpeed() {
        return (
            totalTime !== 0 ? Math.floor(
                (input_symbols + check_point) / totalTime
            ) : 0
        );
    }
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
            <div id="tool_line">
                <div>
                    <TextSpeedometr value={`Total speed: ${getTotalSpeed()}`} />
                    <TextSpeedometr value={`Current speed: ${speed}`} />
                </div>
            </div>
        </div>
    );

};

// export ==================================================== //
export default TypingTrainer;