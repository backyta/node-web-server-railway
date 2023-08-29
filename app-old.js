
const http = require('http');

http.createServer( (req, res) =>{

    // console.log(req);

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    const persona = {
        id: 1,
        name: 'Kevin'
    }

    // res.write( 'id, nombre\n' );
    // res.write( '1, kevin\n' );
    // res.write( '2, brian\n' );
    // res.write( '3, luisa\n' );

    res.write( 'Hola mundo' ) // convierte el objeto en una cadena de texto o JSON valido, como oo que sale en el navegador cuando lo lee
    res.end();
    
})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080 );







//* req es cualquie solicitud que hace el cliente, navegador o celular, etc, y response es lo que el servidor
//* le responde.


//? Enviar JSON

//* cuando se envia una respuesta siempre es en formato string, en la cabecera se puede mandar en formato
//* JSON, este tipo de formato es mas facil de manejar por su similitud en objetos de js, cuand
//* se hace una solicitud del front mediante fetch, con el metodo response => responde.json()
//* se convierte en un objeto JS el json que se devuelve en un promesa para poder trabajar con eso
//* de aqui ya se tiene acceso a toods sus propiedades como objeto.
