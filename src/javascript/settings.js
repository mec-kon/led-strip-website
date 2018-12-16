document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];

document.getElementById("websitePortSettings").value = websiteConfig["port"];


function deviceSaveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, deviceConfig);
    data["devices"][0]["port"] = document.getElementById('devicePortSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('deviceAddressSettings').value;

    postToJson(data, "deviceConfig.json", location.hostname, location.port);
}

function deviceResetSettingsField() {
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
