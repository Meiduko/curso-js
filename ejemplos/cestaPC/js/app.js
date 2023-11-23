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
            precio: "450", descripcion: 'intel i3, gen 12, 35GHz', imgSrc:'./img/i9-35ghz.webp'
        }
    },
    GPU: {
        1:{
            precio: "160", descripcion: 'RTX 2070', imgSrc:'./img/rtx-2070-8gb.webp'
        },
        2:{
            precio: "450", descripcion: 'RTX 3070', imgSrc:'./img/rtx-3070-8gb.webp'
        },
        3:{
            precio: "550", descripcion: 'RTX 4070', imgSrc:'./img/rtx-4070-2gb.webp'
        }
    },
    alimentacion: {
        1:{
            precio: "130", descripcion: 'Corsair RM White Series 850W', imgSrc:'./img/corsair-rm-white-series-rm850-850w-80-plus-gold-full-modular.jpg'
        },
        2:{
            precio: "65", descripcion: 'corsair cv series 650w', imgSrc:'./img/corsair-cv-series-cv650-650w-80-plus-bronze-v2.webp'
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
    placaBase:{
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
    disipador:{
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
    chasis:{
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

//Cambiar contenido de la tarjeta según el select
function cambiarContenido(event) {
    let select = event.target;
    let section = select.closest('section')
    let nombre = section.querySelector('h2')
    let descripcion = section.querySelector('.descripcion')
    let precio = section.querySelector('.precio')
    let selectedText = select.options[select.selectedIndex].innerText; 

    switch (select.value) {
        case '0':
            descripcion.innerText = 'Elija su '+nombre.innerText;
            
            break;
        case '1':
            descripcion.innerText = descripcion.innerText = selectedText;
            precio.innerText = '23'
            break;
        case '2':
            descripcion.innerText = descripcion.innerText = selectedText;
            break;
        default:
            descripcion.innerText = 'Elija su '+nombre.innerText;
            }
}



document.addEventListener('DOMContentLoaded',domCargado);

