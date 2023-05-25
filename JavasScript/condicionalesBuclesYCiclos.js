// Condicional IF Else 
//let color = "AZUL"; 

// EL metodo .toLowerCase recibe un parametro string y transforma todas las mayusculas en minusculas. Sirve mucho para validaciones de condiciones.

/* if (color.toLocaleLowerCase() == "azul") {
    console.log("este color es azul");
} else {
    console.log("este color no es azul")
} */

// -------------- Operadores Logicos --------------


// -------------- OR || --------------

/* if (color.toLocaleLowerCase() == "azul" || color.toLocaleLowerCase() == "amarillo" || color.toLocaleLowerCase() == "rojo" ) {
    console.log(`este color es ${color.toLocaleLowerCase()} y es primario`);
} else {
    console.log(`el color ${color} no es primario`)
}
 */

// -------------- AND && y NOT !== --------------

/* let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let sexo = prompt("Ingrese su sexo (masculino o femenino)")

if (sexo.toLocaleLowerCase() === "femenino") {
    if((nombre != "")&&(apellido != "")){
        alert(`Hola Señorita ${nombre} ${apellido}`)
    } else {
        alert("Ha ingresado datos erroneos")
    }
} else if(sexo.toLocaleLowerCase()==="masculino"){
    if((nombre != "")&&(apellido != "")){
        alert(`Hola Señor ${nombre} ${apellido}`)
    } else {
        alert("Ha ingresado datos erroneos")
    }
} */

// -------------- CICLOS / ITERADORES -------------- 

// -------------- CICLO FOR - es un ciclo por conteo. Se divide en tres partes. Desde, hasta y la actualizacion. 

/* for(let i = 0; i <= 10; i++){
    console.log(`Este es el numero ${i}`);
} */

//preguntamos al usuario un numero y nosotros le devolvemos la tabla del 0 al 10 de ese numero. 

/* let numero = parseInt(prompt("Ingrese un numero y le devuelvo la tabla de dicho numero."))

for(let i = 0; i <= 10 ; i++){
    console.log(`${numero} por ${i} es igual a ${(numero*i)}`);
} */



// Pedir al usuario la cantidad de notas, preguntarle cada una de esas notas. Sacar promedio de las notas ingresadas y suma total de las notas. 

/* let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar."))

let totalDeNotas = 0; */ //En esta linea declaramos un acumulador en 0 para poder ir incrementando un determinado valor. 
 
/* for(let i = 1; i <= cantidadNotas; i++){
    let notaIndividual = parseInt(prompt(`Agregue de la nota nº${i}`));
    totalDeNotas = notaIndividual + totalDeNotas;  // En esta linea estamos sumando el valor declarado de la variable acumulable fuera del scope mas la nota que el usuario ingresa.
    
}
console.log(`El total de las notas es: ${totalDeNotas}`);
let promedio = totalDeNotas / cantidadNotas; 
console.log(`El promedio de sus notas es: ${promedio}`); */


// -------------- Sentencia Break - es una palabra reservada que se utiliza dentro de un ciclo para cortar una iteracion, se recomienda NUNCA usarla. 
// -------------- Sentencia Continue - es una sentencia que se utiliza para saltear una determinada repeticion y seguir con la próxima. 



// -------------- CICLO WHILE - es un ciclo que es condicional, evalua una condicion y a partir de eso se ejecuta o no. 

/* let preguntaInicio = prompt("Desea ingresar libros en nuestro sistema? Responda Si")
// dato bandera boolean - esta variable sirve de stop para un ciclo while, la utilizamos de manera que en algun momento del codigo querramos modificar su valor para poder detener el ciclo.
let bandera
if(preguntaInicio.toUpperCase()=="SI"){
    bandera = true
}

while(bandera){
    let autor = prompt("Ingrese el nombre del autor");
    let libro = prompt("Ingrese el nombre del libro");
    console.log(`El nombre del autor es ${autor} y escribio el libro ${libro}`);
    let pregunta = prompt("Quiere seguir ingresando libros? Escriba ESC si no quiere ingresar mas libros");
    if(pregunta.toUpperCase() == "ESC"){
        bandera=false; 
    }
} */



// -------------- DO WHILE - se ejecuta al menos una vez si o si, y dsps en la condicion va a evaluar si dicha condicion se sigue cumpliendo, si es asi ejecuta el codigo nuevamente, de lo contrario se sale. 

/* 
let ganador = false;
let contador = 1; 
do {
    let adivinanza = prompt(`Que tiene 6 cara y 21 ojos? Cance numero ${contador}`)
    if(adivinanza.toLowerCase()=="dado"){
        console.log(`Felicitaciones has ganado. La respuesta es ${adivinanza}`);
        ganador = true;  
    } else{
        console.log("La respuesta no es correcta siga intentando")
        contador++
        if(contador == 4){
            console.log("Perdiste");
        } 
    }
} while(!ganador && contador < 4)  */



// -------------- SWITCH - es una estructura condicional, que se puede comparar con un if. Tiene distintos casos de uso. En este caso tenemos una palabra reservada que es default una entrada en caso de que ninguna condicion se cumpla. Lo utilizo cuando tengo casos fijos, si  tengo que verificar muchas condiciones diferentes utilizo if else anidados. 

/* let color2 = "azul"
switch(color2){
    case "rojo":
        console.log("Este color es Rojo");
    break
    case "amarillo":
        console.log("Este color es Amarillo");
    break
    case "azul":
        console.log("Este color es Azul");
    break
    default:
        console.log("Este no es ningun primario");
        break; 
} */



// -------------- CONSTRUCCION DE MENU --------------

/* let salirMenu = true; 
do{
let opcionMenu = prompt(`Ingrese la opcion deseada
1 - Ingresar Cantidad de Notas
2 - Borrar Libro
3 - Consultar catálogo
4 - Oredenar de mayor a menor por precio
5 - Buscar Libro por título
0 - Salir del Menú`)
switch(opcionMenu){
    case "1":
        let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar."))
        let totalDeNotas = 0;
        for(let i = 1; i <= cantidadNotas; i++){
            let notaIndividual = parseInt(prompt(`Agregue de la nota nº${i}`));
            totalDeNotas = notaIndividual + totalDeNotas;  // En esta linea estamos sumando el valor declarado de la variable acumulable fuera del scope mas la nota que el usuario ingresa.
            
        }
        console.log(`El total de las notas es: ${totalDeNotas}`);
        let promedio = totalDeNotas / cantidadNotas; 
        console.log(`El promedio de sus notas es: ${promedio}`); 
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
} while (salirMenu) */



