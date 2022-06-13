// Una lista o un Array
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

// CALCULANDO LA MODA
// Estamos convirtiendo un "array" a un  "objeto"
// Solo nos ayuda a sumar cuantas veces aparecen o se repiten en esa lista o "array", la unifica y nos dice el total de veces que aparece cada numero
const lista1Count = {};

// este metodo ".map()" nos ayuda a recorrer todo nuestro array
lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
            // lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1
        } else{
            lista1Count[elemento] = 1;
        }
    }
);


// EN BUSQUEDA DEL OBJETO MAS GRANDE
// Volvemos a convertir ese objecto que acabamos de crear para volver a crear un array
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

// LA MODA SERIA
const moda = lista1Array[lista1Array.length - 1];
