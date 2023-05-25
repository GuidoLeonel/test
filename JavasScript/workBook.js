// Actividad Nº 1 


// --------------- CICLO FOR ---------------

//RESTO DE DIVISION POR 3
/* let numerUsuario = parseInt(prompt("Ingrese un numero y le devolveré los numeros que divididos por 3 tienen como resto 2"))

//let numero = 14; 
//let resto = numero % 3; 
//console.log(resto); 

for(let i = 1; i <= numerUsuario; i++){
    if(i%3===2){
        console.log(i);
    }
}
 */



//LINEA DE LETRAS
/* let letra = prompt("Ingrese una letra");
let numero = parseInt(prompt("Ingrese un número")); 
let acumulador = ""
for(let i = 1; i <= numero; i++){
    acumulador += letra
}
console.log(acumulador); */



// CONTADOR
/* let num = 0;
for(let i = 0; i < 6; i++){
    
    if(i===5){
        num++
        i = 0
        console.log(`${num}:${i}`);
    
    } else if(num === 2) {
        i = 7
    } else {
        console.log(`${num}:${i}`);
    }
} */
// mejor solucion al codigo anterior ^
/* let izq
let derecha
for(izq = 0; izq < 2; izq++){
    for(derecha=0; derecha < 5; derecha++){
        console.log(`${izq}:${derecha}`);
    }
} */



// TRIANGULO
/* let ast = "*"
let acum = ""; 
let number = parseInt(prompt("Ingrese un numero para dibujar un triangulo"))
for(let i = 1; i <= number; i++){
    acum += ast
    console.log(acum);
} */



//SUMAR DESDE 0 HASTA... 
/* let acum = 0 
let num = parseInt(prompt("Ingrese un numero para saber la suma de todos los enteros hasta dicho numero"))
for(i = 0; i <= num; i++){
    acum += i
}
console.log(`Los números del 0 a ${num} suman ${acum}`); */



// NUMEROS SEPARADOS POR GUIONES
/* let acum = "" 
let num = parseInt(prompt("Ingrese un numero para separar todos los numeros enteros con un guion hasta dicho numero"))
for(i = 0; i <= num; i++){
    acum += `-${i}`
}
console.log(`${acum}`); */



// --------------- CICLO WHILE ---------------

/* let numero = 20; 
while(numero <= 70 ){
    console.log(`El número es: ${numero}`);
    numero++
} */



/* let letra 
do {
    letra = prompt("Ingrese una letra")
} while (letra.toUpperCase() !== "A"); */


/* 
let adivinanza = "A"
while(adivinanza){
    let pregunta = prompt("Adivine la letra para poder ingresar al sitio")
    if(pregunta.toUpperCase()==="A"){
        adivinanza = false;
    }
} */

