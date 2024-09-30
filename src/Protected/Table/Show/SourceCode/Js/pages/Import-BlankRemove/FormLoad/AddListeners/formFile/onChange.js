import { StartFunc as showInTable } from "./showInTable.js";
import { StartFunc as fromTxtFile } from "./ShowInTable/fromTxtFile.js";
import { StartFunc as showAsHtmlTable } from "./showAsHtmlTable.js";

let StartFunc = (event) => {
    const file = event.target.files[0];
    console.log("file : ", file);
    const reader = new FileReader();

    reader.onload = () => {
        if (file.type === "text/plain") {
            fromTxtFile({ inData: reader.result });
        };

        if (file.type === "application/json") {
            const json = JSON.parse(reader.result);
            showInTable({ inData: json });
        };
        console.log("aaaaaaaaaa: ", reader.result);

        if (file.type === "text/csv") {
            const jVarLocalDataForDataTable = csvToDataTable({ inData: reader.result });
            showAsHtmlTable({ inObject: jVarLocalDataForDataTable });
            console.log("jVarLocalDataForDataTable : ", jVarLocalDataForDataTable);
        };
    };

    reader.readAsText(file);
};

function Joes_remove(someArray, inIndexArray) {
    let NewLocalArray = [];
    // let LocalSplit = someArray.split(',');

    inIndexArray.forEach(element => {
        NewLocalArray.push(someArray[element]);
    });

    return NewLocalArray;
};

const csvToDataTable = ({ inData }) => {
    const lines = inData.split(/\r\n|\n/);
    let [headings, ...entries] = lines;

    headings = headings.split(',');

    let headingsArray = [];
    let LocalNonEmptyHeadings = [];

    headings.forEach((element, LoopIndex) => {
        if (element === "" === false) {
            LocalNonEmptyHeadings.push(LoopIndex);
        };
    });

    headingsArray = LocalNonEmptyHeadings.map(element => {
        return {
            field: headings[element],
            title: headings[element]
        };
    });

    const objs = [];

    entries.map(entry => {
        // let obj = entry.split(',');
        // objs.push(Joes_remove(obj, LocalNonEmptyHeadings));

        let obj = Joes_remove(entry.split(','), LocalNonEmptyHeadings);

        objs.push(Object.fromEntries(LocalNonEmptyHeadings.map((head, i) => [headings[head], obj[i]])));
    });

    return {
        columns: headingsArray,
        data: objs
    };
};

export { StartFunc };