//importa el .env


 
//const { errorMonitor } = require("events");
//Se instancia el express
const express = require('express');
//se importa la lib del path
const path = require('path');
require('dotenv').config();
const app = express();
 

 
//se crea el servidor node
const server = require("http").createServer(app);
 
 
//se importa el socket.io
module.exports.io = require("socket.io")(server);


require('./sockets/socket');



//path publico
const publicPath = path.resolve(__dirname, 'public' );
app.use(express.static(publicPath));
 
 
//listen server in port
server.listen(process.env.PORT, (err)=>{
    if(err)throw new Error(err);
    console.log('Servidor corriendo en puerto!!', process.env.PORT);
 });
 
 