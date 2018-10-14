var config;

loadJSON(function(response) {
    // Parse JSON string into object
    config = JSON.parse(response);
});

let maxNumberOfColors = 6;

function getColor(colorString) {
    colorString = colorString.replace("rgb(", "");
    colorString = colorString.replace(")", "");

    let colors = colorString.split(",");

    return colors;
}

function postToJson(data) {
    var request = new XMLHttpRequest();
    let url = "http://" + config["devices"][0]["ipAddress"] + ":" + config["devices"][0]["port"] +"/colors.json";
    let json = JSON.stringify(data);

    request.open("POST", url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == "201") {
            console.table(data);
        } else {
            console.error(data);
        }
    }
    request.send(json);
    console.log(url);
}


function loadJSON(callback) {

    var request = new XMLHttpRequest();
    request.open('GET', 'config.json', true);
    request.onload = function () {
        if (request.readyState == 4 && request.status == "200") {
            callback(request.responseText);
        }
    };
    request.send(null);
}

function loadSiteContent(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function() {
        if (request.readyState == 4 && request.status == "200") {
            document.getElementById("banner").innerHTML = request.responseText;
        }
    };
    request.send();
}