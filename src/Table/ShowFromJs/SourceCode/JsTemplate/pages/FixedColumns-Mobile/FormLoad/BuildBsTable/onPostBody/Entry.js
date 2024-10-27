import { StartFunc as AddListeners } from "./AddListeners/EntryFile.js";

const StartFunc = ({ inData }) => {
    console.log("onPostBodyNEW");
    AddListeners();
};

export { StartFunc };