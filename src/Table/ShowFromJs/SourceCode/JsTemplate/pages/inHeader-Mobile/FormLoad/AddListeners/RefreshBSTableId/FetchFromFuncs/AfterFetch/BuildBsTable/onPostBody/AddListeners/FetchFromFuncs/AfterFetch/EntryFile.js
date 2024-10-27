import { StartFunc as status200 } from "./status200.js";

let StartFunc = ({ inResponse }) => {
    let jVarLocalResponse = inResponse;

    if (jVarLocalResponse.status === 200) {
        status200();
    };
};

export { StartFunc }