// base node + wekinator integration used from https://github.com/noisyneuron/wekOsc

/// WEB SERVER VARIABLES ///

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

/// WS AND OSC VARIABLES ///

var socket = require('socket.io');
var io = socket(server);

/// SERVE WEBPAGE ///
app.use(express.static('Public'));

// var osc = require('osc-min');
var dgram = require('dgram');
// var udp = dgram.createSocket('udp4');

var osc = require('node-osc');

/// PORTS AND URLS ///

// var remoteIP = 'http://921ac5f8a9fb.ngrok.io';
var remoteIP = '127.0.0.1';
var webpagePort = 3000;
var outputPort = 12000;

var client = new osc.Client(remoteIP, outputPort);

console.log("IP Address: " + remoteIP);
console.log("OSC output port: " + outputPort);
console.log("Webpage port: " + webpagePort);

/// SENDS OSC ///

inputDeviceData = function(x, y) {
  client.send('/0/trigger', x, y);
  // var buf;
  // buf = osc.toBuffer({
  //   address: "/0/trigger",
  //   args: [
  //     { type: "float", value: x },
  //     { type: "float", value: y },
  //     { type: "float", value: Math.random() }
  //   ]
  // });

  // return udp.send(buf, 0, buf.length, inputPort, remoteIP);
};

/// RECEIVE WS AND TRIGGER OSC SEND ///

io.on('connection', function (socket) {
  console.log('new connection ' + socket.id);
  socket.emit('ping', "WebSocket link works");

  socket.on('inputData', function (data) {
    // console.log(data);
    inputDeviceData(data.x, data.y);
  });
});

// app.get('/', function(req, res,next) {
//   res.sendFile(__dirname + '/index.html');
// });

server.listen(webpagePort, '0.0.0.0');
