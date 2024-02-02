// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import { SettingType } from "./types";
import "./ui/index.css";

// main ====================================================== //
let Setting: SettingType = ({ title, children }) => {

    return (
        <div className="setting">
            <div className="setting_title">
                {title}
            </div>
            <div className="setting_switch">
                {children}
            </div>
        </div>
    );

};

// export ==================================================== //
export default Setting;