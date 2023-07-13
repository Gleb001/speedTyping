// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import Routing from "@pages/index";
// internal
import "./ui/index.css";
import { AppType } from "./types";
import AppProviders from "./providers";
// tests
// import "@shared/helpers/index.test";
// import "@shared/libs/index.test";

// main ====================================================== //
let App: AppType = ({}) => AppProviders(() => <Routing />);

// export ==================================================== //
export default App;