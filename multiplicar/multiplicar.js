const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');


let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        // el += es para concatenar 
        console.log(`${ base} * ${ i } = ${base * i} `); //-> para hacer el salto de linea se hace el \n
    }

}




let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un número  `);
            return;
        }

        let data = ''; // ->se inicializa a un string vacio

        for (let i = 1; i <= limite; i++) {
            // el += es para concatenar 
            data += `${ base} * ${ i } = ${base * i} \n`; //-> para hacer el salto de linea se hace el \n
        }

        //fs.writeFile('tabla-2.txt', data, (err) => {  //esta linea el nombre del archivo es fijo
        fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
            //para que el archivo ser guarde en una direccion el nombre de este va antes un con ./NOMBRE-ARCHIVO/tabla
            if (err)
                reject(err)
            else
                resolve(`tabla ${base}.txt`)

        });

    })
}


// ACA VAN TODOS LOS QUE NECESITO EXPORTAR EN CASO DE SER MUCHOS SE SEPARA CON UNA COMA
module.exports = {
    crearArchivo,
    listarTabla
}