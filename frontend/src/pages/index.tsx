// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
import { Route, Routes } from "react-router";
// pages ----------------------------------------------------- //
import HomePage from "./home";

// main ====================================================== //
let Routing = () => (
    <Routes>
        <Route path="*" element={<HomePage />} />
    </Routes>
); 

// export ==================================================== //
export default Routing;