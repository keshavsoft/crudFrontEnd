import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as onPostBody } from "./onPostBody/Entry.js";

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onPostBody = onPostBody;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };