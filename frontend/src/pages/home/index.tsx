// imports =================================================== //
// external
import React from "react";
// slices (FSD)
import TypingSpeedometrs from "@widgets/typingSpeedometrs";
import TypingTrainer from "@entities/inputTypingCont";
// internal
import "./ui/index.css";
import { HomePageType } from "./types";


// main ====================================================== //
let HomePage: HomePageType = ({ }) => {
    return (
        <div id="home_page">
            <TypingSpeedometrs />
            <TypingTrainer />
        </div>
    );
};

// export ==================================================== //
export default HomePage;