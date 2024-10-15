import { StartFunc as for200 } from "./for200.js";
import { StartFunc as for401 } from "./for401.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();

        for200({ inRowPk: jVarLocalSavedPk });
    };

    if (jVarLocalResponse.status === 401) {
        for401();
    };
};

export { StartFunc }