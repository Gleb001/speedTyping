// imports =================================================== //
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/redux/types";

// types ===================================================== //
type useAppDispatchType = () => AppDispatch

// constants ================================================= //
const useAppDispatch: useAppDispatchType = useDispatch;

// export ==================================================== //
export { useAppDispatch };