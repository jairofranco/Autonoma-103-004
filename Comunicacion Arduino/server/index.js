//convertiremos el prograa, en un programa servidor, utilizaremos espres
// socket-io permite enviar los datos por e puerto serial
const express = require ('express');
const socketIo = require('socket.io');
const http = require('http')
const app = express(); //guarda toda la informacion adquirida
//creo una biblioteca que me permita enviar datos a todos los clientes. con socket.io puedo hacerlo
const server = http.createServer(app); //recibo un objeto del servidor donde lo guardo en la constante server
const io = socketIo.listen(server);
// 
app.get ('/' , (req, res, next ) => {
res.sendFile(__dirname + '/index.html');
});

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial =  new SerialPort('COM3', {
    baudRate:9600
 
});

mySerial.on('data',function(data) {
    dato=console.log(data.toString()); //convierte el dato serial en un string
     
});



mySerial.on('err',function (err){ //si surge un error envia un mensaje
    console.log(err.message);
});

server.listen(3000, () => {
    console.log('server on port', 3000);
})