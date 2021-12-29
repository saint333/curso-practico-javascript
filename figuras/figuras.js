function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(lado1,lado2,base) {
    const semi = (perimetroTriangulo(lado1,lado2,base))/2;
    return (semi*(semi-lado1)*(semi-lado2)*(semi-base))**0.5
}

function diametroCirculo(radio) {
    return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return pi*radio**2
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}

function calcularPerimetroCuadrado(){
    const value = document.getElementById('cuadrado').value;
    const perimetro = perimetroCuadrado(value);
    const caja = document.getElementById('resultado-cuadrado');
    if (value <= 0){
        caja.innerHTML =`<span>Medida no permitida</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.innerHTML = `<span>Perimetro: ${perimetro}cm</span>`;
        caja.style.display = 'block';
    }
}

function calcularAreaCuadrado() {
    const value = document.getElementById('cuadrado').value;
    const area = areaCuadrado(value);
    const caja = document.getElementById('resultado-cuadrado');
    if (value <= 0){
        caja.innerHTML =`<span>Medida no permitida</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.innerHTML = `<span>Area: ${area}cm<sup>2</sup></span>`;
        caja.style.display = 'block';
    }
}

function calcularPerimetroTriangulo () {
    const value1 = document.getElementById('triangulo').value;
    const value2 = document.getElementById('triangulo-1').value;
    const value3 = document.getElementById('base').value;
    const perimetro = perimetroTriangulo(Number(value1), Number(value2),Number(value3));
    const caja = document.getElementById('resultado-triangulo');
    if (value1 <= 0 || value2 <= 0 || value3 <= 0){
        caja.innerHTML =`<span>Medidas no permitidas</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.innerHTML = `<span>Perimetro: ${perimetro}cm</span>`;
        caja.style.display = 'block';
    }
}

function calcularAreaTriangulo (){
    const value1 = document.getElementById('triangulo').value;
    const value2 = document.getElementById('triangulo-1').value;
    const value3 = document.getElementById('base').value;
    const caja = document.getElementById('resultado-triangulo');
    const area = areaTriangulo(Number(value1), Number(value2),Number(value3));

    if (value1 <= 0 || value2 <= 0 || value3 <= 0){
        caja.innerHTML =`<span>Medidas no permitidas</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.innerHTML = `<span>Area: ${area}cm<sup>2</sup></span>`;
        caja.style.display = 'block';
    }
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById('circulo').value;
    const perimetro = perimetroCirculo(Number(radio));
    const caja = document.getElementById('resultado-circulo');
    if (radio <= 0){
        caja.innerHTML =`<span>Medida no permitida</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.innerHTML = `<span>Perimetro: ${perimetro}cm</span>`;
        caja.style.display = 'block';
    }
}

function calcularAreaCirculo (){
    const radio = document.getElementById('circulo').value;
    const area = areaCirculo(Number(radio));
    const caja = document.getElementById('resultado-circulo');
    if (radio <= 0){
        caja.innerHTML =`<span>Medida no permitida</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.innerHTML = `<span>Area: ${area}cm<sup>2</sup></span>`;
        caja.style.display = 'block';
    }
}
