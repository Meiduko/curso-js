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
    datosUsuario(nickinput, sizeinput, emailinput);
    historicoUsuarios(nickinput)
    return true;
}
function domCargado(){
    //Captura de todos los Elements
    nickinput = document.getElementById("nick");
    sizeinput = document.getElementById("size");
    emailinput = document.getElementById("email");
    entryForm = document.getElementById("entryForm");
    error =  document.getElementById("error");
}

//Comprobar errores de juego.html
if (sessionStorage.getItem('error') !=null){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}
historicoUsuarios(nickinput)

//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded',domCargado);
entryForm.addEventListener('submit',comprobarForm);
//Geolocalizacion
datoGeolocalizacion();