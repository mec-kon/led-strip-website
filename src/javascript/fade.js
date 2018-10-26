function setColorsAndTimeFade() {
    let data = {};
    let color_array = [];

    for (let i = 0; i < maxNumberOfColors; i++) {
        let color = {};
        let colorString = $('#colorInputFade_' + i).wheelColorPicker('getValue', 'rgb');
        let colorAsStringArray =  getColor(colorString);
        color.color_red = Number(colorAsStringArray[0]);
        color.color_green = Number(colorAsStringArray[1]);
        color.color_blue = Number(colorAsStringArray[2]);

        color_array[i] = color;
    }
    data.color_array = color_array;
    data.mode = "fade";
    data.number_of_colors = maxNumberOfColors;
    data.time = Number(document.getElementById('timeFade').value);
    postToJson(data, "colors.json");
}