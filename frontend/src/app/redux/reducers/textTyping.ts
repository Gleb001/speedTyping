// // imports =================================================== //
// import { createSlice } from "@reduxjs/toolkit";
// import { LinkListType, LinkNodeType } from "@libs/linkList/types";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { LinkList } from "@libs/linkList";
// import { TextTypingType, LinkNodeTextTypingType }
// from "src/widgets/typing_trainer/components/TextTyping/types";

// // constants ================================================= //
// const initialState:LinkListType<TextTypingType> = new LinkList();

// // main ====================================================== //
// let textTypingSlice = createSlice({
//     name: "text-typing",
//     initialState,
//     reducers: {
//         push: (
//             state,
//             action: PayloadAction<LinkNodeTextTypingType>
//         ) => {
//             // https://translated.turbopages.org/proxy_u/en-ru.ru.f5f2470d-6497e7b8-16f3eabd-74722d776562/https/stackoverflow.com/questions/70425384/redux-toolkit-returns-the-previous-state-when-you-make-a-request-for-data-how-d
//             // console.log(state);
//             state.push(action.payload);
//             // console.log(state);
//         },
//         shift: (state) => { state.shift() },
//     }
// });

// // export ==================================================== //
// export { textTypingSlice };
// export let { push, shift } = textTypingSlice.actions;
// export default textTypingSlice.reducer;