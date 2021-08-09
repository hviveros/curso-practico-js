// const ingresoMensual = 1000;
// const montoAhorro = 150;
// const mesesAhorro = 12;

function calcularPorcentajeAhorro(ingresoMensual, montoAhorro){
    const porcentajeAhorro = (montoAhorro * 100) / ingresoMensual;
    return porcentajeAhorro;
}

function calcularMontoAhorro(montoAhorro, mesesAhorro){
    const totalAhorro = montoAhorro * mesesAhorro;
    return totalAhorro;
}

function calcularAhorro(){
    const inputIngresos = document.getElementById('inputIngresos');
    const ingresosValue = inputIngresos.value;
    
    const inputAhorro = document.getElementById('inputAhorro');
    const ahorroValue = inputAhorro.value;
    
    const inputMeses = document.getElementById('inputMeses');
    const mesesValue = inputMeses.value;

    const resultadoPorcentajeAhorro = calcularPorcentajeAhorro(ingresosValue, ahorroValue);
    const resultadoMontoAhorro = calcularMontoAhorro(ahorroValue, mesesValue);

    const resultP = document.getElementById("resultSave");

    resultP.innerText = 'El monto que deseas ahorrar representa el ' + resultadoPorcentajeAhorro + ' % de tus ingresos. Al cumplir los ' + mesesValue + ' meses, tendrá un ahorro del ' + resultadoMontoAhorro + ' $.';
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });