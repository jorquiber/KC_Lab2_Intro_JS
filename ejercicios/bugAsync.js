/*
Ejercicio 4

Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos a
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.
*/

// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);
    return usuario;
}
const usuario = obtenerUsuario(1);
console.log("Usuario encontrado sin método asíncrono:",usuario);

// Solución 1: usando callback
function obtenerUsuarioCB(id, callback) {
    setTimeout(() => {
        if (id === 1) {
            let usuario = { id: 1, nombre: 'John Doe' };
            callback(null, usuario);
        } else {
            callback(new Error('No hay ningún usuario con el id '.concat(id)))
        }

    }, 2000);
}

const usuarioCB = obtenerUsuarioCB(1, (error, usuario) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Usuario encontrado usando callback:', usuario);
    }
}
);

// Solución 2: usando promesas
const obtenerUsuarioPromise = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                let usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            } else {
                reject(new Error('No hay ningún usuario con el id '.concat(id)))
            }
        }, 2000);
    })
};

const usuarioPromise = obtenerUsuarioPromise(1)
    .then(usuario => console.log('Usuario encontrado usando promise:', usuario))
    .catch(error => console.log(error));


// Solución 3: usando async y await
const obtenerUsuarioAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                let usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            } else {
                reject(new Error('No hay ningún usuario con el id '.concat(id)))
            }
        }, 2000);
    })
};


const mostrarUsuarioAsync = async () => {
    try {
        const usuarioAsync = await obtenerUsuarioAsync(1);
        console.log('Usuario encontrado usando async y await:', usuarioAsync)
    } catch (error) {
        console.log(error);
    }
};

mostrarUsuarioAsync();
