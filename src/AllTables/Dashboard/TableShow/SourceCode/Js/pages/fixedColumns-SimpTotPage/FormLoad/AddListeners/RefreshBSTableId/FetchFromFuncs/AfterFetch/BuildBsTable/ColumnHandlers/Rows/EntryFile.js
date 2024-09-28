const StartFunc = (data) => {
    const jVarLocalRowsColumn = data.map(element => {
        return element.rows;
    });

    return jVarLocalRowsColumn.reduce(reducer);
};

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
};

export { StartFunc };