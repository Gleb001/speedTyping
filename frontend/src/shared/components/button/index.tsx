// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState, useRef, useEffect } from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonType } from "./types";

// main ====================================================== //
let Button: ButtonType = ({
    description, name, icon_className, actions = []
}) => {

    let buttonRef = useRef<HTMLButtonElement>(null);
    let [hasDescription, setHasDescription] = useState(false);
    let [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!buttonRef.current || !description) return;
        buttonRef.current.style.setProperty(
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
        if (buttonRef.current && hasDescription) {

            let beforeRef = window.getComputedStyle(buttonRef.current, ":before");
            let button_position = buttonRef.current.getBoundingClientRect();

            let isHandleLeave = (
                event.clientX - button_position.x > button_position.width ||
                event.clientX - button_position.x < 0 ||
                event.clientY - button_position.y > button_position.height ||
                event.clientY - button_position.y < 0
            );
            if (isHandleLeave) setHasDescription(false);

            let height_description = Number(beforeRef.height.slice(0, -2));
            let width_description = Number(beforeRef.height.slice(0, -2));
            buttonRef.current.style.setProperty(
                "--top-position",
                event.clientY - button_position.y - height_description - 5 + "px"
            );
            buttonRef.current.style.setProperty(
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
        <button
            className="special_button main_component"
            ref={buttonRef}

            onMouseMove={(event) => {
                timeoutCursorHold();
                handleMouseMove(event);
            }}
            onMouseLeave={handleMouseLeave}

            {...actions}
        >
            <div className={icon_className + " icon_button"}></div>
            <div>{name}</div>
        </button>
    );
};

// export ==================================================== //
export default Button;