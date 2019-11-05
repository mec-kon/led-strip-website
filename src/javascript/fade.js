function setColorsAndTimeFade() {
    stripLights = true;

    let data = {};
    let color_array = [];
    let numberOfColors = 0;

    for (let i = 0; i < maxNumberOfColors; i++) {
        let color = {};
        let colorString = $('#colorInputFade_' + i).wheelColorPicker('getValue', 'rgb');
        let colorAsStringArray =  getColor(colorString);
        color.color_red = Number(colorAsStringArray[0]);
        color.color_green = Number(colorAsStringArray[1]);
        color.color_blue = Number(colorAsStringArray[2]);

        if(color.color_red !== 255 || color.color_green !== 255 || color.color_blue !== 255 ){
            color_array[numberOfColors] = color;
            numberOfColors++;
        }
    }
    data.color_array = color_array;
    data.mode = "fade";
    data.number_of_colors = numberOfColors;
    data.time = Number(document.getElementById('timeFade').value);
    //postToJson(data, "colors.json", deviceConfig["devices"][0]["ipAddress"], deviceConfig["devices"][0]["port"]);
    postToSelected(data, "colors.json")
}