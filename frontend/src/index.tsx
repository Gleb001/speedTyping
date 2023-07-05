// imports =================================================== //
// libs
import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// components
import App from "./app/index";
// import store from "./app/redux/index";

// constants ================================================= //
// @ts-ignore ReactDom.createRoot is experemental
const root = ReactDOM.createRoot(document.getElementById("root"));

// main ====================================================== //
root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider> */}
    </React.StrictMode>
);