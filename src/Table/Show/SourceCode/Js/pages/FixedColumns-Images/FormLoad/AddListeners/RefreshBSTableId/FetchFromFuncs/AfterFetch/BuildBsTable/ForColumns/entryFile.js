import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as Image } from "./Image/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "#");
    let LocalColumnImage = LocalColumns.find(element => element.field === "Image");

    ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    Image({ inFindColumn: LocalColumnImage });
};

export { StartFunc };