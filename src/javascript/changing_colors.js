function setColorsAndTimeChangingColors() {
    let data = {};
    let color_array = [];
    let numberOfColors = 0;

    for (let i = 0; i < maxNumberOfColors; i++) {
        let color = {};
        let colorString = $('#colorInputChangingColors_' + i).wheelColorPicker('getValue', 'rgb');
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
    data.mode = "changingColors";
    data.number_of_colors = numberOfColors;
    data.time = Number(document.getElementById('timeChangingColors').value);
    postToJson(data, "colors.json");
}