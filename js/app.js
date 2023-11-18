// comprobación de datos del formulario de entrada

//inicialización de var, objetos, DOM
const nickinput = document.getElementById("nick");
const sizeinput = document.getElementById("size");
const entryForm = document.getElementById("entryForm");
const error =  document.getElementById("error")


//Funciones de evento
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
    return true;
}

//Inicio de carga de eventos
entryForm.addEventListener('submit',comprobarForm);