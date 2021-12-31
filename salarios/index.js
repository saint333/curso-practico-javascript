const peru = [];
const pagos = [];

function datos(nombre, salario){
    peru.push([nombre, salario]);
    pagos.push(Number(peru[peru.length - 1][1]));
}

function espar(longuitud){
    if (longuitud % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

function mediana (lista){
    const lista_ol = lista.sort(function(a,b){
        return a - b;
    });
    let cantidad = espar(lista_ol.length);
    const posicion = parseInt(lista.length/2)
    let valor_1;
    let valor_2;
    if (cantidad === false) {
        valor_1 = lista_ol[posicion];
        return valor_1;
    }else{
        valor_1 = lista_ol[posicion-1];
        valor_2 = lista_ol[posicion];
        const resultado = (valor_1 + valor_2)/2;
        return  resultado;
    }
}

function tops(lista){
    const lista_ol = lista.sort(function(a,b){
        return a - b;
    });
    const incio = (lista_ol.length * 90)/ 100;
    const final = lista_ol.length - incio;
    const top10 = lista_ol.splice(incio,final);
    const mediatop = mediana(top10);
    return mediatop;
}

function anadirDatos (){
    const nombre = document.getElementById('nombre').value;
    const salario = document.getElementById('salario').
    value;
    const caja = document.getElementById('resultado');
    if (nombre == "" || salario == ""){
        caja.innerHTML = `<span>Ingrese los datos</span>`;
        caja.style.display = "block";
    }else{
        datos(nombre, salario);
        caja.innerHTML = `<span>Dato ${pagos.length}° registrado</span>`;
        caja.style.display = "block";
    }
}

function limpiar(){
    document.getElementById("nombre").value = ""; 
    document.getElementById("salario").value = "";
}

function calcularMediana (){
    const caja = document.getElementById('resultado');
    if (pagos.length <= 1){
        caja.innerHTML = `<span>Ingrese los datos</span>`;
        caja.style.display = "block";
    }else{
        centro = mediana(pagos);
        caja.innerHTML = `<span>La mediana de salarios es S/${centro}</span>`;
        caja.style.display = "block";
    }
}

function calcularTop (){
    const caja = document.getElementById('resultado');
    if (pagos.length <= 15){
        caja.innerHTML = `<span>Ingrese los datos</span>`;
        caja.style.display = "block";
    }else{
        centro = tops(pagos);
        caja.innerHTML = `<span>La mediana de salarios top es S/${centro}</span>`;
        caja.style.display = "block";
    }
}