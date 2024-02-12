// imports =================================================== //
import store from "..";

// main ====================================================== //
type RootStore = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// export ==================================================== //
export type { RootStore, AppDispatch };