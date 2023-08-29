require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerPartials(path.join(__dirname, 'views', 'partials')); // otra forma pero se debe importar 
// const path = require('path')

//* Middleware// funcion intermedia que se ejecuta antes
//* Servir contenido estatico

app.use( express.static('public') );

//* Si no se define un patch toma la raiz, los archivos estaticos tienen mas peso que lo que se
//* envia en el send, si se coloca una ruta en el get tomara el archivo que este en esa ruta,
//* Si queremos especificar un archivo de ruta usamos el sendFile


//Esto no se ejecuta porque el middleware ya esttablecio el archivo en '/'
// app.get('/', function (req, res) {
//   res.send('Home-Page')
// })

//? Renderizando el HBS
app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Kevin Baca',
    titulo: 'Curso Node'
  });
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Kevin Baca',
    titulo: 'Curso Node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Kevin Baca',
    titulo: 'Curso Node'
  })
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })










//* se pone dificil cuando se tenga que analizar las diferentes rutas y peticiones que vengan en la request
//* y ahi es donde Express brilla porque es muy fuerte y facil trabajar y escalar con el como tener un
//* web server y rest server
