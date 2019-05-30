//document.getElementById("deviceNameSettings").value = deviceConfig["devices"][0]["name"];
//document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
//document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];
loadDevices(deviceConfig['devices']);
document.getElementById("websitePortSettings").value = websiteConfig["port"];

function loadDevices(array) {
    let div = document.createElement('div');

    for(let i = 1; i <= array.length; i++) {
        let header = document.createElement('h2');
        header.appendChild(document.createTextNode("Device " + i + ":"));
        div.appendChild(header);
        div.appendChild(makeDoubleDiv("name", i));
        div.appendChild(makeDoubleDiv("port", i));
        div.appendChild(makeDoubleDiv("ipAddress", i));

    }

    document.getElementById('devicesDiv').appendChild(div);
}

function makeDoubleDiv(type, i) {
    let id = "deviceSettings" + i + type;

    let divOuterSettings = document.createElement("div");
    divOuterSettings.className = "outer_settings_div";

    let divIS1 = document.createElement("div");
    divIS1.className = "inner_settings_div";

    let header = document.createElement("h3");
    header.appendChild(document.createTextNode("device " + type + ":"));
    
    let divIS2 = document.createElement("div");
    divIS2.className = "inner_settings_div";

    let input = document.createElement('input');
    input.type = "text";
    input.id = id;
    input.value = deviceConfig['devices'][i-1][type];
    input.onfocus = "this.value=''"
    
    let label = document.createElement('label')
    label.htmlFor = id

    divIS1.appendChild(header);
    label.appendChild(input);
    divIS2.appendChild(label);

    divOuterSettings.appendChild(divIS1);
    divOuterSettings.appendChild(divIS2);

    return divOuterSettings
}

function deviceSaveSettings() {

    //deep copy
    let data = jQuery.extend(true, {}, deviceConfig);
    for(let i = 1; i <=  deviceConfig["devices"].length; i++){
        data["devices"][i-1]["name"] = document.getElementById("deviceSettings" + i + "name").value;
        data["devices"][i-1]["port"] = document.getElementById("deviceSettings" + i + "port").value;
        data["devices"][i-1]["ipAddress"] = document.getElementById("deviceSettings" + i + "ipAddress").value;
    }
    postToJson(data, "deviceConfig.json", location.hostname, location.port);
}

function deviceResetSettingsField() {
    for(let i = 1; i <=  deviceConfig["devices"].length; i++){
        document.getElementById("deviceSettings" + i + "name").value = deviceConfig["devices"][i-1]["name"];
        document.getElementById("deviceSettings" + i + "port").value = deviceConfig["devices"][i-1]["port"];
        document.getElementById("deviceSettings" + i + "ipAddress").value = deviceConfig["devices"][i-1]["ipAddress"];
    }
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
