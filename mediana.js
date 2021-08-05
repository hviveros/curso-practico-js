function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// const lista1 = [
//     100, 200, 500, 400000000
// ];

function ordenarLista(lista){
    const list = lista.sort();
    return list;
}

function calcularMediana(lista1){

    const listaOrdenada = ordenarLista(lista1);

    const mitadlistaOrdenada = parseInt(listaOrdenada.length / 2) ;

    function esPar(numerito){
        if( numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadlistaOrdenada - 1];
        const elemento2 = listaOrdenada[mitadlistaOrdenada];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;

    } else {
        mediana = listaOrdenada[mitadlistaOrdenada];
    }

    return mediana;
}