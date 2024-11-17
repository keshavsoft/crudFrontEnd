/*global console: false */
const titleElement = "Title";
const messageElement = "Notification Sent";

const ShowFunc = () => {
    console.log("aaaa");
    webNotification.showNotification(titleElement, {
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
}

const StartFunc = () => {
     let jVarLocalSendButtonID = document.getElementById('SendButtonID');
    console.log(jVarLocalSendButtonID);
     jVarLocalSendButtonID.addEventListener("click", ShowFunc);
}


StartFunc()
