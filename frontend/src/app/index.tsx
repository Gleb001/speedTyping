// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import Routing from "@pages/index";
// internal
import "./ui/index.css";
import { AppType } from "./types";
import AppProviders from "./providers";

// main ====================================================== //
let App: AppType = ({}) => AppProviders(() => <Routing />);

// export ==================================================== //
export default App;