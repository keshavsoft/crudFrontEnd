import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom.js";

const StartFunc = () => {
    StartFuncFormLoad();
    
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        ShowOnDom();
        // jFLocalAdd();
    };
};

const jFLocalAdd = () => {
    let jVarLocalRecentActivityId = document.getElementById('RecentActivityId');

    jFLocalToInputRecentActivityId("");

    let jVarLocalTemplateFromHtml = document.getElementById('TemplateForActivityId');
    let clone = jVarLocalTemplateFromHtml.content.cloneNode('true');
    clone.querySelector(".activite-label").innerHTML = "aaa";
    clone.querySelector(".activity-content").innerHTML = "bbb";

    
    jVarLocalRecentActivityId.appendChild(clone);


    let jVarLocalTemplateFromHtml1 = document.getElementById('TemplateForActivityId');
    let clone1 = jVarLocalTemplateFromHtml.content.cloneNode('true');

    jVarLocalRecentActivityId.appendChild(clone1);
};

let jFLocalToInputRecentActivityId = (inValue) => {
    let jVarLocalHtmlId = 'RecentActivityId';
    let jVarLocalRecentActivityId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRecentActivityId === null === false) {
        jVarLocalRecentActivityId.innerHTML = inValue;
    };
};

StartFunc();