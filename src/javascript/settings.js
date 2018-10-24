document.getElementById("portSettings").value = config["devices"][0]["port"];
document.getElementById("addressSettings").value = config["devices"][0]["ipAddress"];

function saveSettings() {
    let data =  config;
    data["devices"][0]["port"] = document.getElementById('portSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('addressSettings').value;

    postToJson(data.toString(), )
}