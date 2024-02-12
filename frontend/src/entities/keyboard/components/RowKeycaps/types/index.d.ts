// imports =================================================== //
import type { FC } from "react";
import type { KeycapValue } from "../../Keycap/types";

// main ====================================================== //
interface Props {
    data: KeycapValue[]
}
type RowKeycaps = FC<Props>

// export ==================================================== //
export type { RowKeycaps };