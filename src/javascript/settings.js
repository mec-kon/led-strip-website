//document.getElementById("deviceNameSettings").value = deviceConfig["devices"][0]["name"];
//document.getElementById("devicePortSettings").value = deviceConfig["devices"][0]["port"];
//document.getElementById("deviceAddressSettings").value = deviceConfig["devices"][0]["ipAddress"];
let numberOfDevicesWithAddedDevices = (deviceConfig["devices"]).length;
loadDevices(deviceConfig["devices"]);
document.getElementById("websitePortSettings").value = websiteConfig["port"];

function loadDevices(array) {
    let div = document.createElement('div');

    for(let i = 1; i <= array.length; i++) {
        let header = document.createElement('h2');
        header.appendChild(document.createTextNode("Device " + i + ":"));
        div.appendChild(header);
        div.appendChild(makeDoubleDiv("name", i, deviceConfig["devices"][i-1]["name"]));
        div.appendChild(makeDoubleDiv("port", i, deviceConfig["devices"][i-1]["port"]));
        div.appendChild(makeDoubleDiv("ipAddress", i, deviceConfig["devices"][i-1]["ipAddress"]));

    }

    document.getElementById('devicesDiv').appendChild(div);
}

function makeDoubleDiv(type, i, value) {
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
    input.value = value;
    input.onfocus = "this.value=''";
    
    let label = document.createElement('label');
    label.htmlFor = id;

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

    for(let i = 1; i <= (deviceConfig["devices"]).length; i++){

        data["devices"][i-1]["name"] = document.getElementById("deviceSettings" + i + "name").value;
        data["devices"][i-1]["port"] = document.getElementById("deviceSettings" + i + "port").value;
        data["devices"][i-1]["ipAddress"] = document.getElementById("deviceSettings" + i + "ipAddress").value;
    }
    for(let i = (deviceConfig["devices"]).length + 1; i <= numberOfDevicesWithAddedDevices; i++ ){
        console.log(i);
        let array = {"name": document.getElementById("deviceSettings" + i + "name").value,
            "port": document.getElementById("deviceSettings" + i + "port").value,
            "ipAddress": document.getElementById("deviceSettings" + i + "ipAddress").value
        };
        data["devices"].push(array);


    }

    postToJson(data, "deviceConfig.json", location.hostname, websiteConfig["port"]);

    //deep copy
    deviceConfig = jQuery.extend(true, {}, data);
}

function deviceResetSettings() {

    while(document.getElementById('devicesDiv').firstChild){
        document.getElementById('devicesDiv').removeChild(document.getElementById('devicesDiv').firstChild);
    }
    loadDevices(deviceConfig["devices"]);
}

function deviceAddDevice() {
    let div = document.createElement('div');

    let header = document.createElement('h2');
    header.appendChild(document.createTextNode("Device " + (numberOfDevicesWithAddedDevices + 1) + ":"));
    div.appendChild(header);
    div.appendChild(makeDoubleDiv("name", numberOfDevicesWithAddedDevices + 1, "new name"));
    div.appendChild(makeDoubleDiv("port", numberOfDevicesWithAddedDevices + 1, "new ip"));
    div.appendChild(makeDoubleDiv("ipAddress", numberOfDevicesWithAddedDevices + 1, "new port"));

    document.getElementById('devicesDiv').appendChild(div);

    numberOfDevicesWithAddedDevices++;
}

function websiteSaveSettings() {
    //deep copy
    let data = jQuery.extend(true, {}, websiteConfig);

    data["port"] = Number(document.getElementById('websitePortSettings').value);
    postToJson(data, "websiteConfig.json", location.hostname, websiteConfig["port"]);

    //deep copy
    websiteConfig = jQuery.extend(true, {}, data);
}

function websiteResetSettingsField() {
    document.getElementById("websitePortSettings").value = websiteConfig["port"];

}
