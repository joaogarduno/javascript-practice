// definicion de las primeras variables -> precio y descuento
//  
// const precioOriginal =  100;
// const descuento = 15;

// otras variables
// Este es el porcentaje del PRECIO que debemos pagar restando el porcentaje de nuestro descuento
//const procentajePrecioConDescuento = 100 - descuento;
// utilizaremos este procentaje del "Precio con descuento" para despues restarle lo que sobra del precio original
//const precioConDescuento = (precioOriginal * procentajePrecioConDescuento) / 100; // entre 100 para que nos de el precio real

// de la forma mas sencilla
// console.log("El precio original es: " + precioOriginal);

// de la forma con un objeto
// console.log({
//     precioOriginal,
//     descuento,
//     procentajePrecioConDescuento,
//     precioConDescuento,
// });


// ahora nuestras variables las vamos a combertir a una funcion, para que cuando nosotros ingresemos el precio y su descuento manualmente nos devuelva nuestro total.

// Esta funcion va a recibir dos parametros
// tenemos que enviarle 2 argumentos cuando queramos calcular un precio con descuento
// precio y descuento es toda la informacion que necesitamos enviarle a nuestra funcion.
// tambien para esto sustituimos las primeras variables que estan al inicio ya que esa informacion la vamos a recibir del usuario, es decir las cantidades van a ser introdicidas manualmente por el usuario.
// entonces cada vez que mandemos a llamar nuestra funcion podamos definir el precio y el descuento.
// Quitamos las otras variables de "procentajePrecioConDescuento" y "precioConDescuento" y las colocamos dentro de nuestra funcion
function calcularPrecioConDescuento(precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    // retornamos el valor
    return precioConDescuento;
}

// dentro de esta funcion tenemos que mandar a llamar a nuestra funcion "calcularPrecioConDescuento", pero ¿Cual va ser el precio? y ¿Cual va a hacer el descuento?. Eso lo hacemos con el "metodo" document.getElementById()
function onClickButtonPriceDiscount() {
    // vamos a mandar a llamar al ID del <input "price"> y tambien del <input "discount">
    const inputPrice = document.getElementById("inputPrice");
    // recibimos el valor, no nada mas el input de los usarios con la siguiente variable.
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    // recibimos el valor, no nada mas el input de los usarios con la siguiente variable.
    const discountValue = inputDiscount.value;


    // una vez teniendo los 2 valores mandamos a llamar a nuestra funcion "calcularPrecioConDescuento"
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    // ya tenemos nuestro precio con descuento

    // ahora se le mandara un mensaje en HTML sobre el resultado, ya no va a ser con un "alert()"
    const resultP = document.getElementById("resultPrice");
    // mandamos a llamar a su "Atributo" o "Metodo" que es -> innerText
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}