// imports =================================================== //
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStore } from "../../app/redux/types";

// types ===================================================== //
type useAppSelectorType = TypedUseSelectorHook<RootStore>

// constants ================================================= //
const useAppSelector: useAppSelectorType = useSelector;

// export ==================================================== //
export { useAppSelector };