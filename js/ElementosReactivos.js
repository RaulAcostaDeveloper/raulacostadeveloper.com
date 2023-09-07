if (urlActual.includes("BlogsPages")) {
    var rutaRightArrow = "../../Imagenes/rightarrowbold.png";
    var rutaDownArrow = "../../Imagenes/downarrowbold.png";
} else {
    var rutaRightArrow = "./Imagenes/rightarrowbold.png";
    var rutaDownArrow = "./Imagenes/downarrowbold.png";
}
let tiempo = 500;
const despliegaAbajo = (id, display)=>{
    let contenido = document.getElementById(id);
    let imgFlecha = document.getElementById(id+'img');

    if(contenido.getAttribute("abierto")=="true"){
        if (imgFlecha) {
            imgFlecha.setAttribute("src",rutaRightArrow);
        }
        contenido.animate([
            { height: `${contenido.clientHeight}px`, opacity:'1' },
            { height: '0px', opacity:'0' },
        ], {
            duration: tiempo,
        });
        setTimeout(() => {
            contenido.setAttribute("abierto", "false");
            contenido.style.display='none';
        }, tiempo-100);
    } else if (contenido.getAttribute("abierto")=="false") {
        if (imgFlecha) {
            imgFlecha.setAttribute("src",rutaDownArrow)
        }
        if (display=="flex") {
            contenido.style.display = 'flex';
        } else {
            contenido.style.display = 'block';
        }
        contenido.animate([
            { height: '0px', opacity:'0' },
            { height: `${contenido.clientHeight}px`, opacity:'1' },
        ], {
            duration: tiempo,
        }); 
        contenido.setAttribute("abierto", "true");

    }
}
