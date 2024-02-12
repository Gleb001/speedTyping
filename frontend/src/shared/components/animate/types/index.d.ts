// imports =================================================== //
import type { FC, ForwardRefExoticComponent } from "react";
import type { AnimationJS } from "moveton"

// main ====================================================== //
interface Props {
    has: boolean,
    onShow?: (element: HTMLElement) => ReturnType<AnimationJS["start"]>,
    onHide?: (element: HTMLElement) => ReturnType<AnimationJS["start"]>
}
type Animate = FC<
    Props &
    { children: JSX.Element }
>

// export ==================================================== //
export type { Animate, Props };