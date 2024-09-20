import { StartFunc as SerialColumn } from "./SerialColumn/EntryFile.js";
import { StartFunc as CallColumn } from "./CallColumn/EntryFile.js";

const StartFunc = ({ inFirstRow }) => {
    let jVarLocalReturnArray = [];

    for (const [key, value] of Object.entries(inFirstRow)) {
        jVarLocalReturnArray.push({
            field: key,
            title: key
        });
    }

    jVarLocalReturnArray.unshift(CallColumn());
    jVarLocalReturnArray.unshift(SerialColumn());

    return jVarLocalReturnArray;
};

export { StartFunc };