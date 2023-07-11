// imports =================================================== //
// external
import React from "react";
// slices (FSD)
import TypingSpeedometrs from "@widgets/typingSpeedometrs";
import TypingTrainer from "@entities/inputTypingCont";
import InputKeyboard from "@entities/inputKeyboard";
// internal
import "./ui/index.css";
import { HomePageType } from "./types";


// main ====================================================== //
let HomePage: HomePageType = ({ }) => {
    return (
        <div id="home_page">
            <TypingSpeedometrs />
            <TypingTrainer />
            <InputKeyboard matrix_keycaps={[
                [
                    ["`", "~"],
                    ["1", "!"],
                    ["2", "@"],
                    ["3", "#"],
                    ["4", "$"],
                    ["5", "%"],
                    ["6", "^"],
                    ["7", "&"],
                    ["8", "*"],
                    ["9", "("],
                    ["0", ")"],
                    ["-", "_"],
                    ["=", "+"],
                    ["◄════"]
                ],
                [
                    ["tab"],
                    ["Q"],
                    ["W"],
                    ["E"],
                    ["R"],
                    ["T"],
                    ["Y"],
                    ["U"],
                    ["I"],
                    ["O"],
                    ["P"],
                    ["[", "{"],
                    ["]", "}"],
                    ["\\", "|"],
                ],
                [
                    ["caps"],
                    ["A"],
                    ["S"],
                    ["D"],
                    ["F"],
                    ["G"],
                    ["H"],
                    ["J"],
                    ["K"],
                    ["L"],
                    [";", ":"],
                    ["'", "\""],
                    ["◄════╝"],
                ],
                [
                    ["shift"],
                    ["Z"],
                    ["X"],
                    ["C"],
                    ["V"],
                    ["B"],
                    ["N"],
                    ["M"],
                    [",", "<"],
                    [".", ">"],
                    ["/", "?"],
                    ["shift"],
                ],
                [
                    ["control"],
                    ["cmd"],
                    ["alt"],
                    ["―"],
                    ["alt"],
                    ["fn"],
                    ["control"],
                    ["don't click"],
                ],
            ]}/>
        </div>
    );
};

// export ==================================================== //
export default HomePage;