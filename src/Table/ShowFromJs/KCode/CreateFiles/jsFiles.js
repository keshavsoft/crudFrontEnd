import fs from "fs";
import { StartFunc as alterConfig } from "./alterConfig.js";

import dotenv from 'dotenv';
dotenv.config();

const StartFunc = async ({ inSrcPath }) => {
    const root = `${inSrcPath}/Js`;

    if (fs.existsSync(root)) {
        fs.rmSync(root, { recursive: true });
        fs.mkdirSync(root);
    };

    fs.readdirSync(`${inSrcPath}/JsTemplate/pages`)
        .forEach(filename => {
            fs.cpSync(`${inSrcPath}/JsTemplate/pages/${filename}`, `${root}/pages/${filename}`, { recursive: true });
        });

    // let LocalConfigData = fs.readFileSync(`${inSrcPath}/Js/pages/Config.json`, "utf8");
    // let LocalConfigJsonData = JSON.parse(LocalConfigData);

    // LocalConfigJsonData.TableName = LocalTableName;
    // LocalConfigJsonData.StartUrl = LocalStartUrl;

    // let LocalConfigData = fs.readFileSync(`${inSrcPath}/Js/pages/Config.json`, "utf8");
    await alterConfig({ inSrcPath });
};

export { StartFunc };