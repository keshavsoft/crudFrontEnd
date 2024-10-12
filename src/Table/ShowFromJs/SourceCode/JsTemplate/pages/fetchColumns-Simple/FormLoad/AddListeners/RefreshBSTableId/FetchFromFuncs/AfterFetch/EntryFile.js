import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = ({ inData }) => {
    BuildBsTable({ inData })
};

export { StartFunc };