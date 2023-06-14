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

/* 
let listaDeProductos = "";
let flag = true;
while (flag) {
  let consultaProducto =
    prompt(`Ingrese el producto deseado con su respectivo número:
  1-Tomate
  2-Papa
  3-Carne
  4-Pollo`);
  if (consultaProducto == 1) {
    listaDeProductos = listaDeProductos + " tomate";
    console.log(listaDeProductos);
    alert("Elegiste Tomate");
  } else if (consultaProducto == 2) {
    listaDeProductos = listaDeProductos + " papa";
    console.log(listaDeProductos);
    alert("Elegiste Papa");
  } else if (consultaProducto == 3) {
    listaDeProductos = listaDeProductos + " carne";
    console.log(listaDeProductos);
    alert("Elegiste Carne");
  } else if (consultaProducto == 4) {
    listaDeProductos = listaDeProductos + " pollo";
    console.log(listaDeProductos);
    alert("Elegiste Pollo");
  } else if (consultaProducto.toUpperCase() === "ESC") {
    alert(`Tu lista de productos esta conformada por: ${listaDeProductos}`);
    flag = false;
  }
}
 */

/* function entrada(palabra) {
  console.log(palabra);
}
console.log(entrada("hola"));
function procesamiento(num) {
  return num * num * num;
}
console.log(procesamiento(7));
function salida(palabra) {
  palabra = prompt("ingrese nombre");
  alert(`hola ${palabra}`);
}
salida() */

/* const numeroRedondo = function () {
  for (let i = 0; i <= 5; i++) {
    let num = parseFloat(prompt("Ingrese un numero decimal"));
    let numRedondo = Math.round(num);
    console.log(numRedondo);
  }
  return numRedondo;
};
numeroRedondo();
 */

/* 
function impuesto() {
  impuestos = parseInt(prompt("Ingresar valor impuesto"));
  porcentaje = parseInt(prompt("Ingresar tasa de interes"));
  porcentaje = porcentaje / 100;
  total = impuestos * porcentaje;
  console.log(impuestos + total);
  return alert(
    `El total de su impuesto sumado a la tasa de interes ingresada es: ${
      impuestos + total
    }`
  );
}
for (i = 1; i <= 5; i++) {
  impuesto();
} */

/* 
let flag = true;
while (flag) {
  let consulta = prompt(`Seleccione:
  1- Transformar Pesos a Dolares
  2- Transformar Dolares a Pesos
  ESC para salir`);
  switch (consulta) {
    case "1":
      monto = parseInt(prompt("Ingrese Monto"));
      cotizarDolar(monto);
      break;
    case "2":
      monto = parseInt(prompt("Ingrese Monto"));
      cotizarPesos(monto);
      break;
    case "ESC":
      flag = false;
      break;
  }
}
function cotizarDolar(pesos) {
  alert(`El total seria de ${Math.round(pesos / 470)} dolares`);
  return console.log(`El total seria de ${Math.round(pesos / 470)} dolares`);
}
function cotizarPesos(dolares) {
  alert(`El total seria de ${Math.round(dolares * 470)} pesos`);
  return console.log(`El total seria de ${Math.round(dolares * 470)} pesos`);
}
 */

/* let bandera = true;
while (bandera) {
  validacion();
}

function validacion(cadena) {
  cadena = prompt("Escribir algo");
  if (cadena.toUpperCase() === "ESC") {
    bandera = false;
  } else if (cadena === "") {
    console.log(`Vuelva a intentarlo`);
    return false;
  } else {
    console.log(`Gracias por su mensaje: ${cadena}`);
  }
}
 */

class Tienda {
  constructor(nombre, direccion, propietario, rubro) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
  }
  estaAbierto(hora) {
    if (hora >= 0 && hora <= 22) {
      if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19)) {
        alert("ABIERTO");
      } else {
        alert("CERRADO");
      }
    } else {
      alert("Para nosotros no existe ese horario");
    }
  }
  esPropietario(nombrePropietario) {
    if (nombrePropietario === this.propietario) {
      alert("CORRECTO");
    } else {
      alert("INCORRECTO");
    }
  }
}
const tiendaUno = new Tienda("Lo de Guido", "Idia 2485", "Guido", "Fotografia");
const tiendaDos = new Tienda(
  "Lo de Marta",
  "India 2485",
  "Marta",
  "Dulces Caseros"
);
const tiendaTres = new Tienda(
  "Lo de Dalit",
  "India 2485",
  "Dalit",
  "Desarrollo Web"
);

// - Aca comienza el bloque para funcion que guarda objetos en un array
const nuevoArray = [];

function agregarTiendaClass() {
  nombreIngresado = prompt("Ingresar NOMBRE");
  direccionIngresado = prompt("Ingresar DIRECCION");
  propietarioIngresado = prompt("Ingresar PROPIETARIO");
  rubroIngresado = prompt("Ingresar RUBRO");
  const nuevaTienda = new Tienda(
    nombreIngresado,
    direccionIngresado,
    propietarioIngresado,
    rubroIngresado
  );
  nuevoArray.push(nuevaTienda);
}

function pedirUsuarioIngresarTiendas() {
  for (i = 0; i < 5; i++) {
    agregarTiendaClass();
  }
  console.log(nuevoArray);
}
// - - Aca termina el bloque de funcion que guarda objetos en un array

// - Aca comienza una fucion para validar nombre de propietarios de Objetos ya definidos.
function valdiarNombrePropietarios() {
  for (i = 0; i < 5; i++) {
    let nombrePropietarioIngresado = prompt("Ingrese un nombre de propietario");
    switch (nombrePropietarioIngresado) {
      case "Guido":
        tiendaUno.esPropietario(nombrePropietarioIngresado);
        break;
      case "Marta":
        tiendaDos.esPropietario(nombrePropietarioIngresado);
        break;
      case "Dalit":
        tiendaTres.esPropietario(nombrePropietarioIngresado);
        break;
      default:
        alert("INCORRECTO");
        break;
    }
  }
}
// - - Aca termina una fucion para validar nombre de propietarios de Objetos ya definidos.

//  - Aca comienza una funcion para crear objetos a partir de una funcion donde se registren clientes  su presupuesto.

/* class Cliente {
  constructor(nombre, presupuesto, tarjetaDescuento, numCelular) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.tarjetaDescuento = tarjetaDescuento;
    this.numCelular = numCelular;
  }
  transferirDinero(valor) {
    if (valor >= 0 && valor <= this.presupuesto) {
      this.presupuesto = this.presupuesto - valor;
      console.log(
        `Se envió su transferencia, su presupuesto es de: $${this.presupuesto}`
      );
    } else {
      console.log("No tiene saldo suficiente");
    }
  }
}

const guido = new Cliente("Guido", 100, true, 3548501503);
const dalit = new Cliente("Dalit", 250, true, 351321654);
const nemo = new Cliente("Emiliano", 1000, false, 351123456);

function crearCliente() {
  let nombreCliente = prompt("Ingresar nombre del Cliente");
  let presupuestoCliente = parseInt(prompt("Ingresar presupuesto del Cliente"));
  let descuentoCliente = prompt(
    "Ingresar SI o NO para saber si el Cliente tiene descuento."
  );
  let celCliente = parseInt(prompt("Ingresar número de celular del Cliente"));
  if (descuentoCliente.toUpperCase() === "SI") {
    descuentoCliente = true;
  } else {
    descuentoCliente = false;
  }
  const nuevoCliente = new Cliente(
    nombreCliente,
    presupuestoCliente,
    descuentoCliente,
    celCliente
  );
  console.log(nuevoCliente);
}

function averiguarPresupuesto() {
  let num = parseInt(prompt("Escriba el monto que desea averiguar"));
  if (
    num <= guido.presupuesto &&
    num <= dalit.presupuesto &&
    num <= nemo.presupuesto
  ) {
    alert("Todos tienen saldo suficiente");
  } else if (num <= dalit.presupuesto && num <= nemo.presupuesto) {
    alert("Dos clientes tienen el saldo suficiente");
  } else if (num <= nemo.presupuesto) {
    alert("Solo un cliente tiene el saldo suficiente");
  }
}

for (i = 0; i < 5; i++) {
  averiguarPresupuesto();
} */

// - - Aca termina funcion para guardar clientes  averiguar sus presupuestos

const bigFour = ["Pierce", "Allen", "Garnet", "Rondo"];
/* for (i = 0; i < bigFour.length; i++) {
  console.log(
    `Los integrantes del Big Four de los Celtics son: ${i} - ${bigFour[i]}`
  );
} */

const equipo = [];
equipo.push(bigFour);

let flag = true;
/* while (flag) {
  let integrante = prompt(
    "Ingrese el NOMBRE del miembro del equipo. ESC para salir"
  );
  if (integrante.toUpperCase() === "ESC") {
    flag = false;
  } else {
    equipo.push(integrante);
    console.log(equipo);
  }
} */

class Jugador {
  constructor(nombre, numCamiseta, edad, estado) {
    this.nombre = nombre;
    this.numCamiseta = numCamiseta;
    this.edad = edad;
    this.estado = estado;
  }
}
const jugador1 = new Jugador("Guido", 12, 25, "Sin Lesiones");
const jugador2 = new Jugador("Emiliano", 17, 29, "Leve Esguince");
const jugador3 = new Jugador("Facundo", 7, 23, "Ligamentos Cortados");
const jugador4 = new Jugador("Manuel", 23, 25, "Sin Lesiones");
const jugador5 = new Jugador("Julian", 10, 33, "Sin Lesiones");

equipo.push(jugador1, jugador2, jugador3, jugador4, jugador5);
//console.log(equipo);

function buscarJugador(equipo, jugador) {
  let busquedaJugador = equipo.find((el) => el.nombre === jugador);
  console.log(busquedaJugador);
}

let bandera = true;
/* while (bandera) {
  let nomUsuario = prompt("Que jugador está buscando?");
  buscarJugador(equipo, nomUsuario);
  if (nomUsuario.toUpperCase() === "ESC") {
    bandera = false;
  }
} */

function filtroJugadores(equipo, edad) {
  const filtrado = equipo.filter((el) => el.edad >= edad);
  console.log(filtrado);
}
// filtroJugadores(equipo, 25);

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
