import { StartFunc as showInTable } from "./showInTable.js";
import { StartFunc as fromTxtFile } from "./ShowInTable/fromTxtFile.js";
import { StartFunc as showAsHtmlTable } from "./showAsHtmlTable.js";

let StartFunc = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        if (file.type === "text/plain") {
            fromTxtFile({ inData: reader.result });
        };

        if (file.type === "application/json") {
            const json = JSON.parse(reader.result);
            showInTable({ inData: json });
        };

        if (file.type === "text/csv") {
            const jVarLocalDataForDataTable = csvToDataTable({ inData: reader.result });
            
            showAsHtmlTable({ inObject: jVarLocalDataForDataTable });
        };
    };

    reader.readAsText(file);
};

const csvToDataTable = ({ inData }) => {
    const lines = inData.split(/\r\n|\n/);
    let [headings, ...entries] = lines;
    headings = headings.split(',');
    let headingsArray = [];

    headingsArray = headings.map(element => {
        return {
            field: element,
            title: element
        };
    });

    const objs = [];

    entries.map(entry => {
        let obj = entry.split(',');
        objs.push(Object.fromEntries(headings.map((head, i) => [head, obj[i]])));
    });

    return {
        columns: headingsArray,
        data: objs
    };
};

export { StartFunc };