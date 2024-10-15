import { JSONFilePreset } from 'lowdb/node'

import dotenv from 'dotenv';
dotenv.config();

const CommonTableName = process.env.TableName;
const CommonStartUrl = process.env.StartUrl;

const StartFunc = async ({ inSrcPath }) => {
    const defaultData = { error: "" };
    const db = await JSONFilePreset(`${inSrcPath}/Js/pages/Config.json`, defaultData)

    db.data.StartUrl = "binV5Secured";
    db.data.TableName = CommonTableName;

    await db.write();
};

export { StartFunc };