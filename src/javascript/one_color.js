if (stripLights) {
    document.getElementById("onOffOneColor").innerHTML = "deactivate"
}
else {
    document.getElementById("onOffOneColor").innerHTML = "activate"
}


function turnOnOff() {
    if (stripLights) {
        turnOFF();
    }
    else {
        turnON();
    }
}


function turnOFF() {
    document.getElementById("onOffOneColor").innerHTML = "activate";
    stripLights = false;

    let data = {};
    let color = {};
    let color_array = [];

    color.color_red = 0;
    color.color_green = 0;
    color.color_blue = 0;
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data, "colors.json");
}

function turnON() {
    document.getElementById("onOffOneColor").innerHTML = "deactivate";
    stripLights = true;

    let data = {};
    let color = {};
    let color_array = [];

    color.color_red = 255;
    color.color_green = 255;
    color.color_blue = 255;
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data, "colors.json");
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

    postToJson(data, "colors.json");
}
