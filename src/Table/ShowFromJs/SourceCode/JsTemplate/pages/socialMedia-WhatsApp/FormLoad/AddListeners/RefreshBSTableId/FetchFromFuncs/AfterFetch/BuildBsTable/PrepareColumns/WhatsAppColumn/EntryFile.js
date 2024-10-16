const StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

const jVarLocalFormatterFunc = (value, row, index) => {
    console.log("nnnnnnnnnnnn : ", row);

    const jVarLocalMessageToSend = "Greetings from KeshavSoft";
    let jVarLocalApiLink = "";

    if ("Mobile" in row) {
        let jVarLocalMobile = row.Mobile;
        let jVarLocalMobileToApi = "";

        if (Number.isInteger(row.Mobile)) {
            jVarLocalMobileToApi.jVarLocalMobile.toString();
        } else {
            if (row.Mobile.indexOf("+") >= 0) {
                jVarLocalMobileToApi = row.Mobile.trim().replace("+", "");
            } else {
                jVarLocalMobileToApi = `91${row.Mobile.trim()}`;
            };
        };

        jVarLocalApiLink = `https://api.whatsapp.com/send?phone=${jVarLocalMobileToApi}&text=${jVarLocalMessageToSend}&type=phone_number&app_absent=0`;
    };

    const jVarLocalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    return `<a href="${jVarLocalApiLink}" target="_blank">${jVarLocalSvg} ${row.Mobile}</a>`;
};

export { StartFunc };