//Van ambos códigos en main. Comentar uno para ejecutar el otro 😊

//EJEMPLO WHILE

let calificacion = prompt ("Ingresa la calificación obtenida");

while(calificacion < 7) { 
    alert("Calificación insuficiente. Debes repetir la prueba 😣");
    calificacion= prompt("¿Repetiste la prueba? Ingresa tu calificación");
}
    alert("¡Felicitaciones! Prueba superada 😎");
    

//EJEMPLO FOR

for (let i = 1; i <= 5; i++) {

    let nombreUsuario = prompt("Ingresa tu nombre");

    alert("Hola "+nombreUsuario+" Tienes el  N° "+i);
}
    