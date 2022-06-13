// Necesitamos una lista de elementos
// la "constante" "lista1" es un array
// y metemos los elementos que necesitemos en nuestra lista, en este caso es una lista de solo numeros
const lista1 = [
    100,
    200,
    300,
    500,
];
// La meta de esta practica es calcular el Promedio, es decir la Media Aritmetica, de esta variable "lista1"

// Pasos para poder calcular el Promedio o Media Aritmetica
// Paso 1: Sumar esta lista de valores -> Pero para eso ya no vamos a utilizar una sola lista, si no que vamos autilizar un ciclo "FOR".



// Entonces para poder realizar el primer punto hacemos lo siguiente, creamos una varibale con "LET" llamada "sumaLista1" para que en un futuro podamos cambiarle mas especificamente en nuestro ciclo "FOR".
// Entonces en la variable "sumaLista1" vamos a guardar el resultado de nuestra suma de todos nuestros elementos que estan en la variable "lista1"
// ------> let sumaLista1 = 0;

// Dentro de nuestro ciclo FOR vamos a crear una variable que se va a ir incrementando o iterando hasta algun numero liste que nosotros le digamos para terminar la ejecucion del ciclo.
// Este cilco FOR se debe ejecutar hasta que "i", es decir "solo mientras i, sea un numero menor a la cantidad de elementos de "lista1" eso lo hacemos con ".length"
// Entonces "i" la variable que se va a ir incrementando por cada ejecucion de nuestro ciclo FOR, solamente se va a ejecutar mientras sea un numero menor a la cantidad de elementos dentro de "lista1"
// Y por ultimo hacemos nuestra suma "i++" cada ves que se ejecute nuestre ciclo, y asi va llegar un momento en el que el valor de la variable "i" va ser mayor a "lista1.length" y cuando pase eso ya no se va a seguir ejecutando nuestro ciclo FOR.
// ------> for (let i = 0; i < lista1.length; i++){

    // mandamos a llamar a la variable "sumaLista1" y le decimos que sea igual a "el valor que tenia antes esta misma variable (sumaLista1) que cuando inicia tiene una valor de Cero".
    // pero vamos a sumarle el valor de cada uno de los elementos que aparezca en nuestra lista

    // sumaLista1 = sumaLista1 + lista1[i];
// }



// Paso #2: Divirlo entre la cantidad de elementos que hay en nuestra lista
// ------> const promedioLista1 = sumaLista1 / lista1.length;
// Y con esto obtenemos el resultado deseado.


// Recordar que debemos hacer que nuestro codigo no funcione con una lista fija, en este caso seria la variable "lista1" que tiene valore fijos.
// Queremos poder crear una funcion a la que podamos enviarle como parametro la lista que nosostros queramos a la que nosotros queramos sacarle PROMEDIO o MEDIA ARITMETICA

// Entonces pahacer eso vamos a crear una funcion que se llame "calcularMediaAritmetica"
// Y por supuesto esta funcion debe recibir un paramentro "lista", ya no va ser la "lista1", si no que es la lista que eligan nuestros usuarios

// --------> function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;

//     for (let i = 0; i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
//     }

//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;

// }



// Existe una alternativa a utilizar un ciclo FOR, cuando trabajamos con ARRAYS es decir "listas" en Javascipt, no solo podemos utilizar un ciclo FOR para "iterar" en esta lista.
// Si no que... tambien tenemos METODOS de todos los arrays con los que podemos iterar por cada uno de estos elementos
function calcularMediaAritmetica(lista) {
    // vamos a crear una nueva "constante", en este caso es una "constante" no vamos a ocupar "let"
    // Pero en este caso vamos a llamar a nuestra lista que es el parametro de la funcion "calcularMediaAritmetica" y vamos a llamar a uno de estos METODOS que se menciono que tenian los arrays, en este caso el METODO "reduce" 

    // ¿Que es lo que hace este metodo "reduce"? va a recibir una funcion, nosotros tenemos que enviarle como argumento una funcion a este metodo "reduce" y este metodo lo que nos va a permitir es ir sumando cada uno de nuestros elementos
    // No necesariamente se tendria que estar sumando, puede ser multiplicando, dividiendo, podriamos estar haciendo cualquier cosa, pero en este caso necesitamos sumar
    const sumaLista = lista.reduce(
        // Dentro de los parentesis vamos a enviar como argumento a nuestra "funcion" o a nuestro METODO "reduce" una funcion
        // En este caso no necesitamos darle un nombre a la funcion, podemos darle una "fucion anonima"

        // ¿Que necesitamos?
        // Esta funcion va a recibir 2 parametros la primera va ser el "valorAcumulado" y que significa "valorAcumulado" es lo que se va a ir sumando y acumulando en cada una de nuestras iteraciones dentro de nuestro array.
        // Recuerda que la funcion reduce va a funcionar muy parecida al ciclo FOR
        function (valorAcumulado = 0, nuevoElemento){
            // Entonces en "valorAcumulado" vamos a recibir lo que hayamos sumando o simplemente lo que hayamos retornado dentro de nuestra funcion anonima en cada iteracion, en cada nueva iteracion
            // valorAcumulado = 0 --> significa que cuando javascript no nos envie o mande nada en valor acumulado, nosotros vamos a decirle que por defecto nos de un CERO
            // DEspues recibimos un segundo parametro llamado "nuevoElemento", que es el valor, es decir el elemento actual
            return valorAcumulado + nuevoElemento;
        }
        
        
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}