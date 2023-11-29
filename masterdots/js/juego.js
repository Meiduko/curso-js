/*
*JS Para el juego Masterdots
*
*
*/
//VARIABLES GLOBALES
var iniciadoMarcado = false;
var adyacentes = [];
var idMarcados = [];
var classMarcada;
var panelSize;
var idInterval;

/*INICIACION DEL PANEL*/
/**
 * devuelve un numero random entre 0 y max
 * @param {*} max 
 * @returns 
 */
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}



//rellenar nick y avatar
function rellenarFormularioUsuario(){
    document.getElementById('nick').value = nick;
    document.getElementById('avatarImg').src = avatarImg;
    panelSize = parseInt(size)
}
//
function pintarPanelJuego(){
    document.getElementById('juego').style.gridTemplateColumns = 'repeat('+ size +', 1fr)';
    document.getElementById('juego').style.gridTemplateRows = 'repeat('+ size +', 1fr)';
    //Elementos de forma automática
    let items = "";
    let color = ['rojo', 'verde']
    let colorRandom = 0
    for (let index = 0; index < (parseInt(size)*parseInt(size)); index++) {
        if (index%2>0) colorRandom = getRandomInt(2);
        items +=`<div class="containerItem"><div id="${index}" class="item ${color[colorRandom]}"></div></div>`;
    }
    document.getElementById('juego').innerHTML = items
}
/**
 * Calcula el array de los adyacentes
 * @param {} idMarcado número marcado
 */
function calcularAdyacentes(idMarcado){
    adyacentes = [];
    //Adyacente superior
    if((idMarcado-panelSize)>=0) adyacentes.push(idMarcado-panelSize);
    //Adyacente inferior
    if((idMarcado+panelSize)<(panelSize*panelSize)) adyacentes.push(idMarcado+panelSize);
    //Adyacente izquierda
    if((idMarcado%panelSize)>0) adyacentes.push(idMarcado-1);
    //Adyacente derecha
    if(((idMarcado+1)%panelSize)>0) adyacentes.push(idMarcado+1);

    for (let index = 0; index < adyacentes.length; index++) {
        console.log(adyacentes[index]);
        
    }
}
/**
 * Funcion que realiza la cuenta atrás del juego
 */
function cuentaAtras(){
    let tiempoRestante = parseInt(document.getElementById('tmpo').value)-1;
    document.getElementById('tmpo').value = tiempoRestante;
    if  (tiempoRestante == 0){
        clearInterval(idInterval);
        //Finalizar eventos
        const items = document.getElementsByClassName('item')
        for (let item of items){
            item.removeEventListener('mousedown', comenzarMarcar);
            item.removeEventListener('mouseover', continuarMarcando);
        }
        document.removeEventListener('mouseup', finalizarMarcado);
        //Cambiar z-index paneles
        document.getElementById('juegoAcabado').classList.add('juegoAcabadoColor');
        document.getElementById('juegoAcabado').style.zIndex = '2';
        document.getElementById('juego').style.zIndex = '1';
        document.getElementById('nuevaPartida').addEventListener('click',(e)=>location.reload())
    }
}

/**
 * Añadir los eventos del juego
 */
function programarEventosJuego(){
    const items = document.getElementsByClassName('item')
    for (let item of items){
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcando);
    }
    document.addEventListener('mouseup', finalizarMarcado);
    //Cuenta atrás
    idInterval = setInterval(cuentaAtras,1000);
}
/*Funciones del juego*/
/**
 * Iniciar marcado de los dots
 * @param {*} event 
 */
function comenzarMarcar(event){
    let item = event.target
    let containerItem = event.target.parentElement;
    if(item.classList.contains('rojo')){
        classMarcada = 'rojo';
        containerItem.classList.add('rojo');
    }
    else {
        classMarcada = 'verde';
        containerItem.classList.add('verde');
    }
    if (!iniciadoMarcado) iniciadoMarcado = true;
    //Guardo los  marcados
    idMarcados.push(parseInt(item.id));
    //Comienzo a calcular adyacentes
    calcularAdyacentes(parseInt(item.id));

    console.log('Pinchado sobre un circulo');
}
/**
 * Continuar marcado de los dots
 * @param {*} event 
 */
function continuarMarcando(event){
    if (iniciadoMarcado){
        let item = event.target;
        let idNuevo = parseInt(item.id);
        //Es adyacente?
        if(adyacentes.includes(idNuevo)&&event.target.classList.contains(classMarcada)){
            let containerItem = event.target.parentElement;
            if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
            else containerItem.classList.add('verde');
            //Guardar los  marcados
            idMarcados.push(parseInt(item.id)); 
            calcularAdyacentes(parseInt(item.id));
        }
    }
    console.log('Pasando sobre un circulo');
}
/**
 * finaliza el marcado de los dots
 * @param {*} event 
 */
function finalizarMarcado(event){
    iniciadoMarcado = false;
    adyacentes = [];
    //Actualizar marcador
    const puntuacionInput = document.getElementById('puntuacion')
    if(idMarcados.length>1){
        puntuacionInput.value = parseInt(puntuacionInput.value) + parseInt(idMarcados.length)
    }
    //Trabajar con los marcados
    for (let index = 0; index < idMarcados.length; index++) {
        //Capturar el objeto
        let itemMarcado = document.getElementById(idMarcados[index]);
        itemMarcado.parentElement.classList.remove(classMarcada);
        //Cambiar el color de los objetos de forma random
        let color =['rojo', 'verde'];
        let colorRandom = getRandomInt(2);
        itemMarcado.classList.remove(classMarcada);
        itemMarcado.classList.add(color[colorRandom]);
    }
    idMarcados = [];
}
/**
 * MAIN
 */
//Capturar datos de usuario
getDatosUsuario();
//Comprobar datos de usuario
if (!comprobacionDatosUsuario())location = 'index.html';
//Rellenamos formulario
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuego();