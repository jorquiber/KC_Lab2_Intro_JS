/* Ejercicio 5: Catálogo Musical

Imagina que estás creando un sistema de gestión para un catálogo musical.
Cada canción tiene las siguientes propiedades:
- Nombre de la Canción
- Género
- Duración (en minutos)

Implementa un programa que permita realizar las siguientes operaciones:
- Agregar Canción: Permite al usuario ingresar información sobre una nueva canción y
agrégala al catálogo.
- Listar Canciones: Muestra en la consola la información detallada de todas las canciones
en el catálogo. Si el catálogo está vacío, imprime un mensaje indicando que no hay
canciones.
- Buscar Canciones por Género: Pide al usuario que ingrese un género y muestra en la
consola todas las canciones de ese género.
- Calcular Promedio de Duración: Calcula y muestra en la consola el promedio de la
duración de todas las canciones en el catálogo. (opcional)

*/

// Función para capitalizar strings: primera letra en mayúscula y resto de letras en minúsculas
const capitalizarPrimeraLetra = (frase) => {
    let fraseCapitalizada;
    switch (frase.length) {
        case 0: // caso string vacío
            fraseCapitalizada = frase;
            break;
        case 1: // caso 1 sola letra
            fraseCapitalizada = frase.toUpperCase();
            break;
        default: // caso por defecto: 2 o más letras
            fraseCapitalizada = frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase();
    }
    return fraseCapitalizada;
};

function crearCatalogo() {
    let catalogo = [];

    const agregarCancion = () => {
        // 1º prompt: solicitar nombre canción
        let nombreCancion = prompt('Introduzca nombre de la canción y pulsa botón "Aceptar" \nHaz click en el botón "Cancelar" si quiere cancelar');
        // Si el usuario ha pulsado "Cancelar" en el 1º prompt
        if (nombreCancion === null) {
            console.log("No se ha añadido ninguna canción adicional por decisión del usuario");
            // Si el usuario ha pulsado "Aceptar" en el 1º prompt    
        } else {
            nombreCancion = capitalizarPrimeraLetra(nombreCancion.trim());
            // 2º prompt: solicitar género canción
            let generoCancion = prompt('Introduzca género de la canción y pulsa botón "Aceptar" \nHaz click en el botón "Cancelar" si quiere cancelar');
            // Si el usuario ha pulsado "Cancelar" en el 2º prompt
            if (generoCancion === null) {
                console.log('No se ha añadido ninguna canción adicional por decisión del usuario');
                // Si el usuario ha pulsado "Aceptar" en el 2º prompt
            } else {
                generoCancion = capitalizarPrimeraLetra(generoCancion.trim());
                // 3º prompt: solicitar duración de la canción
                let duracionCancion = prompt('Introduzca la duración de la canción en minutos y pulsa botón "Aceptar" \nHaz click en el botón "Cancelar" si quiere cancelar');
                // Si el usuario ha pulsado "Cancelar" en el 3º prompt
                if (duracionCancion === null) {
                    console.log('No se ha añadido ninguna canción adicional por decisión del usuario');
                    // Si el usuario ha pulsado "Aceptar" en el 3º prompt
                } else {
                    duracionCancion = parseFloat(duracionCancion.trim());
                    if (!isNaN(duracionCancion)) {
                        catalogo.push({
                            nombre: nombreCancion,
                            genero: generoCancion,
                            duracion: duracionCancion,
                        });
                        console.log("Se ha añadido la nueva canción al catálogo");
                    }
                    else {
                        throw new Error('Error de formato al indicar la duración de la canción');
                    }
                }

            }
        }
    };

    const listarCanciones = () => {
        if (catalogo.length === 0) {
            console.log('No hay canciones en el catálogo');
        } else {
            console.log('Las canciones en el catálogo son:');
            catalogo.forEach(cancion => {
                console.log(`Nombre: "${cancion.nombre}" Género: "${cancion.genero}" Duración: ${cancion.duracion.toString()} minutos`);
            });
        }
    };

    const buscarPorGenero = (genero) => {
        if (typeof (genero) === 'string') {
            const catalogoFiltrado = catalogo.filter(cancion => cancion.genero.toLowerCase() === genero.trim().toLowerCase());
            if (catalogoFiltrado.length === 0) {
                console.log(`No hay canciones en el catálogo del género "${capitalizarPrimeraLetra(genero)}"`);
            } else {
                console.log(`Las canciones en el catálogo del género "${capitalizarPrimeraLetra(genero)}" son:`);
                catalogoFiltrado.forEach(cancion => {
                    console.log(`Nombre: "${cancion.nombre}"`);
                });
            }
        } else {
            throw new Error('Error de tipo en el argumento de entrada "genero"');
        }

    };

    const calcularPromedioDuracion = () => {
        if (catalogo.length === 0) {
            console.log('No hay canciones en el catálogo. No se calcula el promedio');
        } else {
            const duracionTotal = catalogo.reduce((acum, cancion) => acum += cancion.duracion, 0);
            let promedioDuracion = duracionTotal / catalogo.length;
            promedioDuracion = Math.round(promedioDuracion * 100) / 100; // Redondeo a 2 decimales
            console.log('Duración promedia de las canciones: ' + promedioDuracion.toString() + ' minutos');
        }
    }

    return {
        agregarCancion: agregarCancion,
        listarCanciones: listarCanciones,
        buscarPorGenero: buscarPorGenero,
        calcularPromedioDuracion: calcularPromedioDuracion
    };
};


// Probando el código
let miCatalogo = crearCatalogo();

miCatalogo.listarCanciones();
miCatalogo.buscarPorGenero('rock');
miCatalogo.buscarPorGenero('pop');
miCatalogo.calcularPromedioDuracion();


// añadir canción 1
miCatalogo.agregarCancion();
miCatalogo.listarCanciones();
miCatalogo.buscarPorGenero('rock');
miCatalogo.buscarPorGenero('pop');
miCatalogo.calcularPromedioDuracion();

// añadir canción 2
miCatalogo.agregarCancion();
miCatalogo.listarCanciones();
miCatalogo.buscarPorGenero('rock');
miCatalogo.buscarPorGenero('pop');
miCatalogo.calcularPromedioDuracion();

// añadir canción 3
miCatalogo.agregarCancion();
miCatalogo.listarCanciones();
miCatalogo.buscarPorGenero('rock');
miCatalogo.buscarPorGenero('pop');
miCatalogo.calcularPromedioDuracion();

// añadir canción 4
miCatalogo.agregarCancion();
miCatalogo.listarCanciones();
miCatalogo.buscarPorGenero('rock');
miCatalogo.buscarPorGenero('pop');
miCatalogo.calcularPromedioDuracion();
