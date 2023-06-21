// -------------------- DOM --------------------
// - Document Object Model

// - Es una estructura de objetos generada por el navegador. Se le puede interpretar como un árbol donde se va desglozando en diferentes ramas.

// - Cada etiqueta HTML es un nodo, cada una genera dos nodos, una es el nodo ELEMENTO que es la propia etiqueta y el otro nodo es el nodo texto. Puede contener información, sin embargo no impresindible.

// document.body va a ser el objeto que no permita trabajar sobre todo nuestro archivo.

//PRIMER FORMA DE CAPTURAR ELEMETOS
// GET ELEMENT/S
// Dentro de GET ELEMENT hay 3 maneras, acceder mediante etiquetas.

// -- -- Nos devuelve un HTML Collection en forma de array.
/* let etiquetasH5 = document.getElementsByTagName("h5");
for (let nodo of etiquetasH5) {
  console.log(nodo.innerText);
}

//Seguna manera con GET ELEMENT by class. El cual tmb nos devuelve un HTML Collection en forma de array.
let motivacion = document.getElementsByClassName("motivacional");
// La manera de capturar el texto dentro de una etiqueta, teniendo en cuenta que se nos va a devolver un array, debemos indicar un elemento puntual "[1]" por ejemplo, y a ese elemento le asignamos .innerText
console.log(motivacion[0].innerText);

// La tercera es a traves de ID
// NO me devuelve un HTML Collection, sino que el elemento/etiqueta.
let fraseDom = document.getElementById("frase");
console.log(fraseDom);
console.log(fraseDom.innerText);

// -- --  SEGUNDA FORMA DE ACCEDER AL DOM
//QUERY selector - similar al get element, tiene una sintaxis a css.
// Nos devuelve un nodo directamente
let titulo = document.querySelector("#titulo");
console.log(titulo);

// por id
let listaPaises = document.querySelector("#listaPaises");

// por class
// si son varios elementor los que debe capturar = querySelectorAll - sino captura el primero
let paises = document.querySelectorAll(".paises");
console.log(paises);

//por tag
//no se usa tanto porque es menos controlable, captura todas las etiquetas que le asignemos dentro del documento.
let listaLi = document.querySelectorAll("li");
console.log(listaLi);

//modificar texto de un nodo
fraseDom.innerText = "Nueva frase motivacional. Clase 5 - DOM y EVENETOS";

// Inner HTML accede o redefine el texto o la etiqueta que tenemos dentro del HTML
let listaCiudades = document.getElementById("listaCiudades");
// un = reescribe los datos de la etiqueta
// si queremos sumar un dato al de la etiqueta +=
// podemos modificar, sobreescribir y generar nuevos nodos.
listaCiudades.innerHTML += `<li class="nuevaCiudad">La Rioja</li>`;
listaCiudades.innerHTML += `<li id="ultimaCiudad">Córdoba</li>`;
listaCiudades.innerHTML += `<p>Fin del listado</p>`;

// CLASSNAME es una propiedad que utilizamos para acceder a las clases de un nodo y poder modificar y agregar.
listaCiudades.className = `lista formato`;

// CREAR un elemento
let nuevaLi = document.createElement("li");
//agregarle texto a la creacion del elemento anterior
nuevaLi.innerText = `Argentina`;
nuevaLi.className = `nuevoPais`;

// append y appendChild - metodos para agregar elementos, appendChild sirve para pasar un nodo con contenido, de otra manera nos daria error. Lo agrega al final
listaPaises.append(nuevaLi);

// prepend tambien agrega un nodo como append, pero con la diferecnai de que lo agrega al inicio.
listaPaises.prepend(nuevaLi);

//metodo remove sirve para eliminar nodos
fraseDom.remove();

let ciudades = document.getElementsByClassName("ciudades");
console.log(ciudades);
ciudades[0].remove();
 */

// ----------------------------- EVENTOS -----------------------------

// Son las acciones que el usuario realiza cuando interactua con un sitio web, y nosotros los controlamos de manera que podamos gestionar la interactividad entre el usuario y el sitio web.

// Cuando declaramos un evento el sitio está atento a las acciones del usuario según las reglas y las declaraciones de eventos que le damos.

// Handler event: son funciones manejadoras de ventos

function saludoComi34150() {
  console.log("Que tengas un feliz Martes");
  alert("Nuestro primer evento");
}

function saludar(nombre) {
  alert(`Hola ${nombre} buenas tardes.`);
}

//Segunda forma semantica
//Capturar
let botonSemantico = document.getElementById("evento-semantico");
let inputAlumno = document.getElementById("nombreAlumno");
console.log(inputAlumno);
//adjuntar evento
//se le asigna una handler function
//cuando asignamos una function directamente va sin parentesis
//botonSemantico.onclick = saludoComi34150;
// otro evento a btn semantico
botonSemantico.onclick = () => {
  saludar(inputAlumno.value);
};
console.log(inputAlumno.value);

// Primera forma -- la mas recomendable
//podemos pasar multiples eventos
let eventoMultiples = document.getElementById("evento-multiple");

//addEventListener
//recibe dos parametros.
// el primer parámetro es el evento que quiero que escuche
// segundo parametro una function handler, la funcion que va a manejar el elemento
eventoMultiples.addEventListener("click", saludoComi34150);

eventoMultiples.addEventListener("click", () => {
  saludar(inputAlumno.value);
});
