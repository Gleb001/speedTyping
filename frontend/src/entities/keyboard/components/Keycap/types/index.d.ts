// imports =================================================== //
import type { FC } from "react";
import type { Keycap } from "@entities/keyboard/types";

// main ====================================================== //
type KeycapStatus = "default" | "active" | "wrong"
type FingerStatus = "little" | "ring" | "middle" | "index" | "thumb"
interface Props {
    fingerStatus: FingerStatus,
    value: Keycap,
}
type KeycapComponent = FC<Props>

// export ==================================================== //
export type { KeycapComponent, KeycapStatus, Props, FingerStatus };