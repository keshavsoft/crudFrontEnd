import { StartFunc as SerialColumn } from "./SerialColumn/EntryFile.js";
import { StartFunc as CallColumn } from "./CallColumn/EntryFile.js";
import { StartFunc as WhatsAppColumn } from "./WhatsAppColumn/EntryFile.js";

const StartFunc = ({ inColumnsArray }) => {
    let jVarLocalReturnArray = inColumnsArray;

    jVarLocalReturnArray[2].sortable = true;
    jVarLocalReturnArray[9].sortable = true;

    jVarLocalReturnArray.unshift(WhatsAppColumn());
    jVarLocalReturnArray.unshift(CallColumn());
    jVarLocalReturnArray.unshift(SerialColumn());

    return jVarLocalReturnArray;
};

export { StartFunc };