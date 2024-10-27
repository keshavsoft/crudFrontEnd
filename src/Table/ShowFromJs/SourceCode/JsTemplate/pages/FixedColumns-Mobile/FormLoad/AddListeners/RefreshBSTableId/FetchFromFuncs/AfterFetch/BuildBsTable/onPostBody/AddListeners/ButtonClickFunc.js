import { StartFunc as FetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    console.log("butoon clicked");
    FetchFromFuncs().then();
};

export { StartFunc }