function promedio(lista){
    const sumaLista = lista.reduce(
        function(acumulado=0, siguenteElemento){
            return Number(acumulado) + Number(siguenteElemento);
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
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
    })
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
        const resultado = promedio([valor_1, valor_2]);
        return  resultado;
    }
}

function moda (lista){
    let conteo = {};
    lista.map(function (elemento){
        if (conteo[elemento]){
            conteo[elemento] += 1;
        }else{
            conteo[elemento] = 1;
        }
    });
     const array=Object.entries(conteo).sort(function(a,b){
        return a[1] - b[1];
    });
    return array[array.length - 1]
}

function calcularMedia(){
    const lista = document.getElementById('lista').value;
    const lis_array = lista.split(",");
    const promedios = promedio(lis_array);
    const caja = document.getElementById('resultado');
    if (promedios === 0) {
        caja.innerHTML =`<span>Ingrese valores numericos</span>`;
        caja.style.display = 'block';
    }else {
        caja.innerHTML =`<span>Promedio es: ${promedios}</span>`;
        caja.style.display = 'block';
    }
}

function calcularMediana(){
    const lista = document.getElementById('lista').value;
    const lis_array = lista.split(",");
    const centro = mediana(lis_array);
    const caja = document.getElementById('resultado');
    if (centro === NaN || centro === "") {
        caja.innerHTML =`<span>Ingrese valores numericos</span>`;
        caja.style.display = 'block';
    }else {
        caja.innerHTML =`<span>Mediana es: ${centro}</span>`;
        caja.style.display = 'block';
    }
}

function calcularModa(){
    const lista = document.getElementById('lista').value;
    const lis_array = lista.split(",");
    const repeciones = moda(lis_array);
    const caja = document.getElementById('resultado');
    if (lis_array == 0) {
        caja.innerHTML =`<span>Ingrese valores numericos</span>`;
        caja.style.display = 'block';
    }else {
        caja.innerHTML =`<span>La moda es: ${repeciones[0]}</span>`;
        caja.style.display = 'block';
    }
}