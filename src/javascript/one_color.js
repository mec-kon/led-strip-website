if (stripLights) {
    document.getElementById("onOffOneColor").innerHTML = "deactivate"
}
else {
    document.getElementById("onOffOneColor").innerHTML = "activate"
}


function turnOnOff() {
    if (stripLights) {
        document.getElementById("onOffOneColor").innerHTML = "activate";
        turnOFF();
    }
    else {
        document.getElementById("onOffOneColor").innerHTML = "deactivate";
        turnON();
    }
}


function setColor() {
    document.getElementById("onOffOneColor").innerHTML = "deactivate";
    stripLights = true;

    let data = {};
    let color = {};
    let colorString = $('#colorpickerOnecolor').wheelColorPicker('getValue', 'rgb');
    let colorAsStringArray = getColor(colorString);
    let color_array = [];

    color.color_red = Number(colorAsStringArray[0]);
    color.color_green = Number(colorAsStringArray[1]);
    color.color_blue = Number(colorAsStringArray[2]);
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    //postToJson(data, "colors.json", deviceConfig["devices"][0]["ipAddress"], deviceConfig["devices"][0]["port"]);
    postToSelected(data, "colors.json")
}
