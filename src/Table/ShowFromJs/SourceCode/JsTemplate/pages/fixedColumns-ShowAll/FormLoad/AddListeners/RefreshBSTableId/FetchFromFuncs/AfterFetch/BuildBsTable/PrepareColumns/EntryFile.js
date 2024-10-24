const StartFunc = ({ inFirstRow }) => {
    let jVarLocalReturnArray = [];

    for (const [key, value] of Object.entries(inFirstRow)) {
        jVarLocalReturnArray.push({
            field: key,
            title: key
        });
    }

    return jVarLocalReturnArray;
};

export { StartFunc };