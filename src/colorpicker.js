var xmlhttp = new XMLHttpRequest();

function turnOnOff() {
    
}

function setColor(){
    var colorString = $('#color-input').wheelColorPicker('getValue', 'rgb');

    colorString =colorString.replace("rgb(", "");
    colorString =colorString.replace(")", "");

    var colors = colorString.split(",");

    postToJson(colors[0], colors[1], colors[2])
}

function postToJson(red, green, blue) {

    var url = "http://localhost:9999/colors.json";

    var data = {};
    data.color_red = Number(red);
    data.color_green  = Number(green);
    data.color_blue = Number(blue);

    var json = JSON.stringify(data);

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlhttp.onload = function () {
        var data = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.readyState == 4 && xmlhttp.status == "201") {
            console.table(data);
        } else {
            console.error(data);
        }
    }
    xmlhttp.send(json);
    console.log(json)
}