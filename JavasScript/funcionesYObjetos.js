// -------------- FUNCIONES --------------

//FUNCIONES DECLARATIVAS O TRADICIONALES
/* function saludoAlumno(nombre){
    console.log(`Hola alumno: ${nombre}`);
}

function pedirNombre(){
    let nombreIngresado = prompt("Ingrese su nombre")
    saludoAlumno(nombreIngresado) // Concatenando funciones, debe estar YA DECLARADA. 
}

pedirNombre() */

// ----------- FUNCTION con RETURN

/* 
function sumar(num1, num2){
    let resultado = num1 + num2; 
    return resultado // el RETURN es lo que nos permite trascender fuera del ambito de la funcion.
}
let suma1 = sumar(11, 5)
console.log(suma1)
let suma2= sumar(23, 7);
console.log(suma2);

function restar(num1, num2){
    return num1 - num2; 
}
let resta1 = restar(100, 87)
console.log(resta1);
let resta2 = restar(45, 21)
console.log(resta2); 
*/

// ----------- CALCULADORA

/*
function ingresarDatosCalculadora(){
    let primNum = parseInt(prompt("Ingrese primer numero"))
    let segNum = parseInt(prompt("Ingrese segundo numero"))
    let tipoDeOperacion = prompt("Ingrese tipo de operacion")
    console.log(calculadora(primNum, segNum, tipoDeOperacion))
}

function calculadora(primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero; //El RETURN sirve como una especia de break, es decir, todo lo que este escrito luego del return dentro del mismo ambito no lo va a leer. Lee una funcion, encuentra el return, devuelve un resultado y sale. 
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
            default:
                return 0;
    }
}

console.log(calculadora(145,8,"*")); 
ingresarDatosCalculadora()
*/
// Es importante tener en cuenta que para cualquier estructura, donde ubiquemos un return, allí se corta el proceso.

// ----------- SCOPE - es el ambito en el que se desarrolla un bloque de código.
// Si es GLOBAL, quiere decir que no pertenece a ningun bloque de código particular, quiere decir que es no está sumergido dentro de un ámbito específico.
// Si es LOCAL refiere a una variable o estructura de datos que se encuentra sumergida dentro de un bloque de código determinado. Las variables locales solo existen dentro de su ámbito, su bloque de código.

// ----------- FUNCIONES ANÓNIMAS - no tienen nombre que las describan, directamente abrimos parentesis y comenzamos la funcion.

/* const suma = function (a, b){
    return a + b; 
}
const resta = function (x,y){
    return x - y;
} */

// La buena práctica dictamina que lo mejor es siempre guardarlas dentro de un CONST.

// ----------- ARROW FUNCTIONS
//Son funciones mas minimalistas, mas simplificadas en un sentido sintáctico.

/* const mult = (a, b) => { return a*b}

const div = (x, y) => x / y; // en esta linea no necesitamos ni llaves ni la palabra reservada return, dado que al ser de una sola linea, se le llama RETURN IMPLICITO

const sumar3 = (a, b, c) => {
    let resultado = a + b + c; 
    return resultado 
} */
// No necesariamente son funciones de una sola linea de código.

/* console.log(mult(5,5));
console.log(div(10,5));

 */

// ----------- EJERCICIOS -----------

/*
function agregarLibros() {
  let autorIngresado = prompt("Ingrese el nombre del autor");
  let tituloIngresado = prompt("Ingrese el título del libro");
  let precioIngresado = parseInt(prompt("Ingrese el valor del libro"));
  // Esta funcion se encarga de agregar e ingresar datos
  const libroIngresado = {
    autor: autorIngresado,
    titulo: tituloIngresado,
    precio: precioIngresado,
  };
  console.log(libroIngresado);
  mostrarDatosLibro(autorIngresado, tituloIngresado, precioIngresado);
}


function mostrarDatosLibro(autor, titulo, precio) {
  console.log(
    `El libro fue escrito por ${autor}, su título es ${titulo} y cuesta ${precio}`
  );
}
*/

/*
let salirMenu = true;
do {
  let opcionMenu = prompt(`Ingrese la opcion deseada
1 - Agregar Libro
2 - Borrar Libro
3 - Consultar catálogo
4 - Oredenar de mayor a menor por precio
5 - Buscar Libro por título
0 - Salir del Menú`);
  switch (opcionMenu) {
    case "1":
      agregarLibros();
      break;
    case "2":
      console.log("Borrar Libro");
      break;
    case "3":
      console.log("Consultar catálogo");
      break;
    case "4":
      console.log("Ordenar");
      break;
    case "5":
      console.log("Buscar Libro");
      break;
    case "0":
      console.log("Salir Menu");
      salirMenu = false;
      break;
    default:
      console.log("Opción no válida.");
      break;
  }
} while (salirMenu);
*/

// ----------- OBJETOS  -----------

// Un objeto es una coleccion de datos relacionados que construyen una entidad. Nos permite asociar varios datos en un solo lugar, entidad y objeto.
// Recopilamos caracteristicas de diferentes entidades.

// EJ:
/*
const persona1 = {
  nombre: "Homero",
  edad: 39,
  calle: "Av. Siempreviva 742",
};
*/

// Con el armado de Objetos llegamos a una estructura que nos permite muchas mas posibilidades.
// Las llaves son lo que lo identifican primero.

// ----------- OBJETOS LITERALES

/*
const integrante1 = {
  nombre: "Guido",
  edad: 25,
  rol: "Estudiante",
  ciudad: "Villa Carlos Paz",
};

console.log(integrante1);

const integrante2 = {
  nombre: "Luciano",
  edad: 28,
  rol: "Tutor",
  ciudad: "Mendoza",
};

console.log(integrante2);

const integrante3 = {
  nombre: "Fran",
  edad: 30,
  rol: "estudiante",
  ciudad: "La Plata",
  helado: "Chocolate",
};

console.log(integrante3);
*/

// FORMAS DE ACCEDER A UN OBJETO
// con [ ]

/* console.log(integrante1["rol"]);
console.log(integrante2["nombre"]);
console.log(integrante3["helado"]); */

// con .
/* console.log(integrante1.ciudad);
console.log(integrante2.rol);
console.log(integrante3.edad); */

// REASIGNAR valores
/* integrante1["nombre"] = "Guido Puyo";
console.log(integrante1);
integrante2.nombre = "Marcos";
console.log(integrante2); */

// ------------- FUNCIONES CONSTRUCTORAS
//Este tipo de funcion se declara con el nombre de la misma comenzando con mayúscula, es por una cuestión de combención

/* function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}

const persona2 = new Persona("Dalit", 22, "India 2485");

console.log(persona2);

function Participante(nombre, edad, rol, ciudad) {
  this.nombre = nombre;
  this.edad = edad;
  this.rol = rol;
  this.ciudad = ciudad;
  // ----- METODO PERSONALIZADO linea siguiente
  this.mostrarInfo = function () {
    console.log(
      `La persona ${this.nombre} tiene ${this.edad} años, tiene el rol de ${this.rol} y vive en ${this.ciudad}`
    );
  };
  this.duplicarEdad = function () {
    this.edad = this.edad * 2;
    console.log(`la nueva edad es ${this.edad}`);
  };
}

const participante1 = new Participante(
  "Carlos",
  25,
  "nose",
  "Capilla del Monte"
);
console.log(participante1);

const participante2 = new Participante("Arjona", 65, "Cantante", "Puerto Rico");
console.log(participante2);
console.log(participante2.rol);
console.log(participante1.rol); */

// ----------- METODOS
// Los metodos se limitan a donde pueden ser ejecutados a la clase que se hayan creado a partir de esa clase. Tienen un dominio restringido, un campo de aplicacion restringido.
// También los llamamos métodos personalizados porque van a funcionar dentro del ambito de creación de la función constructora.
// En otras palabras, son funciones que escribimos dentro de un objeto la cual va a funcionar solo para dicho objeto constructor, si tratamos de usarla con otro objeto nos va a dar error.
//Ejemplo de uso de llamado de metodos personalizados.
/* participante1.mostrarInfo();
participante2.mostrarInfo();

participante1.duplicarEdad();
participante2.duplicarEdad();
console.log(participante2); */

// ---------- OPERADOR IN y FOR...IN -----------

// El operador FOR...IN recorre un objeto para devolverte lo especificado.

/* for (const n in participante1) {
  console.log(participante1[n]);
}

let i = 0;
for (const n in participante2) {
  i++;
  console.log(`El valor de la propiedad N° ${i} es: ${participante2[n]}`);
}
 */
// ---------- CLASES  ----------

// Las clases proveen una sintaxis mucho mas clara y simple para crear objetos personalizados. Son una equivalente al empleo de la funcion constructora, y permite definir distintos tipos de metodos.

/* class Persona {
  constructor(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
  }
  hablar() {
    console.log(`Hola soy ${this.nombre}`);
  }
}
const persona1 = new Persona("Leonel", 55, "Ruben Dario 1551");
persona1.hablar();
console.log(persona1); */

/* class Auto {
  constructor(marca1, modelo1, precio1) {
    this.marca = marca1;
    this.modelo = modelo1;
    this.precio = precio1;
  }
}

const fitito = new Auto("fiat", "600", 500000);
console.log(fitito); */

/* class Libro {
  constructor(autor, titulo, precio) {
    this.autor = autor;
    this.titulo = titulo;
    this.precio = precio;
  }
  mostrarInfoLibro() {
    console.log(
      `El autor del libro ${this.titulo} es ${this.autor} y cuesta ${this.precio} `
    );
  }
}

const libro1 = new Libro("Liliana Bodok", "Los Tiempos del Venado", "$7600"); //declaro un nuevo objeto
libro1.mostrarInfoLibro(); // Llamo al metodo personalizado dentro del objeto. */

// FUNCION PARA CREAR OBJETOS A PARTIR DE INGRESO DE DATOS
/* function agregarLibroClass() {
  let autorIngresado = prompt("Ingrese el nombre del autor");
  let tituloIngresado = prompt("Ingrese el título del libro");
  let precioIngresado = parseInt(prompt("Ingrese el valor del libro"));
  const libroNuevo = new Libro(
    autorIngresado,
    tituloIngresado,
    precioIngresado
  );
}
agregarLibroClass(); */
