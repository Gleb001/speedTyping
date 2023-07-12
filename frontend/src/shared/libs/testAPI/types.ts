// imports =================================================== //
// import {
//     LinkListType,
//     LinkNodeType
// } from "@shared/libs/linkList/types";

// main ====================================================== //
// type DataTestType<Params, Result> = {
//     params: Params,
//     result: Result
// }

// interface TestType<
//     Type extends typeof Function,
//     Params = Parameters<Type>,
//     Result = ReturnType<Type>
// > {
//     api: Type,
//     data: LinkNodeType<DataTestType<[Params], Result>>,
// }

// type ListTestType = TestType<(...args: (any)[]) => any>[]

// type TestFunctionType = (
//     header: string,
//     micro_tests: ListTestType,
// ) => void

// type MicroTestFunctionType = (
//     test: TestType<(...args: (any)[]) => any>,
// ) => boolean;



// interface microTestType<Type extends (...args: [number]) => number> {
//     api: Type,
//     data: number
// }

// interface microTestType<Type extends (...args: [any]) => any> [
//     Type, Parameters<Type>, ReturnType<Type>
// ]

// export ==================================================== //
// export {
//     TestType,
//     DataTestType,
//     ListTestType,
//     TestFunctionType,
//     MicroTestFunctionType
// };