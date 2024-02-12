// imports =================================================== //
import type { FC, ReactNode } from "react";

// main ====================================================== //
interface Props {
    description: string
}
type HintType = FC<
    Props &
    { children: ReactNode }
>

// export ==================================================== //
export type { HintType, Props };