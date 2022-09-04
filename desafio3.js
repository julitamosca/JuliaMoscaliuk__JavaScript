//ARRAYS

/*const numeros = [1,2,3,4,5];
console.log (numeros[0])
console.log (numeros[3])

let resultado = numeros[1] + numeros[2]
console.log (resultado)*/

/*const numeros = [1,2,3,4,5];
for (let i=0; i<5; i++) {
    alert(numeros[i]);
}*/

const miArray = ["marca", 3, "palabra"];
miArray.push( 'otro elemento')
miArray.unshift ('elemento al principio')
// miArray.shift()
// miArray.pop()
console.log(miArray.length)

miArray.splice(2,2)
console.log (miArray)
console.log (miArray.join ("*"))

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < numeros.length; i++) {
    alert(numeros[i]);
}
console.log(numeros.length)*/