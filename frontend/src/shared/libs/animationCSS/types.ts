// main ====================================================== //
type playAnimationCSSType = (
    element: HTMLElement,
    animation_css: string,
    duration: number,
) => Promise<unknown>

// export ==================================================== //
export { playAnimationCSSType };