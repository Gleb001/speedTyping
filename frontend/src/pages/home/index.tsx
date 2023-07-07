/// imports =================================================== //
// external
import React from "react";
// internal
import TypingTrainer from "@widgets/typing_trainer";
import { HomePageType } from "./types";

// constants ================================================= //

// main ====================================================== //
let HomePage: HomePageType = ({ }) => {
    return (
        <div id="home_page">
            <TypingTrainer />
        </div>
    );
};

// export ==================================================== //
export default HomePage;