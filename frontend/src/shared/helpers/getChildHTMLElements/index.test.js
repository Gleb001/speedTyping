// imports =================================================== //
// external
import { createMicroTest } from "@shared/libs/testAPI";
// internal
import getChildHTMLElements from ".";

// main ====================================================== //
const testingGetChildHTMLElements = createMicroTest(
    getChildHTMLElements,
    [
        [document.createElement("div")],
        []
    ],
    [
        [
            function () {
                let element = document.createElement("div");
                element.append(document.createElement("span"));
                element.append(document.createElement("span"));
                return element;
            }()
        ],
        [
            document.createElement("span"),
            document.createElement("span")
        ]
    ],
    [
        [
            function () {
                let element = document.createElement("div");
                let child_element = document.createElement("div")
                child_element.append(document.createElement("div"));
                element.append(child_element);
                return element;
            }()
        ],
        [document.createElement("div")]
    ],
);

// export ==================================================== //
export default testingGetChildHTMLElements;