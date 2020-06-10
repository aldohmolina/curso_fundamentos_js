var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.webp";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load",dibujar);

var vaca = new Image();
var cerdo = new Image();
var pollo = new Image();

vaca.src = "vaca.webp";
cerdo.src = "cerdo.webp";
pollo.src = "pollo.webp";

vaca.addEventListener("load",dibujarAnimales);
cerdo.addEventListener("load",dibujarAnimales);
pollo.addEventListener("load",dibujarAnimales);


function dibujarAnimales(event){
    let imagen = event.target;
    const x = aletorio(0,(vp.width-imagen.width));
    const y  = aletorio(0,(vp.height-imagen.height));
    console.log('x',x,"\n",'y',y);
    papel.drawImage(imagen,x,y);
}

function dibujar(){
    papel.drawImage(fondo,0,0);
}

function aletorio(max,min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
