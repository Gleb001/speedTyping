// main ====================================================== //
const getChildHTMLElements = (element: Element) => (
    Array.from(element.children, (child => child as HTMLElement))
);

// export ==================================================== //
export default getChildHTMLElements;