// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// hooks ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// animations ------------------------------------------------ //
import { animations as animation_settings } from "@entities/settings/constants/animations";
import { animations as animationsKeyboardSimulator } from "@widgets/KeyboardSimulator/constants/animations";
// components ------------------------------------------------ //
import Animate from "@shared/components/animate";
import KeyboardSimulator from "@widgets/KeyboardSimulator";
import Settings from "@entities/settings";

// main ====================================================== //
const HomePage = () => {

    const hasSettings = useAppSelector(state => state.settings.isOpen!);

    return (
        <div className="home_page">
            <Animate
                has={!hasSettings}
                onShow={animationsKeyboardSimulator.show}
                onHide={animationsKeyboardSimulator.hide}
            >
                <KeyboardSimulator />
            </Animate>
            <Animate
                has={hasSettings}
                onShow={animation_settings.show}
                onHide={animation_settings.hide}
            >
                <Settings />
            </Animate>
        </div>
    );

}

// export ==================================================== //
export default HomePage;