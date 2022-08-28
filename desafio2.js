//desafío 2 - simulador interactivo

let totalCompra = 0
let productoSeleccionado = parseInt(prompt('Ingresa el produco que deseas comprar 1-Camiseta 2-Gorro 3-Taza 4-Llavero'))
let seguirComprando = true


while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        totalCompra = totalCompra + 780
    } else if (productoSeleccionado === 2) {
        totalCompra = totalCompra + 300
    } else if (productoSeleccionado === 3) {
        totalCompra = totalCompra + 200
    } else if (productoSeleccionado === 4) {
        totalCompra = totalCompra + 150
    } else {
        productoSeleccionado = parseInt(prompt('Opción incorrecta, vuelve a intentarlo'))
        continue
    }

    decision = parseInt(prompt('¿Eso es todo? ¿Deseas terminar tu compra? 1.si - 2.no'))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt('Ingresa el produco que deseas comprar 1-Camiseta 2-Gorro 3-Taza 4-Llavero'))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

alert('El total de su compra es:' + totalCompra)

function calcPrecioConDescuento(valor){
    let descuento = 0
    if (valor<=1000){
        descuento = 5
    } else if (valor>1000 && valor <=1500 ){
        descuento = 10
    }else if (valor>1500 && valor <=2000 ){
        descuento = 15
}else{
    descuento=25
}

let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}