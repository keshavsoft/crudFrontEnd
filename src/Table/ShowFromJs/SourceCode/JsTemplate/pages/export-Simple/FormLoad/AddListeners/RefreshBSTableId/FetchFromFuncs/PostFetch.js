import ConfigJson from '../../../../Config.json' with {type: 'json'};
import CommonConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.GetUrlEndPoint;

    const jVarLocalStartUrl = CommonConfigJson.StartUrl;
    const jVarLocalTableName = CommonConfigJson.TableName;

    let response = await fetch(`/${jVarLocalStartUrl}/${jVarLocalTableName}/${jVarLocalFetchUrl}`);

    return await response;
};

export { StartFunc };

