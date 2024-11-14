import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "../../../../Config.json" with { type: "json" };
import CommonConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = UrlJson.PostUrlEndPoint;

    const jVarLocalStartUrl = CommonConfigJson.StartUrl;
    const jVarLocalTableName = CommonConfigJson.TableName;

    let response = await fetch(`/${jVarLocalStartUrl}/${jVarLocalTableName}/${jVarLocalFetchUrl}`, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };