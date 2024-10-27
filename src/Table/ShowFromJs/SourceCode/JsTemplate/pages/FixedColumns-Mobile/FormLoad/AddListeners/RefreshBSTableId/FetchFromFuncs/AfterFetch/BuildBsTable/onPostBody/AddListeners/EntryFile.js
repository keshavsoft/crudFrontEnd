import { StartFunc as ButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalHtml = document.getElementById("TableFooterSaveButtonId");

    if (jVarLocalHtml === null === false) {
        jVarLocalHtml.addEventListener("click", ButtonClickFunc);
    };
};

export { StartFunc };