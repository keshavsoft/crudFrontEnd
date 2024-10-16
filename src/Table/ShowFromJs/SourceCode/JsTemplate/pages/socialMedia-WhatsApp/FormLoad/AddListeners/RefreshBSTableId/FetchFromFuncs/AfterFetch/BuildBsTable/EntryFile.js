import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as PrepareColumns } from "./PrepareColumns/EntryFile.js";

const StartFunc = ({ inData }) => {
    var $table = $('#table');
    console.log("inData : ", inData);

    optionsJson.data = inData.data;
    optionsJson.columns = PrepareColumns({ inColumnsArray: inData.columns });
    // optionsJson.columns = inData.columns;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };