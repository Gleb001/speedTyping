// main ====================================================== //
interface LinkNodeType<Type = any> {
    current: Type,
    next: LinkNodeType<Type> | null
}
interface LinkListType<Type = any> {
    __firstNode: LinkNodeType<Type> | null,
    __lastNode: LinkNodeType<Type> | null,

    firstNode: Type | null,
    lastNode: Type | null,

    push(value: LinkNodeType<Type>): void
    shift(): void
}

// export ==================================================== //
export { LinkNodeType, LinkListType };