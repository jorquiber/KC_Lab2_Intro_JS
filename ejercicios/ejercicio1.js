/* Ejercicio 1

Crea un archivo ejercicio1.js que tenga un objeto usuario con los siguientes campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en busqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente.

*/

const usuario = {
    nombre: 'Jorge',
    apellidos: 'Quintero Bermejo',
    cursos:[
        {nombreCurso:'Node.js',fechaInicio: "2024-02-12"},
        {nombreCurso:'Git',fechaInicio: "2023-11-28"},
        {nombreCurso:'React',fechaInicio: "2024-04-15"}
    ],
    busquedaActiva: false
};

const cursoBuscar = 'React';

// opción 1: buscando a través de bucle for
for (let i = 0; i < usuario.cursos.length; i++) {
    const curso = usuario.cursos[i];
    if(curso.nombreCurso === cursoBuscar) {
        console.log('Módulo:',curso.nombreCurso,' Fecha de inicio:',curso.fechaInicio);
        break;
    }
}

//opción 2: usando función y método find
const buscarFechaCurso = (cursos,nombreCurso) => {
    return cursos.find(curso => curso.nombreCurso === nombreCurso)
} 

const cursoEncontrado = buscarFechaCurso(usuario.cursos,cursoBuscar);
console.log('Módulo:',cursoEncontrado.nombreCurso,' Fecha de inicio:',cursoEncontrado.fechaInicio);