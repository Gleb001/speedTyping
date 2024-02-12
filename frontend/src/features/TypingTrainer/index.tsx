// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useRef, useState } from "react";
// redux ----------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// reducers -------------------------------------------------- //
import {
    increment as incrementCouters,
    reset as resetCounters
} from "@app/redux/reducers/counters";
// components ------------------------------------------------ //
import InputTyping from "@entities/inputs/InputTyping";
import TextTyping from "@entities/TextTyping";
// helpers --------------------------------------------------- //
import { getRandom } from "@shared/helpers/maths";
// internal -------------------------------------------------- //
import "./ui/index.css"
import getTextsTyping from "./api/getTextsTyping";
import type { TypingTrainer as TypingTrainerType, TypingChar } from "./types/index";

// main ====================================================== //
const TypingTrainer: TypingTrainerType = () => {

    const dispatch = useAppDispatch();

    let [textTyping, setTextTyping] = useState<TypingChar[]>([]);
    let [textsForTyping, setTextsForTyping] = useState<string[]>([]);
    let [isClearInputTyping, setIsClearInputTyping] = useState(false);
    let [currentChar, setCurrentChar] = useState("");

    let TextTypingRef = useRef<HTMLParagraphElement>(null);
    const language = useAppSelector(state => state.settings.language!);

    function getNextChar(hasWrong: boolean) {

        const activeText = textTyping[textTyping.length - 1];
        const previousText = textTyping[textTyping.length - 2];

        const previousChar = activeText.text[0];
        const previousCharType = hasWrong ? "wrong" : "disable";
        activeText.text = activeText.text.substring(1);

        if (previousText && previousText.type === previousCharType) {
            previousText.text += previousChar;
            setTextTyping([...textTyping.slice(0, -2), previousText, activeText]);
        } else {
            const middleText = { text: previousChar, type: previousCharType } as TypingChar;
            setTextTyping([...textTyping.slice(0, -1), middleText, activeText]);
        }

        let namesIncrementCounters = ["chars"];
        if (hasWrong) namesIncrementCounters.push("mistakes");
        dispatch(
            // @ts-ignore
            incrementCouters(namesIncrementCounters)
        );

    }

    // update text typing
    useEffect(() => {
        const hasTextTyping = (textTyping.length !== 0);
        if (hasTextTyping) {

            const ActiveTextRef = TextTypingRef.current!.querySelector(".active") as HTMLElement;
            const activeText = ActiveTextRef.innerText;
            const TextTyping = TextTypingRef.current!;

            const hasActiveText = (activeText !== "");
            const activeTextIsLower = ((TextTyping.offsetTop + 15) < ActiveTextRef.offsetTop);

            if (!hasActiveText || activeTextIsLower) {

                // remove wrong and disable text typing
                setTextTyping(!hasActiveText ? [] : textTyping.slice(-1));

                // update speedometers data
                dispatch(
                    resetCounters(["chars", "mistakes"])
                );

                // clear value input typing
                setIsClearInputTyping(true);
                setTimeout(() => setIsClearInputTyping(false));

            } else {
                setCurrentChar(activeText[0]);
            }

        } else if (textsForTyping.length !== 0) {
            // set new text typing
            const randomIndex = getRandom(0, textsForTyping.length - 1);
            const newTextTyping = textsForTyping[randomIndex];
            setTextTyping([{ text: newTextTyping, type: "active" }]);
        }
    }, [textsForTyping, textTyping]);

    // set texts for typing
    useEffect(() => {
        getTextsTyping(language).then((textsForTyping) => {
            setTextsForTyping(textsForTyping);
        });
    }, [language]);

    return (
        <div className="typing_trainer">
            <InputTyping
                isClear={isClearInputTyping}
                getNextChar={getNextChar}
                currentChar={currentChar}
            />
            <TextTyping
                data={textTyping}
                ref={TextTypingRef}
            />
        </div>
    );

};

// export ==================================================== //
export default TypingTrainer;