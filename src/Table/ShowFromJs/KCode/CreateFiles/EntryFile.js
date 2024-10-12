import { StartFunc as jsFiles } from "./jsFiles.js";

const StartFunc = ({ inSrcPath, inSourceFolderName }) => {
    jsFiles({ inSrcPath, inSourceFolderName });
};

export { StartFunc };
