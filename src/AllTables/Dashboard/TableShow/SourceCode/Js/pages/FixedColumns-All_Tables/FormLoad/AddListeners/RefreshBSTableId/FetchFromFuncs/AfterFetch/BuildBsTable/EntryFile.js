import optionsJson from './options.json' with {type: 'json'};

const StartFunc = ({ inData }) => {
    const LocalDataAsArray = inData;

    var $table = $('#table');

    optionsJson.data = LocalDataAsArray;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };