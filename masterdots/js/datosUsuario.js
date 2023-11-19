/*
*JS para la gestión de los datos del usuario
*
*@author Borja González <borjago.bgo@gmail.com>
*@link https://github.com/Meiduko/curso-js GitHub
*/


var nick;
var size;
var email;
var geolocalizacionTxt;

//SessionStorage
/**
 * Almacenar los datos en el sessionStorage
 * @param {HTMLElement} nick nick del usuario
 * @param {HTMLElement} size tamano del panel de juego
 * @param {HTMLElement} email email del usuario
 * @returns {Boolean}
 */
function datosUsuario(nick, size, email){
    sessionStorage.setItem('nick',nick.value);
    sessionStorage.setItem('size',size.value);
    sessionStorage.setItem('email',email.value);
    sessionStorage.setItem('geolocalizacionTxt',geolocalizacionTxt)
}

function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    size = sessionStorage.getItem('size');
    email = sessionStorage.getItem('email');

}

function comprobacionDatosUsuario(){
    if (nick == null){
        sessionStorage.setItem('error',
        'No se ha rellenado correctamente el formulario');
        return false;
    }
    return true
}
//Geolocalizacion
function datoGeolocalizacion(){
    if (!navigator.geolocation){
        geolocalizacionTxt = "El navegador no es compatible con API Geolocation"
    }else{
        navigator.geolocation.getCurrentPosition(
            //Exito
            (position)=>{geolocalizacionTxt = 'Latitud: '+position.coords.latitude+', Longitud: '+position.coords.longitude},
            //Error
            ()=>{geolocalizacionTxt = "la geolocalización no se ha podido realizar";}
        )
    }
}
//LocalStorage
function historicoUsuarios(nick){
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    if (historicoStorage == null){        
        historico = [];
    } else {
        historico = JSON.parse(historicoStorage);
    }
    let registroUsuario={
        usuario: nick.value,
        fecha: Date.now()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico',JSON.stringify(historico));
}