/*
*JS para la comprobación de datos del formulario de entrada
*
*@author Borja González <borjago.bgo@gmail.com>
*@link https://github.com/Meiduko/curso-js GitHub
*/

//inicialización de var, objetos, DOM
var nickinput;
var sizeinput;
var emailinput;
var entryForm;
var error;
var avatarItems;
var itemImg;
var avatarCont;
var avatarImg;




//Funciones de evento
/**
 * Comprueba los datos correctos del formulario de entrada
 * @param {EventListenerObject} event Evento que salta al realizar el submit
 * @returns {boolean}
 */
function comprobarForm(event){
    //Comprobar cambios
    if(nickinput.value.match(/(?<!\S)[0-9]/))
    {
        nickinput.focus();
        event.preventDefault();
        error.innerText = 'el campo de nick no puede comenzar con un número';
        return false;
    }else if(sizeinput.value == '0'){
        sizeinput.focus();
        event.preventDefault();
        error.innerText = 'Se debe seleccionar un tamaño de panel';
        return false;
    }
    //La informacion es correcta
    datosUsuario(nickinput, sizeinput, emailinput, avatarCont);
    historicoUsuarios(nickinput);
    return true;
}
function moviendoImg(event){
    itemImg = event.target;
    console.log(itemImg.src);
}

function cambiarImg(event){
    avatarCont.src = itemImg.src;
}

/**
 * Carga de objetos del DOM comprobaciones y eventos del formulario
 * @returns {undefined}
 */
function domCargado(){
    //Captura de todos los Elements
    nickinput = document.getElementById("nick");
    sizeinput = document.getElementById("size");
    emailinput = document.getElementById("email");
    entryForm = document.getElementById("entryForm");
    error =  document.getElementById("error");

    //Comprobar errores de juego.html
    if (sessionStorage.getItem('error') !=null){
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    entryForm.addEventListener('submit',comprobarForm);

    avatarItems = document.getElementsByClassName('avatarImgItem')
    //Eventos del D&D
    for(let item of avatarItems){ 
        item.addEventListener('dragstart', moviendoImg)
    }
    avatarCont = document.getElementById('avatarImg');
    avatarCont.addEventListener('dragover',e=>{e.preventDefault()})
    avatarCont.addEventListener('drop',cambiarImg)
}



//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded',domCargado);
//Geolocalizacion
datoGeolocalizacion();