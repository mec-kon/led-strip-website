var xmlhttp = new XMLHttpRequest();
var maxNumberOfColors = 5;

function turnOnOff() {

}

function setColor() {
    var colorString = $('#color-input').wheelColorPicker('getValue', 'rgb');

    colorString = colorString.replace("rgb(", "");
    colorString = colorString.replace(")", "");

    var colors = colorString.split(",");

    postToJsonOneColor(colors[0], colors[1], colors[2])
}

function postToJsonOneColor(red, green, blue) {
    var data = {};
    var color = {};
    color.color_red = Number(red);
    color.color_green = Number(green);
    color.color_blue = Number(blue);

    var color_array = [];
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data)
}

function postToJson(data) {

    var url = "http://localhost:9999/colors.json";

    var json = JSON.stringify(data);

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xmlhttp.onload = function () {
        var data = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.readyState == 4 && xmlhttp.status == "201") {
            console.table(data);
        } else {
            console.error(data);
        }
    }
    xmlhttp.send(json);
    console.log(json);
}