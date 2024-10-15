import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = ({ inData }) => {
    const LocalDataAsArray = inData;

    var $table = $('#table');

    let jVarLocalReturnObject = jFLocalTransformColumns({ inColumns: optionsJson.columns });

    optionsJson.data = jFLocalTransformData({
        inData: LocalDataAsArray,
        inColumnsObject: jVarLocalReturnObject
    });

    console.log("optionsJson : ", optionsJson);

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

const jFLocalTransformData = ({ inData, inColumnsObject }) => {
    let jVarLocalArray = inData.map(element => {
        return {
            ...inColumnsObject, ...element
        };
    });

    return jVarLocalArray;
};

const jFLocalTransformColumns = ({ inColumns }) => {
    let jVarLocalReturnObject = {};

    inColumns.forEach(element => {
        jVarLocalReturnObject[element.field] = "";
    });

    return jVarLocalReturnObject;
};

export { StartFunc };