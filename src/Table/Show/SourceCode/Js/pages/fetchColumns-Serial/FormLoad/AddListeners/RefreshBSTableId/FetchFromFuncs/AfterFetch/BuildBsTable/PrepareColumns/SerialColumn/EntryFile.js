const StartFunc = () => {
    return {
        field: "#",
        title: "#",
        formatter: jFLocalSerialColumn
    };
};

const jFLocalSerialColumn = (value, row, index) => {
    console.log("aaaaaaaa : ", value, row, index);

    return index + 1;
};

export { StartFunc };