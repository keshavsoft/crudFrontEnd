import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as Rows } from "./ColumnHandlers/Rows/EntryFile.js";

const StartFunc = ({ inData }) => {
    const LocalDataAsArray = inData;

    var $table = $('#table');

    optionsJson.data = LocalDataAsArray;
    optionsJson.columns[1].footerFormatter = Rows;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };