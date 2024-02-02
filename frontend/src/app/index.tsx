// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// pages ----------------------------------------------------- //
import Routing from "@pages/index";
// providers ------------------------------------------------- //
import AppProviders from "./providers";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { AppType } from "./types";
// tests in browser's console -------------------------------- //
// import "@shared/helpers/index.test";
// import "@shared/libs/index.test";

// main ====================================================== //
let App: AppType = ({}) => AppProviders(() => <Routing />);

// export ==================================================== //
export default App;