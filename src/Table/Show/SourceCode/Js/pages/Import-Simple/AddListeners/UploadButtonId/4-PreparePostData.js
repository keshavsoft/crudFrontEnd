const StartFunc = () => {
  var $table = $('#table');
  const jVarLocalDataFromBootStrapTable = $table.bootstrapTable('getData');

  return jVarLocalDataFromBootStrapTable.slice(1, 5);
};

export { StartFunc };