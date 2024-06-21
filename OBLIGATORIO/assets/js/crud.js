

// Capturamos los datos del html
const contenedor = document.querySelector('tbody');
let resultados = '';


const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formArticulo = document.querySelector('form');
const nombre = document.getElementById('nombre');
const descripcion = document.getElementById('descripcion');
const genero = document.getElementById('genero');
const clasificacionPorEdades = document.getElementById('clasificacion-por-edades');
const precio = document.getElementById('precio');

let opcion = '';

btnCrear.addEventListener('click', ()=>{
    modalArticulo.show()
})

