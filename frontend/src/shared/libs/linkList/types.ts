// main ====================================================== //
type LinkNodeType<Type = any> = {
    current: Type,
    next: LinkNodeType<Type>
} | null

interface LinkListType<Type> {

    __firstNode: LinkNodeType<Type>,
    __lastNode: LinkNodeType<Type>,

    firstNode: Type | null,
    lastNode: Type | null,

    push(value: LinkNodeType<Type>): void
    shift(): void

}

// export ==================================================== //
export { LinkNodeType, LinkListType };