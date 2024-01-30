   
 function calcularCompra() {
    let total = 0;

    while (true) {
        const NOMBRE_PRODUCTO = prompt('Ingrese el nombre del producto (usa 0 o no escribas nada para finalizar):');


        if (NOMBRE_PRODUCTO === '0' || NOMBRE_PRODUCTO === null){

            break;
        }
        
        const precioProducto = parseFloat(prompt("Ingrese el precio de" +  NOMBRE_PRODUCTO + ":"));

        // Validar que el precio sea un número válido
        if (precioProducto && precioProducto >= 0) {
            total += precioProducto;
            console.log("Producto agregado:" + NOMBRE_PRODUCTO + "- $" + precioProducto);
        } else {
            console.log('Precio no válido. Intente de nuevo.');
        }
    }
        /////TOTAL DE LA COMPRA

    console.log("Total de la compra: $" + total);
}


///llamo la funcion
calcularCompra();