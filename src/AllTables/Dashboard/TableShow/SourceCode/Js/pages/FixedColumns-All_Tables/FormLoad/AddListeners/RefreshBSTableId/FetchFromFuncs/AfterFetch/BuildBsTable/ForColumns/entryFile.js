import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as Columnrows } from "./Columnrows/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnrows = LocalColumns.find(element => element.field === "rows");


    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnrows === undefined === false) {
        Columnrows({ inFindColumn: LocalColumnrows });
    };
};

export { StartFunc };