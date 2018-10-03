function turnOnOff() {

}

function setColor() {
    var data = {};
    var color = {};
    var colorString = $('#color-input').wheelColorPicker('getValue', 'rgb');
    var colorAsStringArray =  getColor(colorString);

    color.color_red = Number(colorAsStringArray[0]);
    color.color_green = Number(colorAsStringArray[1]);
    color.color_blue = Number(colorAsStringArray[2]);

    var color_array = [];
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data)
}
