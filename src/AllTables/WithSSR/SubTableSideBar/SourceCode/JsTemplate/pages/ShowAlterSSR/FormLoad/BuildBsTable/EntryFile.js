import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');

    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };
