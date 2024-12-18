import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalroutePath = UrlJson.routePath;
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/${UrlJson.PostUrl}`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    
    return response;
};

export { StartFunc };