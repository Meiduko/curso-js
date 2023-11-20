/*
*Ejemplo sobre drag&Drop
*
*
*/

//Captura de objetos necesarios
const objeto = document.getElementById("objeto");
const contenedor = document.getElementById("contenedor");

//Eventos de objeto movido 
objeto.addEventListener('dragstart',
    event=>{console.log("El objeto comienza a moverse")}
)
objeto.addEventListener('dragend',
    event=>{console.log("El objeto deja de moverse")}
)
// objeto.addEventListener('dragend',
//     event=>{console.log("El objeto se está moviendo")}
// )

//Eventos sobre el contenedor
contenedor.addEventListener('dragenter',
    event=>{console.log("El objeto entra en el contenedor")}
)

contenedor.addEventListener('dragover',
    event=>{
        event.preventDefault();
        //console.log("El objeto está moviendose en el contenedor");
}
)

contenedor.addEventListener('drop',
    event=>{console.log("El objeto se suelta en el contenedor")}
)
