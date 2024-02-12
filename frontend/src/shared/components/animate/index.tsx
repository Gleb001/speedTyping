// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState, useEffect, useRef } from "react";
// internal -------------------------------------------------- //
import type { Animate as AnimateType } from "./types";
import "./ui/index.css";

// main ====================================================== //
let Animate: AnimateType = ({ has, onShow, onHide, children }) => {

    let [hasChildren, setHasChildren] = useState(has);
    let AnimationContainerRef = useRef<HTMLDivElement>(null);

    function hide() {
        setTimeout(async () => {
            let child = AnimationContainerRef.current!.firstChild;
            if (onHide && child) await onHide(child as HTMLElement);
            setHasChildren(false);
        }, 1);
    }
    function show() {
        setHasChildren(true);
        setTimeout(async () => {
            let child = AnimationContainerRef.current!.firstChild;
            if (onShow && child) await onShow(child as HTMLElement);
        }, 1);
    }

    useEffect(has ? show : hide, [has]);

    return (
        <div className="animation_container" ref={AnimationContainerRef}>
            {hasChildren && children}
        </div>
    );

};

// export ==================================================== //
export default Animate;