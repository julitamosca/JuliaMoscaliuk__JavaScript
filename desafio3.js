//ARRAYS - Desafío entregable - se toma el codigo del desafío anterior y se suma la consigna de ARRAYS


let totalCompra = 0
let agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
let seguirComprando = true

let productosLocales = []

const camiseta = {
    nombre: 'Camiseta',
    precio: 700,
}
const gorro = {
    nombre: 'Gorro',
    precio: 300,
}
const taza = {
    nombre: 'Taza',
    precio: 200,
}
const llavero = {
    nombre: 'Llavero',
    precio: 100,
}
productosLocales.push(camiseta)
productosLocales.push(gorro)
productosLocales.push(taza)
productosLocales.push(llavero)
console.log(productosLocales)

while (seguirComprando === true) {
    if (agregarAlCarrito === 1) {
        totalCompra = totalCompra + camiseta.precio
    } else if (agregarAlCarrito === 2) {
        totalCompra = totalCompra + gorro.precio
    } else if (agregarAlCarrito === 3) {
        totalCompra = totalCompra + taza.precio
    } else if (agregarAlCarrito === 4) {
        totalCompra = totalCompra + llavero.precio
    } else {
        agregarAlCarrito = parseInt(prompt('Opción incorrecta, vuelve a intentarlo: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
        continue
    }

    decision = parseInt(prompt('¿Quisieras agregar otro producto? 1.si - 2.no'))
    if (decision === 1) {
        agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: 1-Camiseta 2-Gorro 3-Taza 4-Llavero'))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

alert('El total de su compra es: $' + totalCompra + ' Pero te espera un increible descuento.')

function precioFinal(monto) {
    let descuento = 0
    if (monto <= 500) {
        descuento = 5
    } else if (monto > 500 && monto <= 1500) {
        descuento = 7
    } else if (monto > 1500 && monto <= 2000) {
        descuento = 10
    } else {
        descuento = 12
    }

    let montoDescuento = monto * (descuento / 100)
    monto = monto - montoDescuento
    return monto
}

let precioUltimo = precioFinal(totalCompra)
alert('El precio final de tu compra es: $' + precioUltimo)



//ARRAYS - practica 

/*const numeros = [1,2,3,4,5];
console.log (numeros[0])
console.log (numeros[3])

let resultado = numeros[1] + numeros[2]
console.log (resultado)*/

/*const numeros = [1,2,3,4,5];
for (let i=0; i<5; i++) {
    alert(numeros[i]);
}

const miArray = ["marca", 3, "palabra"];
miArray.push( 'otro elemento')
miArray.unshift ('elemento al principio')
// miArray.shift()
// miArray.pop()
console.log(miArray.length)

miArray.splice (2,2)
console.log (miArray)
console.log (miArray.join (" * "))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < numeros.length; i++) {
    alert(numeros[i]);
}
console.log(numeros.length)

const perros = ["Puppy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);
console.log(masculinos)
console.log (nombres.indexOf('Rita'))
console.log(nombres.includes('Julieta'))

nombres.reverse()
console.log(nombres)*/
