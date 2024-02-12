// imports =================================================== //
import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootStore } from "../../app/redux/types";

// types ===================================================== //
type useAppSelector = TypedUseSelectorHook<RootStore>

// constants ================================================= //
const useAppSelector: useAppSelector = useSelector;

// export ==================================================== //
export { useAppSelector };