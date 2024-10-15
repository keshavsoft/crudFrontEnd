import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as WhatsAppColumn } from "./WhatsAppColumn/EntryFile.js";
// import { StartFunc as Image } from "./Image/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnImage = LocalColumns.find(element => element.field === "Image");
    let LocalColumnWhatsApp = LocalColumns.find(element => element.title === "WhatsApp");

    console.log("LocalColumnOperateFine : ", LocalColumnOperateFine);

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnWhatsApp === undefined === false) {
        WhatsAppColumn({ inFindColumn: LocalColumnWhatsApp });
    };

    // Image({ inFindColumn: LocalColumnImage });
};

export { StartFunc };