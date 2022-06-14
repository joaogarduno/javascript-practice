// ANALISIS APLICANDO:
    // MEDIANA
    // PROMEDIO


// calculando la mediana general
// es PAR o IMPAR
// function esPar(numero){
//     if (numero % 2 === 0){
//         return true;
//     } else{
//         return false;
//     }
// }

// ESTAS SON FUNCIONES HELPERS
// el codigo anterior de "esPar" se resume de la siguiente manera
function esPar(numero){
    return (numero % 2 === 0);
}
// con esto ya tenemos la funcion es "esPar"



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


// CALCULADORA DE MEDIANA
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



// nueva lista que tenga solo los salarios de las personas
// calcular la media de todas las personas

// Aqui estamos calculando la -> MEDIANA GENERAL
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




// 
console.log(
    medianaSalarios(salariosMxSorted)
);


// ==========================================================

// Separar al top 10 y calcular la mediana de ese top 10
// De las personas que mas ingresos fijos mensuales tienen mensualmente.

// Utilizando un nuevo metodo para los arrays para hacer esa separacion y volver a calcular la mediana.

const medianaGeneralMx = medianaSalarios(salariosMxSorted);

// MEDIANA DEL TOP 10%
const spliceStart = (salariosMxSorted.length * 90) / 100;
const spliceCount = salariosMxSorted.length - spliceStart;

const salariosMxTop10 = salariosMxSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Mx = medianaSalarios(salariosMxTop10);


console.log({
    medianaGeneralMx,
    medianaTop10Mx, 
});