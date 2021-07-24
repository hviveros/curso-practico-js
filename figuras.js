// Codigo del cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log('El perimetro del cuadrado mide: ' + perimetroCuadrado + ' cm');

function areaCuadrado(lado){
    return lado * lado;
}
// console.log('El area del cuadrado mide: ' + areaCuadrado + ' cm2');
console.groupEnd();

// Codigo del triangulo
console.group('Triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + ' cm, ' +  ladoTriangulo2 + ' cm, ' + baseTriangulo + ' cm');
// console.log('Los altura del triangulo mide: ' + alturaTriangulo + ' cm');

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log('El perimetro del triangulo mide: ' + perimetroTriangulo + ' cm');

function areaTriangulo(base, altura){
    return (base * altura) / 2
}
// console.log('El area del triangulo mide: ' + areaTriangulo + ' cm2');
console.groupEnd();

// Codigo del cirulo
// console.group('Circulos');
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
console.log('Pi es: ' + pi);
// console.log('El radio del circulo mide: ' + radioCirculo + ' cm');

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
// console.log('El perimetro del circulo mide: ' + perimetroCirculo + ' cm');

function areaCirculo(radio){
    return (radio * radio) * pi;
}
// console.log('El area del circulo mide: ' + areaCirculo + ' cm2');
console.groupEnd();


// Interactuamos con HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById('inputTriangulo1');
    const lado2 = document.getElementById('inputTriangulo2');
    const base = document.getElementById('inputTrianguloBase');
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro)
}
function calcularAreaTriangulo(){
    const base = document.getElementById('inputTrianguloBase');
    const altura = document.getElementById('inputTrianguloAltura');
    const valor1 = Number(base.value);
    const value2 = Number(altura.value);

    const area = areaTriangulo(valor1, value2);
    alert(area)
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}
function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}