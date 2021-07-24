// Codigo del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado mide: ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado mide: ' + areaCuadrado + ' cm2');
console.groupEnd();

// Codigo del triangulo
console.group('Triangulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + ' cm, ' +  ladoTriangulo2 + ' cm, ' + baseTriangulo + ' cm');
console.log('Los altura del triangulo mide: ' + alturaTriangulo + ' cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perimetro del triangulo mide: ' + perimetroTriangulo + ' cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo mide: ' + areaTriangulo + ' cm2');
console.groupEnd();

// Codigo del cirulo
console.group('Circulos');
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
console.log('Pi es: ' + pi);
console.log('El radio del circulo mide: ' + radioCirculo + ' cm');

const perimetroCirculo = diametroCirculo * pi;
console.log('El perimetro del circulo mide: ' + perimetroCirculo + ' cm');

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log('El area del circulo mide: ' + areaCirculo + ' cm2');
console.groupEnd();