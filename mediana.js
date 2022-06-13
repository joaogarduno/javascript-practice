function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

// necesitamos una "lista" de ejemplo
const lista1 = [
    100,
    200,
    500,
    400000000,
];

// Entonces encontremos la "mitad" de nuestra lista, pero como queremos encontrar la mitad necesitamos dividirlo entre 2, eso nos dara "mas o menos" la mitad.
const mitadLista1 = parseInt(lista1.length / 2);
// decimos "mas o menos" porque en la mediana tenemos 2 posibilidades:
//  1.- Puede ser que nuestra lista sea PAR o que sea IMPAR, si es IMPAR solo necesitamos el elemento que este a la mitad y esa es nuestra mediana, pero si nuestro elemento es PAR, vamos a tener 2 elementos y de esos 2 elementos tenemos que sacar el promedio

// primero necesitamos saber si un numero es par o no, para eso creamos una funcion
// Esta funcion debe devolvernos "TRUE" si nuestro numero es "par" y debe devolvernos FALSE si nuestro numero no es "par"
function esPar(numero){
    if (numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1And2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1And2;

    // necesitamos dos elementos
    // -> el promedio
    // -> mediana
} else{
    mediana = lista1[mitadLista1];
    // la posicion mitadLista1 dentro lista1
    // -> seria este como resultado nuestra "mediana"
}



// ===========================================

// CREANDO LA FUNCION  DE MEDIANA
// const lista = [
//     10,
//     20,
//     30,
//     40,
//     50,
//     60,
//     70,
//     80,
//     90,
//     100,
// ];
