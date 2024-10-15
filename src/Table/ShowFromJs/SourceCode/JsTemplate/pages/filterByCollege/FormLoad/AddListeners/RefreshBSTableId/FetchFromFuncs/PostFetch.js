import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.GetUrl;;
    let jVarLocalStartRoute = "binV4";

    let response = await fetch(`/${jVarLocalStartRoute}/${jVarLocalFetchUrl}`);

    return await response;
};

export { StartFunc };

