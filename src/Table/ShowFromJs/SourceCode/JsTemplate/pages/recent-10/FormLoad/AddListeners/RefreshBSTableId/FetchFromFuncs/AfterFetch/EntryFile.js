import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = ({ inData }) => {
    // BuildBsTable({ inData });
    let jVarLocalRecentActivityId = document.getElementById('RecentActivityId');

    jFLocalToInputRecentActivityId("");

    inData.data.slice(0,5).forEach(element => {
        let jVarLocalTemplateFromHtml = document.getElementById('TemplateForActivityId');
        let clone = jVarLocalTemplateFromHtml.content.cloneNode('true');
        clone.querySelector(".activite-label").innerHTML = element.Mobile;
        clone.querySelector(".activity-content").innerHTML = element.StudentName;

        jVarLocalRecentActivityId.appendChild(clone);
    });
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

export { StartFunc };