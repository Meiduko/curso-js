

var CPU;
var GPU;
var alimentación;
var RAM;
var SSD;
var placaBase;
var refrigeracion;
var chasis;
var piezas;
var sections;
var selects;
var descripcion;

function domCargado(){
    //Captura de todos los Elements
    CPU = document.getElementById('CPU');
    GPU = document.getElementById('GPU');
    alimentación = document.getElementById('Alimentación');
    RAM = document.getElementById('RAM');
    SSD = document.getElementById('SSD');
    placaBase = document.getElementById('PlacaBase');
    refrigeracion = document.getElementById('Disipador');
    chasis = document.getElementById('Chasis');
    piezas = document.getElementsByClassName('pieza');
    sections = document.getElementsByClassName('section');
    selects = document.getElementsByClassName('select');
    descripcion = document.getElementsByClassName('descripcion');
    for (let pieza of piezas){
        pieza.addEventListener('dragstart', addToCart);
    }
    for (let select of selects){
        select.addEventListener('change',cambiarContenido)
    } 
}

function addToCart(event){
    console.log(piezas.value)
}


function cambiarContenido(event) {
    let select = event.target;
    let section = select.closest('section')
    let descripcion = section.querySelector('.descripcion')

    switch (select.value) {
        case '0':
            descripcion.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
            break;
        case '1':
            descripcion.innerText = 'Texto para valor 1';
            break;
        case '2':
            descripcion.innerText = 'Texto para valor 2';
            break;
        default:
            descripcion.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
            }
}



document.addEventListener('DOMContentLoaded',domCargado);

