var xmlhttp = new XMLHttpRequest();
var maxNumberOfColors = 6;


function getColor(colorString) {
    colorString = colorString.replace("rgb(", "");
    colorString = colorString.replace(")", "");

    var colors = colorString.split(",");

    return colors;
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