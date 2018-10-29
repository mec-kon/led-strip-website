document.getElementById("portSettings").value = config["devices"][0]["port"];
document.getElementById("addressSettings").value = config["devices"][0]["ipAddress"];

function saveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, config);
    data["devices"][0]["port"] = document.getElementById('portSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('addressSettings').value;

    postToJson(data, "serverConfig.json");
}