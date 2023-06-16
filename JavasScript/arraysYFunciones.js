/* const miPrimerArray = [];

const arrayNumbers = [1, 2, 3, 4, 5, 6];

const arrayString = ["sol", "luna", "bebida", "parrilla"];

const arrayBooleans = [true, false, true];

const sumaDeNumArrays = arrayNumbers[3] + arrayNumbers[2];
console.log(sumaDeNumArrays);
 */
// Recorrer un Array:
/* for (let i = 0; i < arrayNumbers.length; i++) {
  console.log(arrayNumbers[i]);
} */

//---------- MÉTODOS ----------
// Métodos para agregar:
// PUSH introduce un elemento al final del arreglo.
// UNSHIFT introduce un elemento al principio del arreglo.

/* arrayString.unshift("faso", "merca");
arrayNumbers.push(7, 8, 9); */

//console.log(arrayNumbers);
//console.log(arrayString);

// Métodos para quitar:
// POP elimina el último elemento
// SHIFT elimina el primero

/* arrayString.pop();
arrayNumbers.shift();
console.log(arrayNumbers);
console.log(arrayString);
 */
//SPLICE elimina los indices que le pasemos como parámetros, también podemos agregar asignando una posición y diciendole que no borre ningún elemento.
// El primer parámetro indica desde que posición tiene que empezar a trabajar.
// El segundo parámetro indica cuantos elemetnos debe eliminar.
// El tercer parámetro asigna un dato que agregar en la posición del primer parámetro.

/* arrayString.splice(1, 2, "panchito");
console.log(arrayString);

arrayNumbers.splice(0, 1, "Estos son números: ");
console.log(arrayNumbers);

arrayNumbers.splice(7, 1, "Aca iría el N° nueve");
console.log(arrayNumbers); */

// JOIN método que nos permite concatenar elementos.
/* console.log(arrayString.join(" - "));
 */
// CONCAT este método nos concatena dos arrays diferentes devolviendote uno solo.
/* const perros = ["puflito", "sura", "jack"];
const gatos = ["simon", "negrita", "pupo"];

const mascotas = perros.concat(gatos);
console.log(mascotas); */

//SLICE devuelve una copia de una parte del array que le asignamos dentro de un nuevo array.
// También resive dos parametros, el primer parametro es desde donde empieza a trabajar.
// El segundo es hasta donde trabaja, pero no incluye la ultima indentación.
//Ej: le asignamos un inicio en 0 y que termine en la posición 4, sin embargo, nos va a devolver los elementos desde el 0 al 3, no incluye el 4.
//const dosPerros = perros.slice(0, 2);
//console.log(dosPerros);

// REVERSE invierte el orden de los elementos dentro de un array. Es decir los da vuelta. Este es uno de los denominados métodos destructivos. Quiere decir que modifica el array original.
// Cuano apliquemos métodos destructivos debemos pensar una lógica que nos determine si nos combiene destruir el arra original.
//console.log(gatos.reverse());

// ---------------------------------------------

//forma directa de agregar elementos a un arra
/* const biblioteca = [libro1, libro2, libro3]; */

// Usamos For Of para recorrer un array
/* for (let elemento of estanteria) {
  console.log(elemento.autor, ",", elemento.titulo, ",", elemento.precio);
}
 */
// Usamos For In para recorrer un objeto por dentro.
/* for (let elemento in libro1) {
  console.log(elemento);
} */

//menu();

// ----------------- FUNCIONES DE ORDEN SUPERIOR -----------------

// Son funciones que pueden recibir otras funciones como parametros, y que ademas pueden retornar funciones.

// Ejemplo de funcion que retorna funcion

/* function mayorQue(n) {
  //el retorno de esta funcion es otra funcion, por eso es de orden superior
  return (m) => m > n;
}
console.log(mayorQue(15)); */

/* let mayorQue15 = mayorQue(15); */ // en esta variable se almacena el dato o valor del parametro de la primer funcion para luego poder invocarla llamando al parametro de la funcion interna.
// (m) => m > 15
//console.log(mayorQue15(20)); // devulve true
// (20) => 20 > 15
//console.log(mayorQue15(4)); // devuelve false
// (4) => 4 > 15

//let mayorQue31 = mayorQue(31);
// (m) => m > 31
//console.log(mayorQue31(22)); // devuelve false
// (22) => 22 > 31
//console.log(mayorQue31(56)); // devuelve true
// (56) => 56 > 31

// ------------- FUNCIONES QUE RECIBEN FUNCIONES COMO PARAMETRO --------------

//En sintesis, este tipo de funciones lo que nos permite es recibir otra funcion como parametro.
/* const numImp = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const numPar = [2, 4, 6, 8, 10, 12];
function porCadaUno(array, funcion) {
  for (elemento of array) {
    funcion(elemento);
  }
}
porCadaUno(numImp, console.log);
porCadaUno(numPar, console.log);
// ejemplo de uso de arrow
const duplicado = [];
porCadaUno(numImp, (el) => {
  duplicado.push(el * 2);
});
console.log(duplicado);

// ----------- METODOS DE BUSQUEDA Y TRANSFORMACION --------------

//Son metodos que por parametro reciben una funcion. Es lo que los diferencian a los demas.

//Metodo FOR EACH - muy similar al for of, recorre un array, elemento por elemento.
numImp.forEach((elemento) => {
  console.log(elemento * 7);
});
 */

// Metodo FIND como parametro recibe una funcion de comparacion. Recorre todo el arra que le indiquemos y va a retornar el primer elemento que cumpla con la condicion. Cuando encuentra una coincidencia deja de buscar y retorna lo que fue pedido.
//Ejemplo
/* const cursos = [
  { nombre: "javascript", precio: "150500" },
  { nombre: "react", precio: "180500" },
];
const resultado = cursos.find((el) => el.nombre === "react");
console.log(resultado); */

// ---------------------------------------------

class Libro {
  constructor(id, autor, titulo, precio) {
    this.id = id;
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

const libro1 = new Libro(1, "Liliana Bodok", "Los Tiempos del Venado", 7600);
const libro2 = new Libro(
  2,
  "Eduardo Galeano",
  "Las Venas Abiertas de Latinoámerica",
  8500
);
const libro3 = new Libro(
  3,
  "Gabriel Garcia Marquez",
  "Cien Años de Soledad",
  10000
);
const libro4 = new Libro(
  4,
  "Robert Kishosaki",
  "Padre Rico, Padre Pobre",
  5500
);
const libro5 = new Libro(5, "Liliana Bodok", "Los Dias de la Sombra", 7600)
const libro6 = new Libro(6, "Liliana Bodok", "Los Dias Del Fuego", 8000)


//método PUSH
const estanteria = [];
estanteria.push(libro1, libro2, libro3, libro4, libro5, libro6);

function agregarLibros(array) {
  let autorIngresado = prompt("Ingrese el nombre del autor");
  let tituloIngresado = prompt("Ingrese el título del libro");
  let precioIngresado = parseInt(prompt("Ingrese el valor del libro"));
  // Esta funcion se encarga de agregar e ingresar datos
  const nuevoLibro = new Libro(
    array.length + 1,
    autorIngresado,
    tituloIngresado,
    precioIngresado
  );
  //console.log(nuevoLibro);
  array.push(nuevoLibro);
  mostrarCatalogo(array); 
}

function mostrarCatalogo(array) {
  console.log("Los libros disponibles son: ");
  for (let elemento of array) {
    console.log(elemento.autor, ",", elemento.titulo, ",", elemento.precio);
  }
}

function mostrarCatalogoForEach(arr) {
  console.log("Nuestro catalogo es: ");
  arr.forEach((libro) => {
    console.log(
      `${libro.id} - ${libro.titulo} del autor/a ${libro.autor} que vale ${libro.precio}`
    );
  });
}

function buscarPorTitulo(array){
  let tituloBuscado = prompt("Ingrese el titulo del libro que desea buscar").toLowerCase();
  let tituloEncontrado = array.find(
    //una arrowfunction si no tiene llaves, tiene un return implicito
    (book) => book.titulo.toLowerCase() == tituloBuscado 
  )
  if(tituloEncontrado == undefined){
    console.log(`${tituloBuscado} no se encuentra en nuestro stock`);
  } else {
    console.log(tituloEncontrado);
  }
}

function busquedaPorAutor(arr){
  let autorBuscado = prompt("Ingrese el nombre del autor que está buscando").toLowerCase()
  let busquedaAutor = arr.filter(
  (book) => book.autor.toLowerCase() == autorBuscado
)
    if(busquedaAutor.length == 0){
      console.log(`Para ${autorBuscado} no hay libros en stock`);
    } else {
      mostrarCatalogoForEach(busquedaAutor)
    }
}

//EJEMPLO DE Metodo MAP
/* const productosIva = estanteria.map(
  (libro)=> libro.precio * 1.21
)
console.log(productosIva); */

function ordernarAlfabeticamente (array){
  // copia de un array, para no modificar estanteria
  let alfabeticamente = [].concat(array)
  alfabeticamente.sort(
    (a,b) => {
      if(a.titulo < b.titulo){
        return -1; 
      } else if (a.titulo > b.titulo){
        return 1; 
      } else {
        0
      }
    } 
    )
  mostrarCatalogo(alfabeticamente)
}

function ordenarMenorMayor (array){
  const menorMayor = [].concat(array);
  menorMayor.sort(
    (a,b) => a.precio - b.precio
  )
  mostrarCatalogo(menorMayor)
}

function ordenarMayorMenor (array){
  const mayorMenor = [].concat(array);
  mayorMenor.sort(
    (a,b) => b.precio - a.precio
  )
  mostrarCatalogo(mayorMenor)
}

function ordenar(array){
  let pregunta = parseInt(prompt(`Como le gustaría ordenar:
  1 - Ordenar de Menor a Mayor (precio)
  2 - Ordenar de Mayor a Menor (precio)
  3 - Ordenar Alfabeticamente`))
  switch (pregunta){
    case 1: 
    ordenarMenorMayor(array)
    break; 
    case 2: 
    ordenarMayorMenor(array)
    break; 
    case 3: 
    ordernarAlfabeticamente(array)
    break; 
    default: 
    console.log(`${pregunta} no es válido`);
    break; 
  }
}

function borrarLibro(array){
  console.log(`A partir del catálogo ingrese el id del libro que desea eliminar:`);
  for(let elem of array){
    console.log(`${elem.id} - ${elem.titulo} del autor/a ${elem.autor}`);
  }
  let idEliminar = parseInt(prompt("Ingrese el ID a eliminar"))
  // map: copiar un array con solo los indices.
  let arrayID = array.map((book)=> book.id)
  // indexOf: para averiguar la posicion del elemento que queremos
  let indice = arrayID.indexOf(idEliminar)
  // splice para una vez localizado el elemento, borrarlo
  array.splice(indice, 1)
  mostrarCatalogo(array)
}


function menu() {
  let salirMenu = true;
  do {
    let opcionMenu = prompt(`Ingrese la opcion deseada
1 - Agregar Libro
2 - Borrar Libro
3 - Consultar catálogo
4 - Buscar Libro por título
5 - Buscar Libros de un mismo autor
6 - Ordenar:  
0 - Salir del Menú`);
    switch (opcionMenu) {
      case "1":
        agregarLibros(estanteria);
        break;
      case "2":
        borrarLibro(estanteria);
        break;
      case "3":
        mostrarCatalogo(estanteria);
        break;
      case "4":
        buscarPorTitulo(estanteria);
        break;
      case "5":
        busquedaPorAutor(estanteria);
        break;
      case "6":
        ordenar(estanteria)
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
}

//menu()