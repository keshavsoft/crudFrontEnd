import { StartFunc as BuildChart } from "./BuildChart/EntryFile.js";

let StartFunc = ({ inData }) => {
    BuildChart({ inData })
};

export { StartFunc };