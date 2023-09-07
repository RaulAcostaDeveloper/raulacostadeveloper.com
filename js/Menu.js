let contenedorMenu = document.getElementById('containerGlobalMenu');
let interiorMenu = document.getElementById('interiorMenu');
let pers1 = document.getElementById('elPersistente1');
let pers2 = document.getElementById('elPersistente2');
let pers3 = document.getElementById('elPersistente3');

// Acciones del menú global
const abrirMenu = ()=>{
    contenedorMenu.style.display='block';
    interiorMenu.style.animationName="openMenu";
    interiorMenu.style.animationDuration="500ms";
    interiorMenu.style.animationFillMode="initial";
    pers1.style.display = "block";
    pers2.style.display = "block";
    pers3.style.display = "block";
}

const cerrarMenu = ()=>{
    interiorMenu.style.animationName="closeMenu";
    interiorMenu.style.animationFillMode="initial";
    interiorMenu.style.animationDuration="500ms";
    pers1.style.display = "none";
    pers2.style.display = "none";
    pers3.style.display = "none";
    setTimeout(() => {      
        contenedorMenu.style.display='none';
    }, 300);
}