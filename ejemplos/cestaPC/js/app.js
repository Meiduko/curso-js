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
var cesta;
var precio;
var precioTotal = document.getElementById('precio');
var precioTot;
const productos = {
    CPU: {
        1:{
            precio: "120", descripcion: 'intel i3, gen 12, 3.7GHz', imgSrc:'./img/i3-37-ghz.jpg'
        },
        2:{
            precio: "210", descripcion: 'intel i5, gen 12, 44GHz', imgSrc:'./img/i5-44ghz.webp'
        },
        3:{
            precio: "300", descripcion: 'intel i7, gen 12, 56GHz', imgSrc:'./img/i7-56ghz.webp'
        },
        4:{
            precio: "450", descripcion: 'intel i9, gen 12, 35GHz', imgSrc:'./img/i9-35ghz.webp'
        }
    },
    GPU: {
        1:{
            precio: "550", descripcion: 'RTX 4070', imgSrc:'./img/rtx-4070-2gb.webp'
        },
        2:{
            precio: "450", descripcion: 'RTX 3070', imgSrc:'./img/rtx-3070-8gb.webp'
        },
        3:{
            precio: "160", descripcion: 'RTX 2070', imgSrc:'./img/rtx-2070-8gb.webp'
        }
    },
    Alimentación: {
        1:{
            precio: "130", descripcion: 'Corsair RM White Series 850W', imgSrc:'./img/corsair-rm-white-series-rm850-850w-80-plus-gold-full-modular.jpg'
        },
        2:{
            precio: "65", descripcion: 'Corsair cv series 650w', imgSrc:'./img/corsair-cv-series-cv650-650w-80-plus-bronze-v2.webp'
        },
    },
    RAM:{
        1:{
            precio: "160", descripcion: 'team group delta 8gb', imgSrc:'./img/team-group-delta-rgb-ddr4-3200-pc4-25600-16gb-2x8gb.webp'
        },
        2:{
            precio: "450", descripcion: 'Corsair vengance 16gb', imgSrc:'./img/corsair-vengeance-lpx-ddr4-3600mhz-pc4-28800-32gb-2x16gb.webp'
        },
        3:{
            precio: "550", descripcion: 'Corsair vengance 32gb', imgSrc:'./img/corsair-vengeance-ddr5-5600mhz-64gb-2x32gb.webp'
        }
    },
    SSD:{
        1:{
            precio: "53", descripcion: 'Kingston nv2 1tb', imgSrc:'./img/kingston-nv2-1tb-ssd.webp'
        },
        2:{
            precio: "180", descripcion: 'Samsung 980 2tb', imgSrc:'./img/samsung-980-pro-ssd-2tb.webp'
        },
        3:{
            precio: "230", descripcion: 'Acer predator 4tb', imgSrc:'./img/acer-predator-4tb-ssd-m2.webp'
        }
    },
    PlacaBase:{
        1:{
            precio: "740", descripcion: 'Asus rog maximus z790 formula', imgSrc:'./img/asus-rog-maximus-z790-formula.webp'
        },
        2:{
            precio: "840", descripcion: 'Asus rog maximus z790 hero eva 02', imgSrc:'./img/asus-rog-maximus-z790-hero-eva-02.webp'
        },
        3:{
            precio: "325", descripcion: 'Asus rog strix z790 f gaming wifi', imgSrc:'./img/asus-rog-strix-z790-f-gaming-wifi.webp'
        }
    },
    Disipador:{
        1:{
            precio: "37", descripcion: 'Tempest gaming liquid cooler 120', imgSrc:'./img/tempest-gaming-liquid-cooler-120-rgb-kit-de-refrigeracion-liquida.webp'
        },
        2:{
            precio: "60", descripcion: 'Tempest gaming liquid cooler 240', imgSrc:'./img/tempest-liquid-cooler-240-kit-de-refrigeracion-liquida-negro.webp'
        },
        3:{
            precio: "170", descripcion: 'MSI mag cooler quid e240', imgSrc:'./img/msi-mag-coreliquid-e240-kit-de-refrigeracion-liquida.webp'
        }
    },
    Chasis:{
        1:{
            precio: "28", descripcion: 'Tempest soul rgb negra', imgSrc:'./img/tempest-soul-rgb-torre-atx-negra.webp'
        },
        2:{
            precio: "60", descripcion: 'Nfortec azir white', imgSrc:'./img/nfortec-azir-white-cristal-templado-usb-30-blanca-opiniones.webp'
        },
        3:{
            precio: "120", descripcion: 'Forgeon tiberium argb negra', imgSrc:'./img/forgeon-tiberium-argb-cristal-templado-usb-30-negra.webp'
        }
    },
}

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
    cesta = document.getElementById('cesta');
    for (let select of selects){
        select.addEventListener('change',cambiarContenido)
    }
    if (localStorage.getItem('precioTotal') != null){
        precioTotal.value = localStorage.getItem('precioTotal')
    }
    if (localStorage.getItem('CPUelegido') != null){
        CPUelegido.innerText = localStorage.getItem('CPUelegido');
    }
    if (localStorage.getItem('GPUelegido') != null){
        GPUelegido.innerText = localStorage.getItem('GPUelegido');
    }
    if (localStorage.getItem('AlimentaciónElegido') != null){
        AlimentaciónElegido.innerText = localStorage.getItem('AlimentaciónElegido');
    }
    if (localStorage.getItem('RAMelegido') != null){
        RAMelegido.innerText = localStorage.getItem('RAMelegido');
    }
    if (localStorage.getItem('SSDelegido') != null){
        SSDelegido.innerText = localStorage.getItem('SSDelegido');
    }
    if (localStorage.getItem('SSDelegido') != null){
        SSDelegido.innerText = localStorage.getItem('SSDelegido');
    }
    if (localStorage.getItem('PBelegido') != null){
        PBelegido.innerText = localStorage.getItem('PBelegido');
    }
    if (localStorage.getItem('ChasisElegido') != null){
        ChasisElegido.innerText = localStorage.getItem('ChasisElegido');
    }
    
}
function guardarInfo(event){
    let select = event.target.querySelector('.select');
    let idPieza =  event.target.attributes.id.nodeValue;
    let descripcion = event.target.querySelector('.descripcion');
    let prec = event.target.querySelector('.precio').innerText;
    precio = prec.slice(0, prec.length - 1) //sin '€'

    cesta.addEventListener('drop', function (e){addToCart(e, idPieza, descripcion, select)}, {once: true});
    cesta.addEventListener('dragover',e=>{e.preventDefault()})
}

function removeItem(event, elegido){
    precioTot  = precioTotal.value.slice(0, precioTotal.value.length - 1);
    switch(elegido.innerText){
        case productos.CPU[1].descripcion:
            precio = parseInt(productos.CPU[1].precio);
            break;
        case productos.CPU[2].descripcion:
            precio = parseInt(productos.CPU[2].precio);
            break;
        case productos.CPU[3].descripcion:
            precio = parseInt(productos.CPU[3].precio);
            break;
        case productos.CPU[4].descripcion:
            precio = parseInt(productos.CPU[4].precio);
            break;
        case productos.GPU[1].descripcion:
            precio = parseInt(productos.GPU[1].precio);
            break;
        case productos.GPU[2].descripcion:
            precio = parseInt(productos.GPU[2].precio);
            break;
        case productos.GPU[3].descripcion:
            precio = parseInt(productos.GPU[3].precio);
            break;
        case productos.Alimentación[1].descripcion:
            precio = parseInt(productos.Alimentación[1].precio);
            break;
        case productos.Alimentación[2].descripcion:
            precio = parseInt(productos.Alimentación[2].precio);
            break;
        case productos.RAM[1].descripcion:
            precio = parseInt(productos.RAM[1].precio);
            break;
        case productos.RAM[2].descripcion:
            precio = parseInt(productos.RAM[2].precio);
            break;
        case productos.RAM[3].descripcion:
            precio = parseInt(productos.RAM[3].precio);
            break;
        case productos.SSD[1].descripcion:
            precio = parseInt(productos.SSD[1].precio);
            break;
        case productos.SSD[2].descripcion:
            precio = parseInt(productos.SSD[2].precio);
            break;
        case productos.SSD[3].descripcion:
            precio = parseInt(productos.SSD[3].precio);
            break;
        case productos.PlacaBase[1].descripcion:
            precio = parseInt(productos.PlacaBase[1].precio);
            break;
        case productos.PlacaBase[2].descripcion:
            precio = parseInt(productos.PlacaBase[2].precio);
            break;
        case productos.PlacaBase[3].descripcion:
            precio = parseInt(productos.PlacaBase[3].precio);
            break;
        case productos.Disipador[1].descripcion:
            precio = parseInt(productos.Disipador[1].precio);
            break;
        case productos.Disipador[2].descripcion:
            precio = parseInt(productos.Disipador[2].precio);
            break;
        case productos.Disipador[3].descripcion:
            precio = parseInt(productos.Disipador[3].precio);
            break;
        case productos.Chasis[1].descripcion:
            precio = parseInt(productos.Chasis[1].precio);
            break;
        case productos.Chasis[2].descripcion:
            precio = parseInt(productos.Chasis[2].precio);
            break;
        case productos.Chasis[3].descripcion:
            precio = parseInt(productos.Chasis[3].precio);
            break;
    }
    elegido.innerText = ""
    precioTotal.value = parseInt(precioTot) - parseInt(precio) + '€'
    guardarEnLocal()

}
//Añadir descripcion del producto a la lista y actualizar precio
function addToCart(event, idPieza, descripcion, select){
    precioTotal = document.getElementById('precio');
    precioTot = precioTotal.value.slice(0, precioTotal.value.length - 1);
    let cesta = document.getElementById('listaElegidos');
    let CPUelegido = document.getElementById('CPUelegido');
    let GPUelegido = document.getElementById('GPUelegido');
    let AlimentaciónElegido = document.getElementById('AlimentaciónElegido');
    let RAMelegido = document.getElementById('RAMelegido');
    let SSDelegido = document.getElementById('SSDelegido');
    let PBelegido = document.getElementById('PBelegido');
    let RefrigeracionElegido = document.getElementById('RefrigeracionElegido');
    let ChasisElegido = document.getElementById('ChasisElegido');
    console.log('test 1');
    console.log(descripcion.innerText);
    console.log(precio);

    
    

    switch (idPieza){
        case 'CPU':
            switch(CPUelegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            CPUelegido.innerText = productos.CPU[1].descripcion;
                            precioProducto = parseInt(productos.CPU[1].precio);
                            break;
                        case '2':
                            CPUelegido.innerText = productos.CPU[2].descripcion;
                            precioProducto = parseInt(productos.CPU[2].precio);
                            break;
                        case '3':
                            CPUelegido.innerText = productos.CPU[3].descripcion;
                            precioProducto = parseInt(productos.CPU[3].precio);
                            break;
                        case '4':
                            CPUelegido.innerText = productos.CPU[4].descripcion;
                            precioProducto = parseInt(productos.CPU[4].precio);
                            break;
                        default:
                            descripcion.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.CPU[1].descripcion:
                    precioTot -= parseInt(productos.CPU[1].precio);
                    switch (select.value) {
                        case '0':
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            CPUelegido.innerText = productos.CPU[1].descripcion;
                            precioProducto = parseInt(productos.CPU[1].precio);
                            break;
                        case '2':
                            CPUelegido.innerText = productos.CPU[2].descripcion;
                            precioProducto = parseInt(productos.CPU[2].precio);
                            break;
                        case '3':
                            CPUelegido.innerText = productos.CPU[3].descripcion;
                            precioProducto = parseInt(productos.CPU[3].precio);
                            break;
                        case '4':
                            CPUelegido.innerText = productos.CPU[4].descripcion;
                            precioProducto = parseInt(productos.CPU[4].precio);
                            break;
                        default:
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.CPU[2].descripcion:
                    precioTot -= parseInt(productos.CPU[2].precio);
                    switch (select.value) {
                        case '0':
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            CPUelegido.innerText = productos.CPU[1].descripcion;
                            precioProducto = parseInt(productos.CPU[1].precio);
                            break;
                        case '2':
                            CPUelegido.innerText = productos.CPU[2].descripcion;
                            precioProducto = parseInt(productos.CPU[2].precio);
                            break;
                        case '3':
                            CPUelegido.innerText = productos.CPU[3].descripcion;
                            precioProducto = parseInt(productos.CPU[3].precio);
                            break;
                        case '4':
                            CPUelegido.innerText = productos.CPU[4].descripcion;
                            precioProducto = parseInt(productos.CPU[4].precio);
                            break;
                        default:
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.CPU[3].descripcion:
                    precioTot -= parseInt(productos.CPU[3].precio);
                    switch (select.value) {
                        case '0':
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            CPUelegido.innerText = productos.CPU[1].descripcion;
                            precioProducto = parseInt(productos.CPU[1].precio);
                            break;
                        case '2':
                            CPUelegido.innerText = productos.CPU[2].descripcion;
                            precioProducto = parseInt(productos.CPU[2].precio);
                            break;
                        case '3':
                            CPUelegido.innerText = productos.CPU[3].descripcion;
                            precioProducto = parseInt(productos.CPU[3].precio);
                            break;
                        case '4':
                            CPUelegido.innerText = productos.CPU[4].descripcion;
                            precioProducto = parseInt(productos.CPU[4].precio);
                            break;
                        default:
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.CPU[4].descripcion:
                    precioTot -= parseInt(productos.CPU[4].precio);
                    switch (select.value) {
                        case '0':
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            CPUelegido.innerText = productos.CPU[1].descripcion;
                            precioProducto = parseInt(productos.CPU[1].precio);
                            break;
                        case '2':
                            CPUelegido.innerText = productos.CPU[2].descripcion;
                            precioProducto = parseInt(productos.CPU[2].precio);
                            break;
                        case '3':
                            CPUelegido.innerText = productos.CPU[3].descripcion;
                            precioProducto = parseInt(productos.CPU[3].precio);
                            break;
                        case '4':
                            CPUelegido.innerText = productos.CPU[4].descripcion;
                            precioProducto = parseInt(productos.CPU[4].precio);
                            break;
                        default:
                            CPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
            }
            break;
        case 'GPU':
            switch(GPUelegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            GPUelegido.innerText = productos.GPU[1].descripcion;
                            precioProducto = parseInt(productos.GPU[1].precio);
                            break;
                        case '2':
                            GPUelegido.innerText = productos.GPU[2].descripcion;
                            precioProducto = parseInt(productos.GPU[2].precio);
                            break;
                        case '3':
                            GPUelegido.innerText = productos.GPU[3].descripcion;
                            precioProducto = parseInt(productos.GPU[3].precio);
                            break;
                        default:
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.GPU[1].descripcion:
                    precioTot -= parseInt(productos.GPU[1].precio);
                    switch (select.value) {
                        case '0':
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            GPUelegido.innerText = productos.GPU[1].descripcion;
                            precioProducto = parseInt(productos.GPU[1].precio);
                            break;
                        case '2':
                            GPUelegido.innerText = productos.GPU[2].descripcion;
                            precioProducto = parseInt(productos.GPU[2].precio);
                            break;
                        case '3':
                            GPUelegido.innerText = productos.GPU[3].descripcion;
                            precioProducto = parseInt(productos.GPU[3].precio)
                            break;
                        default:
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.GPU[2].descripcion:
                    precioTot -= parseInt(productos.GPU[2].precio);
                    switch (select.value) {
                        case '0':
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            GPUelegido.innerText = productos.GPU[1].descripcion;
                            precioProducto = parseInt(productos.GPU[1].precio);
                            break;
                        case '2':
                            GPUelegido.innerText = productos.GPU[2].descripcion;
                            precioProducto = parseInt(productos.GPU[2].precio);
                            break;
                        case '3':
                            GPUelegido.innerText = productos.GPU[3].descripcion;
                            precioProducto = parseInt(productos.GPU[3].precio);
                            break;
                        default:
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.GPU[3].descripcion:
                    precioTot -= parseInt(productos.GPU[3].precio);
                    switch (select.value) {
                        case '0':
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            GPUelegido.innerText = productos.GPU[1].descripcion;
                            precioProducto = parseInt(productos.GPU[1].precio);
                            break;
                        case '2':
                            GPUelegido.innerText = productos.GPU[2].descripcion;
                            precioProducto = parseInt(productos.GPU[2].precio);
                            break;
                        case '3':
                            GPUelegido.innerText = productos.GPU[3].descripcion;
                            precioProducto = parseInt(productos.GPU[3].precio);
                            break;                 ;
                        default:
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.GPU[4].descripcion:
                    precioTot -= parseInt(productos.GPU[4].precio);
                    switch (select.value) {
                        case '0':
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            GPUelegido.innerText = productos.GPU[1].descripcion;
                            precioProducto = parseInt(productos.GPU[1].precio);
                            break;
                        case '2':
                            GPUelegido.innerText = productos.GPU[2].descripcion;
                            precioProducto = parseInt(productos.GPU[2].precio);
                                                break;
                        case '3':
                            GPUelegido.innerText = productos.GPU[3].descripcion;
                            precioProducto = parseInt(productos.GPU[3].precio)                  ;
                        default:
                            GPUelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
            }
            break;
        case 'Alimentación':
            switch(AlimentaciónElegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            AlimentaciónElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            AlimentaciónElegido.innerText = productos.Alimentación[1].descripcion;
                            precioProducto = parseInt(productos.Alimentación[1].precio);
                            break;
                        case '2':
                            AlimentaciónElegido.innerText = productos.Alimentación[2].descripcion;
                            precioProducto = parseInt(productos.Alimentación[2].precio);
                            break;
                        default:
                            AlimentaciónElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                break;
                case productos.Alimentación[1].descripcion:
                    precioTot -= parseInt(productos.Alimentación[1].precio);
                    switch (select.value) {
                        case '0':
                            AlimentaciónElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            AlimentaciónElegido.innerText = productos.Alimentación[1].descripcion;
                            precioProducto = parseInt(productos.Alimentación[1].precio);
                            break;
                        case '2':
                            AlimentaciónElegido.innerText = productos.Alimentación[2].descripcion;
                            precioProducto = parseInt(productos.Alimentación[2].precio);
                            break;
                        default:
                            AlimentaciónElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break
                case productos.Alimentación[2].descripcion:
                    precioTot -= parseInt(productos.Alimentación[2].precio);
                    switch (select.value) {
                        case '0':
                            AlimentaciónElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            AlimentaciónElegido.innerText = productos.Alimentación[1].descripcion;
                            precioProducto = parseInt(productos.Alimentación[1].precio);
                            break;
                        case '2':
                            AlimentaciónElegido.innerText = productos.Alimentación[2].descripcion;
                            precioProducto = parseInt(productos.Alimentación[2].precio);
                            break;
                        default:
                            AlimentaciónElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break
            }
            break;
        case 'RAM':
            switch(RAMelegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RAMelegido.innerText = productos.RAM[1].descripcion;
                            precioProducto = parseInt(productos.RAM[1].precio);
                            break;
                        case '2':
                            RAMelegido.innerText = productos.RAM[2].descripcion;
                            precioProducto = parseInt(productos.RAM[2].precio);
                            break;
                        case '3':
                            RAMelegido.innerText = productos.RAM[3].descripcion;
                            precioProducto = parseInt(productos.RAM[3].precio);
                            break;
                        default:
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.RAM[1].descripcion:
                    precioTot -= parseInt(productos.RAM[1].precio);
                    switch (select.value) {
                        case '0':
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RAMelegido.innerText = productos.RAM[1].descripcion;
                            precioProducto = parseInt(productos.RAM[1].precio);
                            break;
                        case '2':
                            RAMelegido.innerText = productos.RAM[2].descripcion;
                            precioProducto = parseInt(productos.RAM[2].precio);
                            break;
                        case '3':
                            RAMelegido.innerText = productos.RAM[3].descripcion;
                            precioProducto = parseInt(productos.RAM[3].precio);
                            break;
                        default:
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.RAM[2].descripcion:
                    precioTot -= parseInt(productos.RAM[2].precio);
                    switch (select.value) {
                        case '0':
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RAMelegido.innerText = productos.RAM[1].descripcion;
                            precioProducto = parseInt(productos.RAM[1].precio);
                            break;
                        case '2':
                            RAMelegido.innerText = productos.RAM[2].descripcion;
                            precioProducto = parseInt(productos.RAM[2].precio);
                            break;
                        case '3':
                            RAMelegido.innerText = productos.RAM[3].descripcion;
                            precioProducto = parseInt(productos.RAM[3].precio);
                            break;
                        default:
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.RAM[3].descripcion:
                    precioTot -= parseInt(productos.RAM[3].precio);
                    switch (select.value) {
                        case '0':
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RAMelegido.innerText = productos.RAM[1].descripcion;
                            precioProducto = parseInt(productos.RAM[1].precio);
                            break;
                        case '2':
                            RAMelegido.innerText = productos.RAM[2].descripcion;
                            precioProducto = parseInt(productos.RAM[2].precio);
                            break;
                        case '3':
                            RAMelegido.innerText = productos.RAM[3].descripcion;
                            precioProducto = parseInt(productos.RAM[3].precio);
                            break;
                        default:
                            RAMelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
            }   
            break;
        case 'SSD':
            switch (SSDelegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            SSDelegido.innerText = productos.SSD[1].descripcion;
                            precioProducto = parseInt(productos.SSD[1].precio);
                            break;
                        case '2':
                            SSDelegido.innerText = productos.SSD[2].descripcion;
                            precioProducto = parseInt(productos.SSD[2].precio);
                            break;
                        case '3':
                            SSDelegido.innerText = productos.SSD[3].descripcion;
                            precioProducto = parseInt(productos.SSD[3].precio);
                            break;
                        default:
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }   
                    break;
                case productos.SSD[1].descripcion:
                    precioTot -= parseInt(productos.SSD[1].precio);
                    switch (select.value) {
                        case '0':
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            SSDelegido.innerText = productos.SSD[1].descripcion;
                            precioProducto = parseInt(productos.SSD[1].precio);
                            break;
                        case '2':
                            SSDelegido.innerText = productos.SSD[2].descripcion;
                            precioProducto = parseInt(productos.SSD[2].precio);
                            break;
                        case '3':
                            SSDelegido.innerText = productos.SSD[3].descripcion;
                            precioProducto = parseInt(productos.SSD[3].precio);
                            break;
                        default:
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.SSD[2].descripcion:
                    precioTot -= parseInt(productos.SSD[2].precio);
                    switch (select.value) {
                        case '0':
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            SSDelegido.innerText = productos.SSD[1].descripcion;
                            precioProducto = parseInt(productos.SSD[1].precio);
                            break;
                        case '2':
                            SSDelegido.innerText = productos.SSD[2].descripcion;
                            precioProducto = parseInt(productos.SSD[2].precio);
                            break;
                        case '3':
                            SSDelegido.innerText = productos.SSD[3].descripcion;
                            precioProducto = parseInt(productos.SSD[3].precio);
                            break;
                        default:
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                    }
                    break;
                case productos.SSD[3].descripcion:
                    precioTot -= parseInt(productos.SSD[3].precio);
                    switch (select.value) {
                        case '0':
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            SSDelegido.innerText = productos.SSD[1].descripcion;
                            precioProducto = parseInt(productos.SSD[1].precio);
                            break;
                        case '2':
                            SSDelegido.innerText = productos.SSD[2].descripcion;
                            precioProducto = parseInt(productos.SSD[2].precio);
                            break;
                        case '3':
                            SSDelegido.innerText = productos.SSD[3].descripcion;
                            precioProducto = parseInt(productos.SSD[3].precio);
                            break;
                        default:
                            SSDelegido.innerText = '';
                            precioProducto = parseInt(0);
                             break;
                    }
                    break;
            }
            break;
        case 'PlacaBase':
            switch (PBelegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            PBelegido.innerText = productos.PlacaBase[1].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[1].precio);
                            break;
                        case '2':
                            PBelegido.innerText = productos.PlacaBase[2].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[2].precio);
                            break;
                        case '3':
                            PBelegido.innerText = productos.PlacaBase[3].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[3].precio);
                            break;
                        default:
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.PlacaBase[1].descripcion:
                    precioTot -= parseInt(productos.PlacaBase[1].precio);
                    switch (select.value) {
                        case '0':
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            PBelegido.innerText = productos.PlacaBase[1].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[1].precio);
                            break;
                        case '2':
                            PBelegido.innerText = productos.PlacaBase[2].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[2].precio);
                            break;
                        case '3':
                            PBelegido.innerText = productos.PlacaBase[3].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[3].precio);
                            break;
                        default:
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.PlacaBase[2].descripcion:
                    precioTot -= parseInt(productos.PlacaBase[2].precio);
                    switch (select.value) {
                        case '0':
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            PBelegido.innerText = productos.PlacaBase[1].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[1].precio);
                            break;
                        case '2':
                            PBelegido.innerText = productos.PlacaBase[2].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[2].precio);
                            break;
                        case '3':
                            PBelegido.innerText = productos.PlacaBase[3].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[3].precio);
                            break;
                        default:
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.PlacaBase[3].descripcion:
                    precioTot -= parseInt(productos.PlacaBase[3].precio);
                    switch (select.value) {
                        case '0':
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            PBelegido.innerText = productos.PlacaBase[1].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[1].precio);
                            break;
                        case '2':
                            PBelegido.innerText = productos.PlacaBase[2].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[2].precio);
                            break;
                        case '3':
                            PBelegido.innerText = productos.PlacaBase[3].descripcion;
                            precioProducto = parseInt(productos.PlacaBase[3].precio);
                            break;
                        default:
                            PBelegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
            }   
            break;
        case 'Disipador':
            switch (RefrigeracionElegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RefrigeracionElegido.innerText = productos.Disipador[1].descripcion;
                            precioProducto = parseInt(productos.Disipador[1].precio);
                            break;
                        case '2':
                            RefrigeracionElegido.innerText = productos.Disipador[2].descripcion;
                            precioProducto = parseInt(productos.Disipador[2].precio);
                            break;
                        case '3':
                            RefrigeracionElegido.innerText = productos.Disipador[3].descripcion;
                            precioProducto = parseInt(productos.Disipador[3].precio);
                            break;
                        default:
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }   
                    break;
                case productos.Disipador[1].descripcion:
                    precioTot -= parseInt(productos.Disipador[1].precio);
                    switch (select.value) {
                        case '0':
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RefrigeracionElegido.innerText = productos.Disipador[1].descripcion;
                            precioProducto = parseInt(productos.Disipador[1].precio);
                            break;
                        case '2':
                            RefrigeracionElegido.innerText = productos.Disipador[2].descripcion;
                            precioProducto = parseInt(productos.Disipador[2].precio);
                            break;
                        case '3':
                            RefrigeracionElegido.innerText = productos.Disipador[3].descripcion;
                            precioProducto = parseInt(productos.Disipador[3].precio);
                            break;
                        default:
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.Disipador[2].descripcion:
                    precioTot -= parseInt(productos.Disipador[2].precio);
                    switch (select.value) {
                        case '0':
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RefrigeracionElegido.innerText = productos.Disipador[1].descripcion;
                            precioProducto = parseInt(productos.Disipador[1].precio);
                            break;
                        case '2':
                            RefrigeracionElegido.innerText = productos.Disipador[2].descripcion;
                            precioProducto = parseInt(productos.Disipador[2].precio);
                            break;
                        case '3':
                            RefrigeracionElegido.innerText = productos.Disipador[3].descripcion;
                            precioProducto = parseInt(productos.Disipador[3].precio);
                            break;
                        default:
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
                case productos.Disipador[3].descripcion:
                    precioTot -= parseInt(productos.Disipador[3].precio);
                    switch (select.value) {
                        case '0':
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            RefrigeracionElegido.innerText = productos.Disipador[1].descripcion;
                            precioProducto = parseInt(productos.Disipador[1].precio);
                            break;
                        case '2':
                            RefrigeracionElegido.innerText = productos.Disipador[2].descripcion;
                            precioProducto = parseInt(productos.Disipador[2].precio);
                            break;
                        case '3':
                            RefrigeracionElegido.innerText = productos.Disipador[3].descripcion;
                            precioProducto = parseInt(productos.Disipador[3].precio);
                            break;
                        default:
                            RefrigeracionElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }
                    break;
            }
            break;
        case 'Chasis':
            switch (ChasisElegido.innerText){
                case "":
                    switch (select.value) {
                        case '0':
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            ChasisElegido.innerText = productos.Chasis[1].descripcion;
                            precioProducto = parseInt(productos.Chasis[1].precio);
                            break;
                        case '2':
                            ChasisElegido.innerText = productos.Chasis[2].descripcion;
                            precioProducto = parseInt(productos.Chasis[2].precio);
                            break;
                        case '3':
                            ChasisElegido.innerText = productos.Chasis[3].descripcion;
                            precioProducto = parseInt(productos.Chasis[3].precio);
                            break;
                        default:
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }   
                break;
                case productos.Chasis[1].descripcion:
                    precioTot -= parseInt(productos.Chasis[1].precio);
                    switch (select.value) {
                        case '0':
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            ChasisElegido.innerText = productos.Chasis[1].descripcion;
                            precioProducto = parseInt(productos.Chasis[1].precio);
                            break;
                        case '2':
                            ChasisElegido.innerText = productos.Chasis[2].descripcion;
                            precioProducto = parseInt(productos.Chasis[2].precio);
                            break;
                        case '3':
                            ChasisElegido.innerText = productos.Chasis[3].descripcion;
                            precioProducto = parseInt(productos.Chasis[3].precio);
                            break;
                        default:
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }   
                break;
                case productos.Chasis[2].descripcion:
                    precioTot -= parseInt(productos.Chasis[2].precio);
                    switch (select.value) {
                        case '0':
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            ChasisElegido.innerText = productos.Chasis[1].descripcion;
                            precioProducto = parseInt(productos.Chasis[1].precio);
                            break;
                        case '2':
                            ChasisElegido.innerText = productos.Chasis[2].descripcion;
                            precioProducto = parseInt(productos.Chasis[2].precio);
                            break;
                        case '3':
                            ChasisElegido.innerText = productos.Chasis[3].descripcion;
                            precioProducto = parseInt(productos.Chasis[3].precio);
                            break;
                        default:
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }   
                break;
                case productos.Chasis[3].descripcion:
                    precioTot -= parseInt(productos.Chasis[3].precio);
                    switch (select.value) {
                        case '0':
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                            break;
                        case '1':
                            ChasisElegido.innerText = productos.Chasis[1].descripcion;
                            precioProducto = parseInt(productos.Chasis[1].precio);
                            break;
                        case '2':
                            ChasisElegido.innerText = productos.Chasis[2].descripcion;
                            precioProducto = parseInt(productos.Chasis[2].precio);
                            break;
                        case '3':
                            ChasisElegido.innerText = productos.Chasis[3].descripcion;
                            precioProducto = parseInt(productos.Chasis[3].precio);
                            break;
                        default:
                            ChasisElegido.innerText = '';
                            precioProducto = parseInt(0);
                        break;
                    }   
                break;
            }
            break;
            
    }
    precioTotal.value = parseInt(precioTot) + parseInt(precioProducto) + '€';
    guardarEnLocal()
    
}

function guardarEnLocal(){
    localStorage.setItem('precioTotal',precioTotal.value)
    localStorage.setItem('CPUelegido',CPUelegido.innerText);
    localStorage.setItem('GPUelegido',GPUelegido.innerText);
    localStorage.setItem('AlimentaciónElegido',AlimentaciónElegido.innerText);
    localStorage.setItem('RAMelegido',RAMelegido.innerText);
    localStorage.setItem('SSDelegido',SSDelegido.innerText);
    localStorage.setItem('PBelegido',PBelegido.innerText);
    localStorage.setItem('RefrigeracionElegido',RefrigeracionElegido.innerText);
    localStorage.setItem('ChasisElegido',ChasisElegido.innerText);
}

//Cambiar contenido de la tarjeta según el select
function cambiarContenido(event) {
    let select = event.target;
    let section = select.closest('section')
    let image =section.querySelector('img')
    let nombre = section.querySelector('h2')
    let descripcion = section.querySelector('.descripcion')
    let precio = section.querySelector('.precio')
    let selectedText = select.options[select.selectedIndex].innerText;

    switch (section.attributes.id.nodeValue){
        case 'CPU':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.CPU[1].descripcion;
                    precio.innerText = productos.CPU[1].precio + '€';
                    image.src = productos.CPU[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.CPU[2].descripcion;
                    precio.innerText = productos.CPU[2].precio + '€';
                    image.src = productos.CPU[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.CPU[3].descripcion;
                    precio.innerText = productos.CPU[3].precio + '€';
                    image.src = productos.CPU[3].imgSrc;
                    break;
                case '4':
                    descripcion.innerText = productos.CPU[4].descripcion;
                    precio.innerText = productos.CPU[4].precio + '€';
                    image.src = productos.CPU[4].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
            }
        break;
        case 'GPU':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.GPU[1].descripcion;
                    precio.innerText = productos.GPU[1].precio + '€';
                    image.src = productos.GPU[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.GPU[2].descripcion;
                    precio.innerText = productos.GPU[2].precio + '€';
                    image.src = productos.GPU[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.GPU[3].descripcion;
                    precio.innerText = productos.GPU[3].precio + '€';
                    image.src = productos.GPU[3].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }
        break;
        case 'Alimentación':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.Alimentación[1].descripcion;
                    precio.innerText = productos.Alimentación[1].precio + '€';
                    image.src = productos.Alimentación[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.Alimentación[2].descripcion;
                    precio.innerText = productos.Alimentación[2].precio + '€';
                    image.src = productos.Alimentación[2].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }
        break;
        case 'RAM':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.RAM[1].descripcion;
                    precio.innerText = productos.RAM[1].precio + '€';
                    image.src = productos.RAM[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.RAM[2].descripcion;
                    precio.innerText = productos.RAM[2].precio + '€';
                    image.src = productos.RAM[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.RAM[3].descripcion;
                    precio.innerText = productos.RAM[3].precio + '€';
                    image.src = productos.RAM[3].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }   
        break;
        case 'SSD':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.SSD[1].descripcion;
                    precio.innerText = productos.SSD[1].precio + '€';
                    image.src = productos.SSD[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.SSD[2].descripcion;
                    precio.innerText = productos.SSD[2].precio + '€';
                    image.src = productos.SSD[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.SSD[3].descripcion;
                    precio.innerText = productos.SSD[3].precio + '€';
                    image.src = productos.SSD[3].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }   
        break;
        case 'PlacaBase':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.PlacaBase[1].descripcion;
                    precio.innerText = productos.PlacaBase[1].precio + '€';
                    image.src = productos.PlacaBase[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.PlacaBase[2].descripcion;
                    precio.innerText = productos.PlacaBase[2].precio + '€';
                    image.src = productos.PlacaBase[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.PlacaBase[3].descripcion;
                    precio.innerText = productos.PlacaBase[3].precio + '€';
                    image.src = productos.PlacaBase[3].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }   
        break;
        case 'Disipador':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.Disipador[1].descripcion;
                    precio.innerText = productos.Disipador[1].precio + '€';
                    image.src = productos.Disipador[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.Disipador[2].descripcion;
                    precio.innerText = productos.Disipador[2].precio + '€';
                    image.src = productos.Disipador[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.Disipador[3].descripcion;
                    precio.innerText = productos.Disipador[3].precio + '€';
                    image.src = productos.Disipador[3].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }   
        break;
        case 'Chasis':
            switch (select.value) {
                case '0':
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                    break;
                case '1':
                    descripcion.innerText = productos.Chasis[1].descripcion;
                    precio.innerText = productos.Chasis[1].precio + '€';
                    image.src = productos.Chasis[1].imgSrc;
                    break;
                case '2':
                    descripcion.innerText = productos.Chasis[2].descripcion;
                    precio.innerText = productos.Chasis[2].precio + '€';
                    image.src = productos.Chasis[2].imgSrc;
                    break;
                case '3':
                    descripcion.innerText = productos.Chasis[3].descripcion;
                    precio.innerText = productos.Chasis[3].precio + '€';
                    image.src = productos.Chasis[3].imgSrc;
                    break;
                default:
                    descripcion.innerText = 'Elija su '+nombre.innerText;
                break;
            }   
        break;
    }
    for (let pieza of piezas){ 
        pieza.addEventListener('dragstart',guardarInfo);
    }
}
document.addEventListener('DOMContentLoaded',domCargado);
var elegidos = document.getElementsByClassName('elegidos');
    for (let elegido of elegidos){
        elegido.addEventListener('click',function (e){removeItem(e, elegido)})
    }
