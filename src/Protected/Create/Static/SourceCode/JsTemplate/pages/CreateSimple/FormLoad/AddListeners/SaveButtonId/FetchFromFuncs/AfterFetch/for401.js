import { StartFunc as LoginModal } from "../../../../../../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const jVarLocalSuccessFunc = () => {
    let jVarLocalSaveButtonId = document.getElementById('SaveButtonId');
    jVarLocalSaveButtonId.click();
};

let StartFunc = () => {
    LoginModal({ inSuccessFunc: jVarLocalSuccessFunc });
};

export { StartFunc }