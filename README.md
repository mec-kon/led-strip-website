led-strip-website
====================================

This is a website that allows you to control a led strip connected to a Raspberry Pi or ESP32 microcontroller.

![](demo/led_strip_website.png)


Modes
--------

Three different modes are currently available.
* The one color mode allows you to select a simple color.
* The fade mode can be used to smoothly transition inbetween several selected colors. of the LED strip moves.
* The changing colors mode switches between all selected colors.

Demo
--------

Try out a demo <a href="https://mec-kon.github.io/led-strip-website/src/" target="_blank">here</a>


Download and install
--------

### Raspberry Pi
The easiest way to run the website is to use my self-programmed [server](https://github.com/mec-kon/led-strip-server), 
as it not only hosts the website, but also controls the LED strip.
This project is already included in my [server](https://github.com/mec-kon/led-strip-server) project as submodule.

[Check out my led-strip-server on github](https://github.com/mec-kon/led-strip-server)

### Espressif ESP32|ESP8266
If you want to control your LED strip with an ESP32|ESP8266, you still need a server to host the website.
You can do this as described above with my self-programmed server.

(The ESP32 and ESP8266 servers are currently under development)

[Check out my led-strip-server-esp32 on github](https://github.com/mec-kon/led-strip-server-esp32)
[Check out my led-strip-server-esp8266 on github](https://github.com/mec-kon/led-strip-server-esp8266)



Configuration
--------
You can set the port of the web page as well as the port and ip address 
of the device to which the led strip is connected.

You can do both on the website under settings.

By default, the ip address of the first device is set to the address of the server hosting the website.
This happens as long as the variable "ipAddress" in the deviceConfig.json file has the value "autoIP".

The device configuration is saved in the deviceConfig.json file, 
the configuration of the website is stored on the server that hosts the website.

Protocol
--------
Currently the data is transferred from the web page to the led strip with a http post as a json file.
Later a transmission via the mqtt protocol should also be possible.


Credits
--------

Special thanks to Fajar Chandra
for his great [colorpicker](https://github.com/fujaru/jquery-wheelcolorpicker) and to
[html5up](https://html5up.net/) for the html design.

Licences:
--------

* [colorpicker](https://github.com/fujaru/jquery-wheelcolorpicker/blob/master/LICENSE)
* [html5up](https://html5up.net/license)
* [gnu license](https://github.com/mec-kon/led-strip-website/blob/master/GNU-LICENSE)
* [mit license](https://github.com/mec-kon/led-strip-website/blob/master/MIT-LICENSE)


Pull requests
--------

Pull requests are always welcome !
