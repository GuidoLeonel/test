// -------------------- DOM --------------------
// - Document Object Model

// - Es una estructura de objetos generada por el navegador. Se le puede interpretar como un árbol donde se va desglozando en diferentes ramas.

// - Cada etiqueta HTML es un nodo, cada una genera dos nodos, una es el nodo ELEMENTO que es la propia etiqueta y el otro nodo es el nodo texto. Puede contener información, sin embargo no impresindible.

// document.body va a ser el objeto que no permita trabajar sobre todo nuestro archivo.

//PRIMER FORMA DE CAPTURAR ELEMETOS
// GET ELEMENT/S
// Dentro de GET ELEMENT hay 3 maneras, acceder mediante etiquetas.

// -- -- Nos devuelve un HTML Collection en forma de array.
let etiquetasH5 = document.getElementsByTagName("h5");
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
