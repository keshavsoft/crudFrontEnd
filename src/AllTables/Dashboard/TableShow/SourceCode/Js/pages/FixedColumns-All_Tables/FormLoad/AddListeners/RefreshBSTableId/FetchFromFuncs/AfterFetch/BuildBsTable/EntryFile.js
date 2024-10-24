import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

const StartFunc = ({ inData }) => {
    var $table = $('#table');
    optionsJson.data = inData

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

