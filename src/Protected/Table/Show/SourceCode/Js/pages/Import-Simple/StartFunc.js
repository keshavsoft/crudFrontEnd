// import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
// import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncShowOnDom });

    if (true) {
        StartFuncFormLoad();
        StartFuncAddListeners();

        // StartFuncShowOnDom().then(()=>{
        //     StartFuncAddListeners();
        // });
    };
};

StartFunc();