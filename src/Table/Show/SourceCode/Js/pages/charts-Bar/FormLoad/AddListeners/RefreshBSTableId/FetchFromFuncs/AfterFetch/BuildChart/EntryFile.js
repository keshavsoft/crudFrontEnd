const StartFunc = ({ inData }) => {
    const result = Object.groupBy(inData, ({ CollegeName }) => {
        return CollegeName;
    });

    const jVarLocalLabels = Object.keys(result);
    const jVarLocalDataArray = Object.values(result).map(element => element.length);

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: jVarLocalLabels,
            datasets: [{
                label: '# of Students',
                data: jVarLocalDataArray,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

export { StartFunc };