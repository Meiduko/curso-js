const euros = document.getElementById("euros");
const dollars = document.getElementById("dollars");
const pesosArg = document.getElementById("ARGpesos");
const pesosMex = document.getElementById("MXN");
const entryForm = document.getElementById("entryForm");
const error = document.getElementById("error")

function comprobar(event){
    event.preventDefault();
    if(euros.value =='introduzca €'){
        euros.focus();
        error.innerText = 'introduzca una cantidad, por favor'
    }else if (euros.value.match(/([a-zA-Z])/)){
        euros.focus();
        error.innerText = 'introduzca únicamente números, por favor'
    }else{
        dollars.value = (euros.value * 1.09);
        pesosArg.value = (euros.value * 384.04);
        pesosMex.value = (euros.value * 18.8);
        error.innerText ="";
    }
}



entryForm.addEventListener('submit',comprobar)

