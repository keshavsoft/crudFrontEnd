import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as PrepareColumns } from "./PrepareColumns/EntryFile.js";

const StartFunc = ({ inData }) => {
    var $table = $('#table');

    optionsJson.data = inData;
    optionsJson.columns = PrepareColumns({ inFirstRow: inData[0] });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };