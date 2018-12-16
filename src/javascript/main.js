let deviceConfig;
let websiteConfig;
let current_mode;
let stripLights = false;


loadSiteContent('one_color.html');

$.getJSON('deviceConfig.json', function(response){
    // Parse JSON string into object
    deviceConfig = response;
});

$.getJSON('websiteConfig.json', function(response){
    // Parse JSON string into object
    websiteConfig = response;
});

let maxNumberOfColors = 6;

function getColor(colorString) {
    colorString = colorString.replace("rgb(", "");
    colorString = colorString.replace(")", "");

    return colorString.split(",");
}

function postToJson(data, filename, ipAddress, port) {
    let url = "http://" + ipAddress + ":" + port +"/" + filename;
    let json = JSON.stringify(data);

    let request = $.ajax({
        type: 'POST',
        url: url,
        data : json,
        dataType: "json",
        contentType: "application/json",
        crossDomain: true,
        xhrFields: {
            withCredentials: false
        }
    });
    request.done(function(data){
        console.log(data);
    });
}



function loadSiteContent(url) {

    if(current_mode !== url){
        $("#banner").load(url, function(){
            $.getScript("colorpicker/js/jquery.wheelcolorpicker-3.0.5.min.js");
            if(url === "one_color.html"){
                $.getScript("javascript/one_color.js");
            }
            else if (url === "fade.html"){
                $.getScript("javascript/fade.js");
            }
            else if (url === "changing_colors.html"){
                $.getScript("javascript/changing_colors.js");
            }
            else if (url === "stroboscope.html"){
                $.getScript("javascript/stroboscope.js");
            }
            else{
                $.getScript("javascript/settings.js");
            }
        });
        current_mode = url
    }
}

function turnOFF() {
    stripLights = false;

    let data = {};
    let color = {};
    let color_array = [];

    color.color_red = 0;
    color.color_green = 0;
    color.color_blue = 0;
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data, "colors.json", deviceConfig["devices"][0]["ipAddress"], deviceConfig["devices"][0]["port"]);
}

function turnON() {
    stripLights = true;

    let data = {};
    let color = {};
    let color_array = [];

    color.color_red = 255;
    color.color_green = 255;
    color.color_blue = 255;
    color_array[0] = color;

    data.color_array = color_array;
    data.time = 0;
    data.mode = "oneColor";
    data.number_of_colors = 1;

    postToJson(data, "colors.json", deviceConfig["devices"][0]["ipAddress"], deviceConfig["devices"][0]["port"]);
}