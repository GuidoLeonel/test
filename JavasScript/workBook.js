// --------------- IF ELSE -------------------
/* let name = "GUIDO";
let flag = true;
do {
  let userName = prompt("Adivina el nombre de la persona que rompió el vidrio");
  if (userName.toLocaleUpperCase() === "GUIDO") {
    console.log("Fui yo");
    flag = false;
  } else {
    console.log("Yo no fui");
    let repite = prompt("Querés repetir? Responda si o no");
    if (repite.toLowerCase() === "no") {
      flag = false;
    }
  }
} while (flag); */

/* let letra = "Y";
let flag = true;
while (flag) {
  let ask = prompt("Adivine la letra para seguir adelante");
  if (ask.toUpperCase() === "Y") {
    alert("Bien hecho, podes seguir adelante");
    flag = false;
  } else {
    alert("Incorrecto");
    let repet = prompt("Desea repetir o irse?");
    if (repet.toUpperCase() === "NO") {
      flag = false;
    }
  }
}
 */

/* let bandera = true;
while (bandera) {
  let personaje = parseInt(
    prompt(`Seleccione un personaje seleccionando con el numero:
1 - Homero
2 - Marge
3 - Bart 
4 - Lisa`)
  );
  if (personaje <= 0 || personaje >= 5) {
    console.log("Numero Invalido, vuelva a intentarlo.");
  } else if (personaje === 1) {
    console.log("Elegiste a Homero");
    bandera = false;
  } else if (personaje === 2) {
    console.log("Elegiste a Marge");
    bandera = false;
  } else if (personaje === 3) {
    console.log("Elegiste a Barte");
    bandera = false;
  } else if (personaje === 4) {
    console.log("Elegiste a Lisa");
    bandera = false;
  }
}
 */

/* let presupuesto = parseInt(prompt("Digame su presupuesto"));
if (presupuesto >= 0 && presupuesto <= 1000) {
  alert("Su presupuesto es bajo");
} else if (presupuesto >= 1001 && presupuesto <= 3000) {
  alert("Su presupuesto intermedio");
} else if (presupuesto >= 3001) {
  alert("Presupuesto alto");
} */

// COMPRA DE CUATRO PRODUCTOS

/* let bienvenida = prompt(
  "Bienvenid@ a nuestro E-Comerce! ¿Le gustaría realizar una compra? Responda si o no"
);
if (bienvenida.toLowerCase() === "si") {
  compraCuatroProductos();
} else {
  alert("Muchas gracias  por pasar, esperamos verlo pronto");
}

function compraCuatroProductos() {
  let instruccion = alert(
    "A continuación debe ingresar cuatro (4) productos de almacén, no menos."
  );
  for (i = 1; i < 5; i++) {
    let producto = prompt(`Ingrese el producto n° ${i}`);
    if (producto === "") {
      alert("Acaba de ingresar datos incorrectos, vuelva a intentar");
      i--;
    } else {
      console.log(`Usted seleccionó ${producto}`);
      if (i <= 3) {
        alert("Muy bien, vamos al siguiente");
      } else if (i == 4) {
        alert("Muchas gracias por comprar con nostros");
      }
    }
  }
}
 */

/* let frase = prompt("Ingrese una frase");
let num = parseInt(
  prompt("Ingrese la cantidad de veces que quiere que se repita la frase")
);
for (i = 1; i <= num; i++) {
  alert(frase + " " + i);
} */

/* let numLados = parseInt(prompt("Ingrese la cantidad de lados"));
for (i = 1; i <= numLados; i++) {
  if (i >= 5) {
    break;
  } else {
    alert(`Lado ${i}`);
  }
}
 */

/* let inicio = alert(
  "Comencemos, debe ingresar el Nombre y Apellido de sus 10 alumnos"
);
let lista = "Lista: ";
for (i = 1; i < 11; i++) {
  let alumnos = prompt(`Alumno n°${i}`);
  if (alumnos === "") {
    alert("No ingresó ningún dato, vuelva a intentarlo");
    i--;
  } else {
    console.log(`Alumn@ ${alumnos}`);
    lista = lista + ", " + alumnos;
    console.log(lista);
  }
}
alert(lista); */

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

// ----------------- FUNCIONES ------------------

// CALCULO DE INTERESES

/* let tasaInteresTrimestral = 91;
function calcularPlazoFijo() {
  let plata = parseInt(prompt("Cuanta plata quiere invertir"));
  tasaInteresTrimestral = (tasaInteresTrimestral / 12).toFixed(2);
  let interesTotal = parseFloat(
    (plata * (tasaInteresTrimestral * 0.01)).toFixed(2)
  );
  alert(
    `Inviertiendo ${plata} usted ganará $${interesTotal} de intereses, que representan el %${tasaInteresTrimestral} mensual. El total sería de $${
      plata + interesTotal
    }`
  );
}
calcularPlazoFijo(); */
