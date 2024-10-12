import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = ({ inData }) => {
    const LocalDataAsArray = inData;

    var $table = $('#table');

    optionsJson.data = LocalDataAsArray;

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };