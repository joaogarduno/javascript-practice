// Sin medidas fijas -> con Funciones

// cambiando las variables -> "primetroCuadrado","perimetroTriangulo", "perimetroCirculo"
// cambiando las variables de -> "areaCuadrado", "areaTriangulo", "areaCirculo"

// todas estas variables se van a convertir en funciones


// Las funciones siempre necesitan parentesis.
// El codigo que se ejecuta dentro de las funciones lo guardamos entre llaves.
// Lo que esperamos de nuestras funciones es que nos retornen algun valor.
// Ese retornar lo especificamos con la palabra "return".


// PERIMETRO DEL CUADRADO
// La magia de las funciones es que nos permiten recibir parametros.
// Los parametros son variables que vamos a recibir cuando llamemos a nuestra funcion en el futuro.
// 1. Perimero necesitamos definir que parametros queremos recibir
// Ese valor de "lado", vendria representando el numero que sea (que seria el valor dinamico que nosotros le estaremos asignando).
// Entonces... cuando mandemos a llamar a nuestra funcion de esta manera "perimetroCuadrado()" podemos enviarle el numero que nosotros le asignemos y pueden ser los que sean... 12, 10, 54, 20, 35, etc.
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
// "ladoCuadrado" ahora sera dinamico, entonces, ya no es necesario declar las variables, y este valor lo va a definir el usuario cuando llame a la funcion "perimetroCuadrado".
// Entonces... cuando hagamos el calculo de nuestro perimetro ya no vamos a utilizar la variable "ladoCuadrado", es decir ya no existe, ahora solo utilizamos el parametro "lado"


// AREA DEL CUADRADO
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();




// TRIANGULO
// codigo de nuestro triangulo
console.group("Triangulos");
// recordar que cuando se crean las funciones, es por la razon de que ya no sean valores fijos, si no dinamicos que podamos enviarle a una funcion.

// NOTA: Cuando dentro de las funciones recibimos parametros (se les llama exactamente asi "parametros", que en este caso vendrian sustituyendo a nuestras variables del codigo anterior), pero cuando llamamos a una funcion, por ejemplo "perimetroCuadrado()" lo que enviamos ya no se llaman parametros si no "ARGUMENTOS".

// Perimetro del Triangulo
function perimetroTriangulo(lado1 , lado2, base){
    return lado1 + lado2 + base; // esto es lo que va a devolver mi funcion "perimetroTriangulo"
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

// Vemos que esta variable "perimetroCirculo" recibia el "diametro" y ademas "PI", pero PI es una variable general, no la necesitamos.
// Pero tenemos el diametro, entonces, ¿Como calculamos el diametro?
// Con una funcion que recibe el parametro "radio", entonces haremos lo siguiente, no queremos que los usuario nos digan el "diametro", eso lo queremos calcular nosotros, los usuarios solo saben cuanto es el radio del circulo, entonces, ese es el unico parametro que vamos definir.
// Pero por dentro de la funcion, tenemos que definir cuanto es nuestro diametro.
// Entonces, en vez de repetir este calculo, decir que "diametro = radio * 2", vamos a llamar a la FUNCION "diametroCirculo"
// Entonces, decimos que nuestra variable "diametro", va ser igual a ejecutar o llamar la funcion "diametroCirculo" enviandole como argumento "radio", lo que estamos recibiendo como parametro, en nuestra funcion perimetro circulo.
// Entonces, estamos llamando a una funcion, dentro de otra funcion, para crear una variable, con la que vamos a retornar el valor de nuestro perimetro, que en este caso es el "diametro * PI".
// Asi, aprendimos a llamar funciones dentro de funciones.
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Recordar que la variable "diametro" solo podemos ejecutarla dentro de nuestra funcion "perimetroCirculo", porque la definimos dentro de esa funcion


// Area Circulo
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Aprendimos a encapsular nuestro codigo en funciones, en combertir variables que antes eran "fijas" en funciones que ahora son "dinamicas", que reciben parametros, que estas puden ser las medidas que tu quieras.

