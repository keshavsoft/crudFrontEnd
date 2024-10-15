import { StartFunc as jsFiles } from "./jsFiles.js";

const StartFunc = async ({ inSrcPath }) => {
    await jsFiles({ inSrcPath });
};

export { StartFunc };
