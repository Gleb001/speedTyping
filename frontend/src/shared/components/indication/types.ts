// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type IndicationType = FC<{
    value: string | number,
    icon_class_name?: string,
    icon_content?: string
}>

// export ==================================================== //
export { IndicationType };