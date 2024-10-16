import ConfigJson from '../../../../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    return {
        field: "KS-Image",
        title: "KS-Image",
        formatter: jFLocalSerialColumn
    };
};

let jFLocalSerialColumn = (value, row, index) => {
    return [
        `<a href="${ConfigJson.BSTable.Columns.Image.replace("$RowPk", row.pk)}" class="btn btn-warning" target="_blank">`,
        `<i class="bi bi-image"></i>`,
        `</a>`
    ].join('');
};

export { StartFunc };