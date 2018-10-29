let deviceConfig;
let current_mode;

let request = new XMLHttpRequest();

loadSiteContent('one_color.html');

loadJSON('deviceConfig.json', function(response) {
    // Parse JSON string into object
    deviceConfig = response;
});

let maxNumberOfColors = 6;

function getColor(colorString) {
    colorString = colorString.replace("rgb(", "");
    colorString = colorString.replace(")", "");

    return colorString.split(",");
}

function postToJson(data, filename) {
    let url = "http://" + deviceConfig["devices"][0]["ipAddress"] + ":" + deviceConfig["devices"][0]["port"] +"/" + filename;
    let json = JSON.stringify(data);

    request.open("POST", url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = function () {
        if (!request.readyState == 4 || !request.status == "200") {
            console.error("posting error");
        }
    };
    request.send(json);
}


function loadJSON(url, callback) {
    request.open('GET', url, true);
    request.onload = function () {
        if (request.readyState == 4 && request.status == "200") {
            callback(JSON.parse(request.responseText));
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