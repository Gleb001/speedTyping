// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
interface Props {
    title: string
}
type SettingType = FC<
    Props &
    { children: JSX.Element }
>

// export ==================================================== //
export type { SettingType };