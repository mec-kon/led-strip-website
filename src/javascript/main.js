var config;
var current_mode;


loadSiteContent('one_color.html');

loadJSON('config.json', function(response) {
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
    let request = new XMLHttpRequest();
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


function loadJSON(url, callback) {

    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.readyState == 4 && request.status == "200") {
            callback(request.responseText);
        }
    };
    request.send(null);
}

function loadSiteContent(url) {

    if(current_mode != url){
        $('#banner').load(url, function(){
            $.getScript('colorpicker/js/jquery.wheelcolorpicker-3.0.5.min.js');
            if(url == "one_color.html"){
                $.getScript('javascript/one_color.js');
            }
            else if (url == "fade.html"){
                $.getScript('javascript/fade.js');
            }
            else if (url == "changing_colors.html"){
                $.getScript('javascript/changing_colors.js');
            }
            else if (url == "stroboscope.html"){
                $.getScript('javascript/stroboscope.js');
            }
            else{
                $.getScript('javascript/settings.js');
            }
        });
        current_mode = url
    }
}