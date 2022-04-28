//inicializamos npm, instalamos el paquete de express, el paquete ejs y
//el paquete nodemon desde la línea de comandos, ahora copiamos el contenido
//de la anterior practica.

const express= require('express'); //Se inyecta la dependencia
let app= express();
let PORT = process.env.port || 3000; //Se define el puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //El contenido estático

app.set('view engine', 'ejs');
//Con esta línea nuestra app de express utiliza EJS como un motor de vistas.
//Para usarlo debemos crear un directorio llamado 'views' en el que las vistas
//tengan la extensión '.ejs' en lugar de 'html'.


app.get('/', (req, res) =>{
    res.send(`<!DOCTYPE html> <html lang "en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body></html>`)
});

app.get('/person/:id', (req, res)=>{
    res.render('person', {ID: req.params.id, Msg: req.query.msg, Times: req.query.times});
});
//Ahora usaremos render en lugar de send para que lo renderice el motor de vistas
//además le pasaremos 2 parametros, la vista que va a renderizarse y los parámetros que recibe,
//los cuales en este caso son 2, al ID le pasamos el valor de la ruta '/person/:id', y
//el de la query string express lo parsea mediante 'req.query'

//Es importante mencionar que en el archivo ejs, los nombres ID y Qstr deben ser exactamente
//iguales.
//Ahora recibe los parámetros Msg y Times, además del id

app.listen(PORT);
