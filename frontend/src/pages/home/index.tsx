// imports =================================================== //
// external
import React from "react";
import TypingTrainer from "@widgets/typing_trainer";
// internal
import "./ui/index.css";
import { HomePageType } from "./types";

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