//requireds
// el nombre FS puede cambiar
//PERO EL REQUIRE NO
//const fs = require('fs'); // -> es propio de node
//const fs = require('express'); // -> son paquetes creados por 3eros
//const fs = require('./fs'); // -> son archivos propios creados que estan en algun lado del proyecto

/*
//FOR CREADO POR MI
for (let i = 1; i <= 10; i++) {
    let base = 2;
    let resultado = base * i;

    console.log(`${ base} * ${ i } = ${resultado}`);
}
//FOR POR EL PROFESOR
let base = 2;
for (let i = 1; i <= 10; i++) {

    console.log(`${ base} * ${ i } = ${base * i}`);
}

let base = 3;
let data = ''; // ->se inicializa a un string vacio
for (let i = 1; i <= 10; i++) {
    // el += es para concatenar 
    data += `${ base} * ${ i } = ${base * i} \n`; //-> para hacer el salto de linea se hace el \n
}

//fs.writeFile('tabla-2.txt', data, (err) => {  //esta linea el nombre del archivo es fijo
fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
    //para que el archivo ser guarde en una direccion el nombre de este va antes un con ./NOMBRE-ARCHIVO/tabla
    if (err) throw err;

    console.log(`el archivo tabla ${base}.txt ha sido guardado!`);
});
*/
//cuando no lleva el ./ es un paquete
const argv = require('./config/yargs').argv;


// después de un let o const si vienen { } es una destructuracion

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // -> EL _ HACE REFERENCIA AL ARREGLO

switch (comando) {

    case 'lista':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

//let argv2 = process.argv;
//console.log(argv.base);
//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1] //--> split para separa elementos para convertir un string a un arreglo