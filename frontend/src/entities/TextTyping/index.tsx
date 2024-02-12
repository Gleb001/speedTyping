// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState, useEffect, useRef, forwardRef } from "react";
// hooks ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
// helpers --------------------------------------------------- //
import { getRandom } from "@shared/helpers/maths";
// internal -------------------------------------------------- //
import getTextsTyping from "../../features/TypingTrainer/api/getTextsTyping";
import type { Props } from "./types";
import "./ui/index.css";

// main ====================================================== //
const TextTyping = forwardRef<HTMLParagraphElement, Props>((props, ref) => {

    let { data } = props;

    return (
        <p className="text_typing" ref={ref} >
            {
                data.map(
                    ({ text, type }, index) => (
                        <span key={index} className={type}>{text}</span>
                    )
                )
            }
        </p>
    );

});

// export ==================================================== //
export default TextTyping;