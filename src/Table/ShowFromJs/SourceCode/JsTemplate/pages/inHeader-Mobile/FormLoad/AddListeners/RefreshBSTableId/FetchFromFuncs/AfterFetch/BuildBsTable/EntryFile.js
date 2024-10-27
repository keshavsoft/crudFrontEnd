import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as onPostBody } from "./onPostBody/Entry.js";

const StartFunc = ({ inData }) => {
    const LocalDataAsArray = inData;

    var $table = $('#table');

    optionsJson.data = LocalDataAsArray;
    optionsJson.onPostBody = onPostBody;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };