// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useState, useMemo } from "react";
// hooks ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// internal -------------------------------------------------- //
import type { KeycapStatus, KeycapComponent as KeycapType } from "./types";
import "./ui/index.css";
import isActiveKeycap from "./helpers/isEqualKeycap";
import getShortenKeycapName from "./helpers/getShortenKeycapName";

// main ====================================================== //
const Keycap: KeycapType = ({ fingerStatus, value }) => {

    const keycaps = useAppSelector(state => state.keycaps);
    const hasFingerStatus = useAppSelector(state => state.settings.hasFingerStatus);

    let [status, setStatus] = useState<KeycapStatus>("default");
    const activeKeycaps = keycaps.active;

    // set active or default status
    useEffect(() => {
        if (activeKeycaps.length !== 0 && isActiveKeycap(activeKeycaps, value)) {
            setStatus("active");
        } else if (status === "active") {
            setStatus("default");
        }
    }, [activeKeycaps]);

    // set default status if up and has wrong status
    useEffect(() => {

        const upKeycap = keycaps.up;
        const isUpKeycap = value.includes(upKeycap.length === 1 ? upKeycap.toUpperCase() : upKeycap);
        const isDefaultKeycap = (isUpKeycap && status === "wrong");
        if (isDefaultKeycap) {
            setStatus("default");
        }

    }, [keycaps.up]);

    // set wrong status if down and has default status
    useEffect(() => {
        const downKeycap = keycaps.down;
        const isDownKeycap = value.includes(downKeycap.length === 1 ? downKeycap.toUpperCase() : downKeycap);
        const isWrongKeycap = (isDownKeycap && status === "default");
        if (isWrongKeycap) {
            setStatus("wrong");
        }
    }, [keycaps.down]);

    const className = `${hasFingerStatus ? fingerStatus : ""}_keycap keycap ${status}_keycap`;
    const keycapName = useMemo(() => value[0].length > 1 ? getShortenKeycapName(value[0]) : value[0], [value]);

    return (
        <div className={className}>
            {keycapName}
        </div>
    );

};

// export ==================================================== //
export default Keycap;