// PERIMETRO DEL CUADRADO
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}

// AREA DEL CUADRADO
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();



// TRIANGULO
console.group("Triangulos");

// Perimetro del Triangulo
function perimetroTriangulo(lado1 , lado2, base){
    return lado1 + lado2 + base;
}

// Area del Triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();



// CIRCULO
console.group("Circulo");

// Diametro Circulo
function diametroCirculo(radio){
    return radio * 2;
}


// Circunferencia o Perimetro
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area Circulo
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();



// AQUI INTERACTUAMOS CON HTML

// Cada ves que le den click al boton de "Calcular Perímetro" vamos hacer que se llame a una funcion que nosotros crearemos en JavaScript para poder reaccionar y lo mismo con el boton "Calcular el Área".
// ¿Como hacemos eso?, simplemente creamos un atributo que se llame "onclick" y dentro vamos a escribir el nombre de nuestra funcion que vamos a llamar desde JavaScript.
// Entonces nuestra funcion se va a llamar "calcularPerimetroCuadrado()" lleva parentesis porque es una FUNCION.
// Entonces asi quedaria la propiedad "onclick" en nuestra etiqueta "button" de HTML -> onclick="calcularPerimetroCuadrado()"

// En la funcion "calcularPerimetroCuadrado" necesitamos conseguir el valor que nuestros usuario hayan escrito en este "input", ¿y eso como lo hacemos?
// Vamos al navegador y dentro de consola colocamos lo siguiente "document.getElementById(InputCuadrado)" y damos ENTER y lo que nos muestra es lo siguiente <input id="InputCuadrado" type="number">
// entonces lo que nos muestra es nuestro input, ¿Pero que es lo que pasa?
// Javascript por defecto nos permite leer nuestras etiquetas, nuestro contenido HTML y no solo leerlo, si no que nos permite:
    // * Manipularlo, 
    // * Eliminar etiquetas, 
    // * Cambiarle el texto algunas etiquetas.
// Entonces no solo leerlas, si no que podemos hacer lo que queramos con Javascript, pero por ahora solo estamos "leyendo"
// El " document.getElementById("InputCuadrado"); " dentro de nuestro HTML estamos buscando al elemento o etiqueta que tanga el ID, en este caso "InputCuadrado de la etiqueta que esta en HTML <input id="InputCuadrado" >

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    // definir pertimetro
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


// 
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    // definicion del area
    const area = areaCuadrado(value);
    alert(area);
}

