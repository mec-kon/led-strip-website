document.getElementById("portSettings").value = websiteConfig["devices"][0]["port"];
document.getElementById("addressSettings").value = websiteConfig["devices"][0]["ipAddress"];

function saveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, websiteConfig);
    data["devices"][0]["port"] = document.getElementById('portSettings').value;
    data["devices"][0]["ipAddress"] = document.getElementById('addressSettings').value;

    postToJson(data, "websiteConfig.json");
}