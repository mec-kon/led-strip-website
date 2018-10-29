document.getElementById("portSettings").value = deviceConfig["devices"][0]["port"];
document.getElementById("addressSettings").value = deviceConfig["devices"][0]["ipAddress"];

function saveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, deviceConfig);
    data["devices"][0]["port"] = document.getElementById('portSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('addressSettings').value;

    postToJson(data, "deviceConfig.json");
}