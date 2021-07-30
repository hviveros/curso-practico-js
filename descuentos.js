const precioOriginal = 120;
const descuento = 18;

//cupones de descuentos
const coupons = [
    "promo_amistad",
    "promo_amigos",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento) / 100);

    return precioConDescuento;
}

function calculatePriceDiscount(){
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;
    
    // const inputDiscount = document.getElementById('inputDiscount');
    // const discountValue = inputDiscount.value;
    
    const inputCoupon = document.getElementById('inputCoupon');
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "promo_amistad":
        descuento = 15;
        break;
        case "promo_amigos":
        descuento = 30;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultPrice");

    resultP.innerText = 'Tu precio con descuento son $: ' + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });