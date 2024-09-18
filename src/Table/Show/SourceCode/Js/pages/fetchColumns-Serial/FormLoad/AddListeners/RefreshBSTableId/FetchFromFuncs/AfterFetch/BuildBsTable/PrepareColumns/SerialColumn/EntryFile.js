const StartFunc = () => {
    return {
        field: "#",
        title: "#",
        Formatter: jFLocalSerialColumn
    };
};

const jFLocalSerialColumn = (value, row, index) => {
    return index + 1;
};

export { StartFunc };