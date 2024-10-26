const $table = $('#table');

const StartFunc = () => {
  const jVarLocalDataFromBootStrapTable = jFLocalGetColumnsDataOnly();
  console.log("aaaaaaa: ", jVarLocalDataFromBootStrapTable);

  return jVarLocalDataFromBootStrapTable.slice(0, 200);
};

const jFLocalGetColumnsDataOnly = () => {
  const jVarLocalDataFromBootStrapTable = $table.bootstrapTable('getData');
  const jVarLocalTableOptions = $table.bootstrapTable('getOptions');
  const jVarLocalColumnsArray = jVarLocalTableOptions.columns[0].map(element => element.field);
  jVarLocalColumnsArray.shift();

  const jVarLocalColumnsDataArray = jVarLocalDataFromBootStrapTable.map(element => {
    return jVarLocalColumnsArray.reduce((a, b) => (a[b] = element[b], a), {});
  });

  return jVarLocalColumnsDataArray;
};

export { StartFunc };