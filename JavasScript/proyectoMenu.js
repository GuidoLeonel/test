class Libro {
  constructor(id, autor, titulo, precio, imagen) {
    this.id = id;
    this.autor = autor;
    this.titulo = titulo;
    this.precio = precio;
    this.imagen = imagen;
  }
  mostrarInfoLibro() {
    console.log(
      `El autor del libro ${this.titulo} es ${this.autor} y cuesta ${this.precio} `
    );
  }
}

const libro1 = new Libro(
  1,
  "Liliana Bodoc",
  "Los Tiempos del Venado",
  7600,
  "portada-dias-venado_grande.jpg"
);
const libro2 = new Libro(
  2,
  "Eduardo Galeano",
  "Las Venas Abiertas de Latinoámerica",
  8500,
  "portada-las-venas-abiertas-latinoamerica.jpg"
);
const libro3 = new Libro(
  3,
  "Gabriel Garcia Marquez",
  "Cien Años de Soledad",
  10000,
  "100-anos-de-soledad.jpg"
);
const libro4 = new Libro(
  4,
  "Robert Kishosaki",
  "Padre Rico, Padre Pobre",
  5500,
  "padre_rico_padre_pobre.jpg"
);
const libro5 = new Libro(
  5,
  "Liliana Bodoc",
  "Los Dias de la Sombra",
  7600,
  "Los-dias-de-la-sombra.jpg"
);
const libro6 = new Libro(
  6,
  "Liliana Bodok",
  "Los Dias Del Fuego",
  8000,
  "Los-dias-de-Fuego.jpg"
);

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

function buscarPorTitulo(array) {
  let tituloBuscado = prompt(
    "Ingrese el titulo del libro que desea buscar"
  ).toLowerCase();
  let tituloEncontrado = array.find(
    //una arrowfunction si no tiene llaves, tiene un return implicito
    (book) => book.titulo.toLowerCase() == tituloBuscado
  );
  if (tituloEncontrado == undefined) {
    console.log(`${tituloBuscado} no se encuentra en nuestro stock`);
  } else {
    console.log(tituloEncontrado);
  }
}

function busquedaPorAutor(arr) {
  let autorBuscado = prompt(
    "Ingrese el nombre del autor que está buscando"
  ).toLowerCase();
  let busquedaAutor = arr.filter(
    (book) => book.autor.toLowerCase() == autorBuscado
  );
  if (busquedaAutor.length == 0) {
    console.log(`Para ${autorBuscado} no hay libros en stock`);
  } else {
    mostrarCatalogoForEach(busquedaAutor);
  }
}

function ordernarAlfabeticamente(array) {
  // copia de un array, para no modificar estanteria
  let alfabeticamente = [].concat(array);
  alfabeticamente.sort((a, b) => {
    if (a.titulo < b.titulo) {
      return -1;
    } else if (a.titulo > b.titulo) {
      return 1;
    } else {
      0;
    }
  });
  mostrarCatalogo(alfabeticamente);
}

function ordenarMenorMayor(array) {
  const menorMayor = [].concat(array);
  menorMayor.sort((a, b) => a.precio - b.precio);
  mostrarCatalogo(menorMayor);
}

function ordenarMayorMenor(array) {
  const mayorMenor = [].concat(array);
  mayorMenor.sort((a, b) => b.precio - a.precio);
  mostrarCatalogo(mayorMenor);
}

function ordenar(array) {
  let pregunta = parseInt(
    prompt(`Como le gustaría ordenar:
  1 - Ordenar de Menor a Mayor (precio)
  2 - Ordenar de Mayor a Menor (precio)
  3 - Ordenar Alfabeticamente`)
  );
  switch (pregunta) {
    case 1:
      ordenarMenorMayor(array);
      break;
    case 2:
      ordenarMayorMenor(array);
      break;
    case 3:
      ordernarAlfabeticamente(array);
      break;
    default:
      console.log(`${pregunta} no es válido`);
      break;
  }
}

function borrarLibro(array) {
  console.log(
    `A partir del catálogo ingrese el id del libro que desea eliminar:`
  );
  for (let elem of array) {
    console.log(`${elem.id} - ${elem.titulo} del autor/a ${elem.autor}`);
  }
  let idEliminar = parseInt(prompt("Ingrese el ID a eliminar"));
  // map: copiar un array con solo los indices.
  let arrayID = array.map((book) => book.id);
  // indexOf: para averiguar la posicion del elemento que queremos
  let indice = arrayID.indexOf(idEliminar);
  // splice para una vez localizado el elemento, borrarlo
  array.splice(indice, 1);
  mostrarCatalogo(array);
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
        ordenar(estanteria);
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

// PROYECTO CON DOM

// Capturo divLibros
let librosDiv = document.getElementById("libros");

//Imprimiendo los objetos en el DOM
function verCatalogo(array) {
  for (let libro of array) {
    //codigo para imprimir el array
    //-- creamos un div padre para la card
    let nuevoLibroDiv = document.createElement("div");
    nuevoLibroDiv.className = "col-12 col-md-6 col-lg-4";
    nuevoLibroDiv.innerHTML = `<article class="card" id="${libro.id}">
        <h3 class="tituloCard">${libro.titulo}</h3>
        <img src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
          <div class="content">
            <p class="autorCard">${libro.autor}</p>
            <p class="precioCard">${libro.precio}</p>
            <a href="" target="_blank">Agregar al Carrito</a>
          </div>
      </article>`;
    librosDiv.appendChild(nuevoLibroDiv);
  }
}
verCatalogo(estanteria);

/*   <article class="card">
        <h3 class="tituloCard">Los Días del Venado</h3>
        <img src="assets/portada-dias-venado_grande.jpg" alt="Portada Los Días del Venado">
          <div class="content">
            <p class="autorCard">Liliana Bodoc</p>
            <p class="precioCard">$1500</p>
            <a href="" target="_blank">Agregar al Carrito</a>
          </div>
      </article> */
