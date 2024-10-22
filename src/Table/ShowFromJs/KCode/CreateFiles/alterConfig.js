import { JSONFilePreset } from 'lowdb/node'

import dotenv from 'dotenv';
dotenv.config();

const CommonTableName = process.env.TableName;
const CommonStartUrl = process.env.StartUrl;

const StartFunc = async ({ inSrcPath }) => {
    const defaultData = { error: "" };
    const LocalFilePath = `${inSrcPath}/Js/pages/Config.json`;
    console.log("LocalFilePath : ", LocalFilePath);

    const db = await JSONFilePreset(LocalFilePath, defaultData);
    db.read();

    console.log("-------------- : ", db.data);
    db.data.StartUrl = CommonStartUrl;
    db.data.TableName = CommonTableName;

    await db.write();
};

export { StartFunc };