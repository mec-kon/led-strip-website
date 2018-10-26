function turnOnOff() {

}

function setColor() {
    let data = {};
    let color = {};
    let colorString = $('#colorpickerOnecolor').wheelColorPicker('getValue', 'rgb');
    let colorAsStringArray =  getColor(colorString);

    color.color_red = Number(colorAsStringArray[0]);
    color.color_green = Number(colorAsStringArray[1]);
    color.color_blue = Number(colorAsStringArray[2]);

    let color_array = [];
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data, "colors.json");
}
