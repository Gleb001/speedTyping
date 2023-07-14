// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// pages ----------------------------------------------------- //
import Routing from "@pages/index";
// providers ------------------------------------------------- //
import AppProviders from "./providers";
// tests ----------------------------------------------------- //
// import "@shared/helpers/index.test";
// import "@shared/libs/index.test";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { AppType } from "./types";

// main ====================================================== //
let App: AppType = ({}) => AppProviders(() => <Routing />);

// export ==================================================== //
export default App;