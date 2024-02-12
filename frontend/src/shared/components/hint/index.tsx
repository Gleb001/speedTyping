// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState, useRef, MouseEvent } from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import type { HintType } from "./types";
import Animate from "../animate";
import { animations } from "./constants/animations";

// main ====================================================== //
const Hint: HintType = ({ description, children }) => {

    let HintRef = useRef<HTMLDivElement>(null);
    let TriangleHintRef = useRef<HTMLSpanElement>(null);
    let TargetElementRef = useRef<HTMLDivElement>(null);

    let TimeoutRef = useRef<NodeJS.Timeout | null>(null);
    let [hasHint, setHasHint] = useState(false);

    function handleMouseEnter() {
        TimeoutRef.current = setTimeout(
            () => {
                setHasHint(true);
                TimeoutRef.current = null;
            },
            500
        );
    }
    function handleMouseLeave() {

        setHasHint(false);
        if (TimeoutRef.current !== null) {
            clearTimeout(TimeoutRef.current);
            TimeoutRef.current = null;
        }

    }

    return (
        <>
            <div
                className="target_element"
                ref={TargetElementRef}
                onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave}
            >
                {children}
            </div>
            <Animate
                has={hasHint}
                onShow={() => animations.show(TargetElementRef.current!, HintRef.current!, TriangleHintRef.current!)}
                onHide={() => animations.hide(TargetElementRef.current!, HintRef.current!, TriangleHintRef.current!)}
            >
                <span ref={HintRef} className="hint">
                    <span ref={TriangleHintRef} className="triangle"></span>
                    <span>{description}</span>
                </span>
            </Animate>
        </>
    );

};

// export ==================================================== //
export default Hint;