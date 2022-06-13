// ANALISIS APLICANDO:
    // MEDIANA
    // PROMEDIO

// nueva lista que tenga solo los salarios de las personas
// calcular la media de todas las personas

const salariosMx = mexico.map(
    function (persona){
        return persona.salary;
    }
);

// ordenamos nuestros elementos
const salariosMxSorted = salariosMx.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// calculando la mediana general
// es PAR o IMPAR
// function esPar(numero){
//     if (numero % 2 === 0){
//         return true;
//     } else{
//         return false;
//     }
// }

// el codigo anterior de "esPar" se resume de la siguiente manera
function esPar(numero){
    return (numero % 2 === 0);
}
// con esto ya tenemos la funcion es "esPar"

// ahora calcularemos la mediana general
// una funcion que calcule la mediana de salarios para cualquier país y lo que haremos mas adelante, sera enviarle como argumento esta funcion (nuestra lista)
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    // tenemos que ver si las personas de mexico es "PAR" o es "IMPAR"
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// FUNCION DE PROMEDIO
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// 
console.log(
    medianaSalarios(salariosMxSorted)
);

