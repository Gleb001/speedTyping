// imports ================================================== //
import { AnimationJS } from "moveton";

// helpers ================================================== //
function hasBottomSpace(coordinatesItem: DOMRect) {
    const BottomSpace = (screen.height - (coordinatesItem.bottom));
    return (BottomSpace > coordinatesItem.height);
}
function getLeftPositionHint(coordinatesTargetElement: DOMRect, coordinatesHint: DOMRect) {

    const leftOnHint = (coordinatesHint.width - coordinatesTargetElement.width) / 2;
    // if ((leftOnHint + coordinatesTargetElement.left + coordinatesTargetElement.width) > window.innerWidth) {
    //     let difference = (leftOnHint + coordinatesTargetElement.left + coordinatesTargetElement.width) - window.innerWidth;
    //     return coordinatesTargetElement.left - (leftOnHint + difference);
    // } else
    if ((coordinatesTargetElement.left - leftOnHint) < 0) {
        return 0;
    } else {
        return coordinatesTargetElement.left - leftOnHint;
    }

}

// main ===================================================== //
const animations = {
    show(TargetElementRef: HTMLElement, HintRef: HTMLElement, TriangleHintRef: HTMLElement) {

        // get coordinates elements
        const coordinatesTargetElement = TargetElementRef.getBoundingClientRect();
        const coordinatesHint = HintRef.getBoundingClientRect();
        const coordinatesTriangleHint = TriangleHintRef.getBoundingClientRect();

        // get property for animation
        let property = {};
        if (hasBottomSpace(coordinatesTargetElement)) {

            const currentTop = coordinatesTargetElement.bottom + (coordinatesTriangleHint.height / 2);
            const nextTop = currentTop + 5;
            property = { top: `${currentTop} -> ${nextTop} px` };

            TriangleHintRef.style.top = `${-(coordinatesTriangleHint.height / 2)}px`;
            TriangleHintRef.style.borderBottom = "10px solid var(--secondary-additional-color)";
            TriangleHintRef.style.borderTop = "0px";
            HintRef.style.top = `${currentTop}px`;

        } else {

            const currentBottom = coordinatesTargetElement.height + (coordinatesTriangleHint.height / 2);
            const nextBottom = currentBottom + 5;
            property = { bottom: `${currentBottom} -> ${nextBottom} px` };

            TriangleHintRef.style.bottom = `${-(coordinatesTriangleHint.height / 2)}px`;
            TriangleHintRef.style.borderTop = "10px solid var(--secondary-additional-color)";
            TriangleHintRef.style.borderBottom = "0px";
            HintRef.style.bottom = `${currentBottom}px`;

        }

        // center alignment hint and hint container
        HintRef.style.left = `${getLeftPositionHint(coordinatesTargetElement, coordinatesHint)}px`;
        TriangleHintRef.style.left = `${(coordinatesHint.width / 2) - (coordinatesTriangleHint.width / 2)}px`;

        console.log(property);

        // create animation
        const animation_show_hint = new AnimationJS(
            [HintRef],
            {
                ...property,
                opacity: "0 -> 1",
            }
        );

        return animation_show_hint.start("easeInSine", 200);

    },
    hide(TargetElementRef: HTMLElement, HintRef: HTMLElement, TriangleHintRef: HTMLElement) {

        // get coordinates elements
        const coordinatesTargetElement = TargetElementRef.getBoundingClientRect();
        const coordinatesTriangleHint = TriangleHintRef.getBoundingClientRect();

        // get property for animation
        let property = {};

        if (hasBottomSpace(coordinatesTargetElement)) {
            const currentTop = HintRef.offsetTop;
            const nextTop = currentTop - 5;
            property = { top: `${currentTop} -> ${nextTop} px` };
        } else {
            const currentBottom = coordinatesTargetElement.height + (coordinatesTriangleHint.height / 2);
            const nextTop = currentBottom - 5;
            property = { bottom: `${currentBottom} -> ${nextTop} px` };
        }

        // create animation
        const animation_hide = new AnimationJS(
            [HintRef],
            {
                ...property,
                opacity: "1 -> 0"
            }
        );

        return animation_hide.start("easeOutSine", 200);

    }
};

// exports ================================================= //
export { animations };