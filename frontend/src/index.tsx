// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "@app/redux/index";
// components ------------------------------------------------ //
import App from "@app/index";

// constants ================================================= //
// @ts-ignore ReactDom.createRoot is experemental
const root = ReactDOM.createRoot(document.getElementById("root"));

// main ====================================================== //
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);