import ConfigJson from '../../../../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a href="${ConfigJson.BSTable.Columns.Image.replace("$RowPk", row.pk)}" class="btn btn-warning">`,
        `<i class="bi bi-image"></i>`,
        `</a>`
    ].join('');
};

export { StartFunc };