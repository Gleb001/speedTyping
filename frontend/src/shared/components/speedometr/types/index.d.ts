// imports =================================================== //
import type { FC } from "react";

// main ====================================================== //
type StatusSpeedometer = "translation" | "fix"
interface Props {
    value: number,
    measurement: string,
    status: StatusSpeedometer,
    onIndicate: (a: number, b: number) => boolean
}
type Speedometer = FC<Props>

// export ==================================================== //
export type { Speedometer, Props };