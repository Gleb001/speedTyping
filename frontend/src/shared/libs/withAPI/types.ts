// main ====================================================== //
type withAPIType = <ReturnType>(
    path: RequestInfo | URL,
    options?: RequestInit
) => Promise<ReturnType>

// export ==================================================== //
export default withAPIType;