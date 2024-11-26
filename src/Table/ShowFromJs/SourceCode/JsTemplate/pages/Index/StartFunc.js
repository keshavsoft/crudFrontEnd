const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        // jFLocalLeftSide();
        sales_func(16);
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

function sales_func(val) {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        const tbody = document.querySelector(".main .section .row");
        const template = document.querySelector("#sales_temp");
        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let h = clone.querySelector(".ps-3 h6");
        h.innerText = val;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    }
};

StartFunc();