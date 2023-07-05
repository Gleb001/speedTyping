// imports =================================================== //
// libs
import React from "react";
import { Route, Routes } from "react-router";
// components
import HomePage from "./home";

// main ====================================================== //
let Routing = () => (
    <Routes>
        <Route path="*" element={<HomePage />} />
    </Routes>
); 

// export ==================================================== //
export default Routing;