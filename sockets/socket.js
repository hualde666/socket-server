const { io } = require('../index.js');
const Banda = require('../modelos/band.js');
const Bandas = require('../modelos/bands.js');
const bandas =new  Bandas();

bandas.addBanda(new Banda('Queen'));
bandas.addBanda(new Banda('Kiss'));
bandas.addBanda(new Banda('Caramelos'));
bandas.addBanda(new Banda('Super Tram'));



//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.emit('bandas-activas',bandas.getBandas());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // votar por una banda id
    client.on('voto-banda',(payload)=>{
      bandas.votoAbanda(payload.id);
     io.emit('bandas-activas',bandas.getBandas());

     
    });
       
    // agregar una banda name
    client.on('agrega-banda',(payload)=>{
        bandas.addBanda(new Banda(payload.name));
       io.emit('bandas-activas',bandas.getBandas());
    });

    
  // borrar una banda name
       
    client.on('borrar-banda',(payload)=>{
        bandas.borrarBanda(payload.id);
       io.emit('bandas-activas',bandas.getBandas());
    });


    // emitir un mensaje >> mensaje
    client.on('mensaje', ( payload ) => {
        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
    });


});


