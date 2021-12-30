function descuento(precio,porcentaje) {
    return precio * (100 - porcentaje) /100
}

function calcularDescuento(){
    const precio = document.getElementById('precio').value;
    const porcentaje = document.getElementById('descuento').value;
    const caja = document.getElementById('resultado');
    const descuentos = descuento(Number(precio),Number(porcentaje));

    if (precio <= 0 && porcentaje <= 0){
        caja.innerHTML =`<span>Precio/Descuento no valido</span>`;
        caja.style.display = 'block';
        
    }else{
        caja.style.display = 'block';
        caja.innerHTML = `<span>Precio final: S/${descuentos}</span>`;
    }
}