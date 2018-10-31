document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];

document.getElementById("websitePortSettings").value = websiteConfig["port"];


function deviceSaveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, deviceConfig);
    data["devices"][0]["port"] = document.getElementById('portSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('addressSettings').value;

    postToJson(data, "deviceConfig.json");
}

function deviceResetSettingsField() {
    document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
    document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];
}

function websiteSaveSettings() {
    //deep copy
    let data = jQuery.extend(true, {}, websiteConfig);
    data["port"] = Number(document.getElementById('websitePortSettings').value);
}

function websiteResetSettingsField() {
    document.getElementById("websitePortSettings").value = websiteConfig["port"];

}
