//document.getElementById("deviceNameSettings").value = deviceConfig["devices"][0]["name"];
//document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
//document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];
loadDevices();
document.getElementById("websitePortSettings").value = websiteConfig["port"];

function loadDevices() {
    let devices = document.getElementById("devicesDiv");
    let htmlCode = "";
    for(let i=0; i<3; i++) {
        htmlCode += "\n" +
            "    \n" +
            "\n" +
            "    <h2>device " +i +":</h2>\n" +
            "    \n" +
            "    <div class=\"outer_settings_div\">\n" +
            "        <div class=\"inner_settings_div\">\n" +
            "            <h3>device name:</h3>\n" +
            "        </div>\n" +
            "        <div class=\"inner_settings_div\">\n" +
            "            <label for=\"deviceNameSettings\">\n" +
            "                <input id=\"deviceNameSettings\" type=\"text\" value=\"\" onfocus=\"this.value=''\">\n" +
            "            </label>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    \n" +
            "    <div class=\"outer_settings_div\">\n" +
            "        <div class=\"inner_settings_div\">\n" +
            "            <h3>device port:</h3>\n" +
            "        </div>\n" +
            "        <div class=\"inner_settings_div\">\n" +
            "            <label for=\"devicePortSettings\">\n" +
            "                <input id=\"devicePortSettings\" type=\"text\" value=\"\" onfocus=\"this.value=''\">\n" +
            "            </label>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"outer_settings_div\">\n" +
            "        <div class=\"inner_settings_div\">\n" +
            "            <h3>ip address:</h3>\n" +
            "        </div>\n" +
            "        <div class=\"inner_settings_div\">\n" +
            "            <label for=\"deviceAddressSettings\">\n" +
            "                <input type=\"text\" id=\"deviceAddressSettings\" value=\"\" onfocus=\"this.value=''\">\n" +
            "            </label>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "\n" +
            "    ";
    }
    devices.innerHTML = htmlCode;
}

function deviceSaveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, deviceConfig);
    data["devices"][0]["name"] = document.getElementById('deviceNameSettings').value;
    data["devices"][0]["port"] = document.getElementById('devicePortSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('deviceAddressSettings').value;

    postToJson(data, "deviceConfig.json", location.hostname, location.port);
}

function deviceResetSettingsField() {
    document.getElementById("deviceNameSettings").value = deviceConfig["devices"][0]["name"];
    document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
    document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];
}

function websiteSaveSettings() {
    //deep copy
    let data = jQuery.extend(true, {}, websiteConfig);
    data["port"] = Number(document.getElementById('websitePortSettings').value);

    postToJson(data, "websiteConfig.json", location.hostname, location.port);
}

function websiteResetSettingsField() {
    document.getElementById("websitePortSettings").value = websiteConfig["port"];

}
