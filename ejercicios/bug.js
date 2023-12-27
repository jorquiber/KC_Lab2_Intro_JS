/*
Ejercicio 2:
Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice
que no funciona. No nos da el error, solo este código que es el que tiene en producción.
Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.
*/

// Código original
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log('Probando código original con caso básico')
console.log('lista:',listaNumeros,'promedio:',promedioNumeros);

console.log('Probando casos que son vulnerables al código original')
const listaListasNumeros = [
    [1,2,-3,,-5],
    [1,2,0,'2',NaN],
    [undefined,,,3,0],
    ['3',,,,'pedro',,],
    [],
    [{1:1,2:2},1,1]
];

for (let i = 0; i < listaListasNumeros.length; i++) {
    const lista = listaListasNumeros[i];
    console.log('lista:',lista,'promedio:',calcularPromedio(lista));
};

// Fix del código original
const fixCalcularPromedio = (numeros) => {
    let sumaTotal = 0;
    let validNumberCounter = 0;

    for (let i = 0; i < numeros.length; i++) {
        // Solo se consideran como validos para el promedio los elementos del vector numeros de tipo 'number'
        if (!isNaN(numeros[i]) && typeof(numeros[i]) == 'number'){
            sumaTotal += numeros[i];
            validNumberCounter++;
        }
    }

    let promedio = 0;

    // si no hay ningún elemento válido en el vector numeros, el promedio es 0
    if (validNumberCounter === 0) {
        promedio = 0;
    }else{
        promedio = sumaTotal / validNumberCounter; 
    }
    return promedio;
};

console.log('Probando fix del código original con caso básico');
console.log('lista:',listaNumeros,'promedio:',fixCalcularPromedio(listaNumeros));

console.log('Probando los casos que eran vulnerables al código original en el fix');
for (let i = 0; i < listaListasNumeros.length; i++) {
    const lista = listaListasNumeros[i];
    console.log('lista:',lista,'promedio:',fixCalcularPromedio(lista));
};