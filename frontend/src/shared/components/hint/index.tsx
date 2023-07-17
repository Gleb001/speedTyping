// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState, useRef, useEffect } from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import {HintContainerType} from "./types";

// main ====================================================== //
let HintContainer: HintContainerType = ({
    description
}, children: JSX.Element[]) => {

    let hintRef = useRef<HTMLDivElement>(null);
    let [hasDescription, setHasDescription] = useState(false);
    let [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!hintRef.current || !description) return;
        hintRef.current.style.setProperty(
            "--description-value",
            hasDescription ? `"${description}"` : ""
        );
    }, [hasDescription]);

    function handleMouseLeave() {
        setHasDescription(false);
        if (timeoutRef) {
            clearTimeout(timeoutRef);
            setTimeoutRef(null);
        }
    }
    function handleMouseMove(event: React.MouseEvent) {
        if (hintRef.current && hasDescription) {

            let beforeRef = window.getComputedStyle(hintRef.current, ":before");
            let button_position = hintRef.current.getBoundingClientRect();

            let isHandleLeave = (
                event.clientX - button_position.x > button_position.width ||
                event.clientX - button_position.x < 0 ||
                event.clientY - button_position.y > button_position.height ||
                event.clientY - button_position.y < 0
            );
            if (isHandleLeave) setHasDescription(false);

            let height_description = Number(beforeRef.height.slice(0, -2));
            let width_description = Number(beforeRef.height.slice(0, -2));
            hintRef.current.style.setProperty(
                "--top-position",
                event.clientY - button_position.y - height_description - 5 + "px"
            );
            hintRef.current.style.setProperty(
                "--left-position",
                event.clientX - button_position.x - width_description - 5 + "px"
            );
        }
    }
    function timeoutCursorHold() {
        if (!timeoutRef) {
            setTimeoutRef(
                setTimeout(() => setHasDescription(true), 700)
            );
        }
    }

    return (
        <div
            className="hint_container"
            ref={hintRef}

            onMouseMove={(event) => {
                timeoutCursorHold();
                handleMouseMove(event);
            }}
            onMouseLeave={handleMouseLeave}

        >{...children}</div>
    );
};

// export ==================================================== //
export default HintContainer;