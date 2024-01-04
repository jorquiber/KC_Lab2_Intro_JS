/* 
Ejercicio 3

Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente
información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
listado de los proyectos en el que sus desarrolladores trabajan.

Estos son los datos:
*/

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

/*
Tenemos que hacer las operaciones necesarias para obtener estos 2 listados:
*/
const desarrolladoresJavascript = [
    {
        "id": 1,
        "nombre": "Juan",
        "habilidades": ["JavaScript", "HTML", "CSS"],
        "proyectos": [
            { "id": 1, "nombre": "Proyecto 1" },
            { "id": 2, "nombre": "Proyecto 2" }
        ]
    }
];
const nombresProyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3',
    'Proyecto 4', 'Proyecto 5', 'Proyecto 6'];


// Función para resolver primera parte del ejercicio: obtener los desarrolladores con la habilidad JavaScript
const obtenerDesarrolladoresConHabilidad = (datosDesarrolladores,habilidad) => (
    datosDesarrolladores.filter(desarrollador => desarrollador.habilidades.includes(habilidad))
);

const misDesarrolladoresJavascript = obtenerDesarrolladoresConHabilidad(datos,"JavaScript");

console.log('Comparando resultados ejercicio 1:')
console.log("Salida esperada:",desarrolladoresJavascript);
console.log("Salida obtenida:",misDesarrolladoresJavascript);

// Función para resolver la segunda parte del ejercicio: listado de los proyectos en el que sus desarrolladores trabajan

// Función auxiliar para obtener la lista de nombres de proyectos de un SOLO desarrollador
const obtenerNombresProyectosDesarrollador = (desarrollador) => (
    desarrollador.proyectos.map(proyecto => proyecto.nombre)
);

// Función para obtener la lista de nombres de proyectos de todos los desarrolladores
const obtenerNombresProyectosDesarrolladores = (datosDesarrolladores) => (
    datosDesarrolladores.reduce((acum,desarrollador) => [...acum, ...obtenerNombresProyectosDesarrollador(desarrollador)],[])
)

const misNombresProyectos = obtenerNombresProyectosDesarrolladores(datos);

console.log('Comparando resultados ejercicio 2:')
console.log("Salida esperada:",nombresProyectos);
console.log("Salida obtenida:",misNombresProyectos);
