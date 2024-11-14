const messageElement = "Student Added";
let serviceWorkerRegistration;

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('../JsTemplate/pages/CreateWithNotification/NotificationFuncs/service-worker.js').then(function (registration) {
        serviceWorkerRegistration = registration;
    });
}

let StartFunc = ({ inRowPk }) => {
    webNotification.showNotification(inRowPk, {
        serviceWorkerRegistration: serviceWorkerRegistration,
        body: messageElement,
        onClick: function onNotificationClicked() {
            console.log('Notification clicked.');
        },
        autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
    }, function onShow(error, hide) {
        if (error) {
            window.alert('Unable to show notification: ' + error.message);
        } else {
            console.log('Notification Shown.');

            setTimeout(function hideNotification() {
                console.log('Hiding notification....');
                hide(); //manually close the notification (you can skip this if you use the autoClose option)
            }, 5000);
        }
    });
};

export { StartFunc }