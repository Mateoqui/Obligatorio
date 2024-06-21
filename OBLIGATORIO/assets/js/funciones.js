
const CARRITO = []

// Datos precargados sobre nuestros servicios
const SERVICIOS = [
    { id: 1, nombre: "GTA V", precio: 50, genero: "", descripcion: "", edades: "", img: "../assets/media/Grand_Theft_Auto_V.png" },
    { id: 2, nombre: "Project Zomboid", precio: 50, genero: "", descripcion: "", edades: "", img: "../assets/media/Boxshot_of_video_game_Project_zomboid.jpg" },
    { id: 3, nombre: "Ghost of Tsushima", precio: 50, genero: "", descripcion: "", edades: "", img: "../assets/media/Ghost_of_Tsushima.jpg" },
    { id: 4, nombre: "Sekiro", precio: 50, genero: "", descripcion: "", edades: "", img: "../assets/media/Sekiro_art.jpg" },
    { id: 5, nombre: "Battlefield V", precio: 50, genero: "", descripcion: "", edades: "", img: "../assets/media/Battlefield_V_standard_edition_box_art.jpg"}
]

// Creacion de servicios en html
function crearLiServicios(servicio) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = servicio.nombre;
    let img = document.createElement("img");
    img.src = servicio.img;
    img.alt = servicio.nombre;
    let span2 = document.createElement("span");
    span2.innerHTML = servicio.precio;
    let button = document.createElement("button");
    button.innerHTML = "Agregar al carrito";
    button.classList.add("cartbutton");

    // Asignacion al padre (li)
    li.appendChild(span);
    li.appendChild(img);
    li.appendChild(span2);
    li.appendChild(button);

    return li;
}

function documentOnLoad() {
    let ul = document.getElementById("lista");

    for (let i = 0; i < SERVICIOS.length; i++){
        let li = crearLiServicios(SERVICIOS[i]);
        ul.appendChild(li);
    }
}
document.addEventListener("DOMContentLoaded", documentOnLoad);

// Funcion que agrupa todos los botones y hace un evento gracias por su compra
document.addEventListener('DOMContentLoaded', () => {
    function agruparBotones() {
        let agruparButtons = document.querySelectorAll('.servicios li button');
        for (let boton of agruparButtons) {
            boton.addEventListener('click', agregarAlCarrito);
        }
    }

    function agregarAlCarrito(evento) {
        console.log(evento);
        alert("Juego agregado con exito al carrito");
    }

    agruparBotones(); 
});

const JUEGOS = [];

function storageGuardarJuegos() {
  localStorage.setItem("juegos", JSON.stringify(JUEGOS));
}

function storageLeerJuegos() {
  return JSON.parse(localStorage.getItem("juegos")) || [];
}

function cargarJuegos(Juegos) {
  for (let juego of Juegos) {
    agregarjuego(juego);
  }
}

//posicion en array    id   nombre:            precio:
//0 :                  0    assasin creed      |400 
//1 :                  1    doom ethernal      |500
//2 :                  3    GTA V              |1000
//3 :                  4    SimsCity           |300
//4 :                  5    league of legends  |600


function agregarJuegos(juego) {
  juego.id = ultimoIdJuego() + 1;
  JUEGOS.push(juego);
  storageGuardarJuegos();
}

function modificarjuegos(juegos) {
  let indice = buscarIndicejuegos(juegos.id);
  if (indice !== -1) {
    Juegos[indice] = juego;
    storageGuardarJuegos();
  }
}

function buscarJuegos(idJuegos) {
  for (let i = 0; i < JUEGOS.length; i++) {
    if (JUEGOS[i].id == idJuegos) {
      return JUEGOS[i];
    }
  }
  return null;
}

function buscarIndiceJuegos(idJuego) {
  for (let i = 0; i < JUEGOS.length; i++) {
    if (JUEGOS[i].id == idJuegos) {
      return i;
    }
  }
  return -1;
}

function ultimoIdJuego() {
    let ultimoId = -1;                //aca defino la variable utlimo id y lo seteo en -1 porque si no hay ningun item agregado, luego se le suma 1  al final el id resultante sera 0
    for (let juego of JUEGOS) {       //recorro el array constante juegos, y almaceno 1x1 la posiciones en la variable "juego"
      if (juego.id > ultimoId) {      //si el id del juego que se esta recorriendo al momento es mayor al ultimo id almacenado entonces se establece ultimoid como el valor del id del juego recorrido al momento sino no se almacena
        ultimoId = juego.id;
      }
    }

    return ultimoId;                   //retorna la variable ultimoid con su respectivo valor
  }

