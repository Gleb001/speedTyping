// imports =================================================== //
import { FC } from "react";
import type React from "react"; 

// main ====================================================== //
interface ActionType {
    [key: string]: (...args: any) => any,
    "onClick": (event: React.MouseEvent) => void,
}

type ButtonType = FC<{
    name?: string | number,
    icon_className?: string,
    actions?: ActionType
}>

// export ==================================================== //
export { ButtonType };