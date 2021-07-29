const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento) / 100);

    return precioConDescuento;
}

function calculatePriceDiscount(){
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");

    resultP.innerText = 'Tu precio con descuento son $: ' + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });