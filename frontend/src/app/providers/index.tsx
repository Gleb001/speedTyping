// imports =================================================== //
import React from "react";
import { BrowserRouter } from "react-router-dom";

// main ====================================================== //
let AppProviders = (component: () => React.ReactNode) => (
    <BrowserRouter>{component()}</BrowserRouter>
);

// export ==================================================== //
export default AppProviders;