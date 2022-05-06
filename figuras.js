// no cambia el valor de esta variable - Variable Constante
// const ladoY = 30;
// const ladoX = 15;
// const ladoCuadrado = 450;


// Código del CUADRADO
console.group("Cuadrados"); // agrupar console.logs
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;


console.log("Los lados de cuadrado miden: " + ladoCuadrado + "cm");
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
console.log("El área del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd(); // termina el agrupamiento de console.log cuadrados



// Código del TRIÁNGULO
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1  
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
    );

// altura del triangulo
const alturaTriangulo = 5.5;
console.log("La altura del Triángulo es de: " + alturaTriangulo + "cm");


// Calculando el perimetro y el area
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del Triángulo es de: " +  perimetroTriangulo + "cm")

// Formula del area de los triangulos
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del Triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();



// Código del CIRCULO
// Circunferencia de un circulo
console.group("Circulo");

// VARIABLES

// Radio
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

// diametro
const diametroCiculo = radioCirculo * 2;
console.log("El Diametro del Circulo es: " + diametroCiculo + "cm")

// PI
// const PI = 3.14159;

// otra forma de guardar PI a traves de una herramienta de Javascript llamada "Math"
// Math es una herramienta de Javascript
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCiculo * PI;
console.log("El Perímetro del Circulo es: " + perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm^2")


console.groupEnd();