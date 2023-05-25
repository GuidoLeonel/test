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
function agregarLibros(){
    let autorIngresado = prompt("Ingrese el nombre del autor")
    let tituloIngresado = prompt("Ingrese el título del libro")
    let precioIngresado = parseInt(prompt("Ingrese el valor del libro"))
    // Esta funcion se encarga de agregar e igresar datos
    mostrarDatosLibro(autorIngresado, tituloIngresado, precioIngresado)
}

function mostrarDatosLibro (autor, titulo, precio){
    console.log(`El libro fue escrito por ${autor}, su título es ${titulo} y cuesta ${precio}`); 
} 

let salirMenu = true; 
do{
let opcionMenu = prompt(`Ingrese la opcion deseada
1 - Agregar Libro
2 - Borrar Libro
3 - Consultar catálogo
4 - Oredenar de mayor a menor por precio
5 - Buscar Libro por título
0 - Salir del Menú`)
switch(opcionMenu){
    case "1":
        agregarLibros()
        break
    case "2":
        console.log("Borrar Libro");
        break
    case "3":
        console.log("Consultar catálogo");
        break
    case "4":
        console.log("Ordenar");
        break
    case "5":
        console.log("Buscar Libro");
        break
    case "0":
        console.log("Salir Menu");
        salirMenu = false
        break
    default:
        console.log(("Opción no válida."));
        break
}
} while (salirMenu)
*/

