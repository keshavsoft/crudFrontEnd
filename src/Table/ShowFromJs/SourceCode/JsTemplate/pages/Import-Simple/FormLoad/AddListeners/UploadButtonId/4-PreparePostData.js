const StartFunc = () => {
  var $table = $('#table');
  const jVarLocalDataFromBootStrapTable = $table.bootstrapTable('getData');

  return jVarLocalDataFromBootStrapTable.slice(0, 100);
};

export { StartFunc };