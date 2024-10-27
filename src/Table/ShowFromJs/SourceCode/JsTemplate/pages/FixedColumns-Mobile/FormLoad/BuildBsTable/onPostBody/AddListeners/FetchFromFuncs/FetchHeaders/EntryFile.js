import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let StudentName = document.getElementById("StudentName").value;
    let Mobile = document.getElementById("Mobile").value;

    KeysJson.body = JSON.stringify({
        StudentName: StudentName,
        Mobile: Mobile
    });

    return KeysJson;
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(value);
        } else {
            serializedData[name] = value;
        }
    }

    return serializedData;
};

export { StartFunc }