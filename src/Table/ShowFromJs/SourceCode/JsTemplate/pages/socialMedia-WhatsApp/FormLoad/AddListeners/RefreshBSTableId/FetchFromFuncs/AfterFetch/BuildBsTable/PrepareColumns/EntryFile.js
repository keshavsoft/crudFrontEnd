import { StartFunc as SerialColumn } from "./SerialColumn/EntryFile.js";
import { StartFunc as CallColumn } from "./CallColumn/EntryFile.js";
import { StartFunc as WhatsAppColumn } from "./WhatsAppColumn/EntryFile.js";

const StartFunc = ({ inColumnsArray }) => {
    let jVarLocalReturnArray = inColumnsArray;

    let LocalColumnWhatsApp = jVarLocalReturnArray.find(element => element.title === "Mobile");
    console.log("LocalColumnWhatsApp : ", LocalColumnWhatsApp);

    if (LocalColumnWhatsApp === undefined === false) {
        WhatsAppColumn({ inFindColumn: LocalColumnWhatsApp });
    };

    // jVarLocalReturnArray[2].sortable = true;
    // jVarLocalReturnArray[9].sortable = true;

    // jVarLocalReturnArray.unshift(WhatsAppColumn());
    // jVarLocalReturnArray.unshift(CallColumn());
    // jVarLocalReturnArray.unshift(SerialColumn());

    return jVarLocalReturnArray;
};

export { StartFunc };