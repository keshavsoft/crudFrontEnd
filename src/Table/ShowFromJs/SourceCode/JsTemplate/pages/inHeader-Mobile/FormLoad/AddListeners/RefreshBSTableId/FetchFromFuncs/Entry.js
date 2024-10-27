import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        const jVarLocalFetchData = await jVarLocalDataNeeded.json();
        var $table = $('#table');

        $table.bootstrapTable("load", jVarLocalFetchData);
    };
};

export { StartFunc }