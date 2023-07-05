// imports =================================================== //
import { FC } from "react";
import { LinkNodeType, LinkListType } from "../../shared/lib/linkList/types";

// main ====================================================== //
interface TextTypingType { id: number, text: string }
type LinkNodeTextTypingType = LinkNodeType<TextTypingType>

type TypingTrainerType = FC<{}>

// export ==================================================== //
export {
    TypingTrainerType,
    TextTypingType,
    LinkNodeTextTypingType
};