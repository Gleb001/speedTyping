// imports =================================================== //
// libs
import React from "react";
// components
import "./styles/index.css";
import { AppType } from "./types";
import AppProviders from "./providers";
import Routing from "../pages";

// main ====================================================== //
let App: AppType = ({}) => AppProviders(() => <Routing />);

// export ==================================================== //
export default App;