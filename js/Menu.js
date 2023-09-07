let componenteMenu = document.getElementById('componenteMenu');
let componenteMenuInterior = document.getElementById('componenteMenuInterior');
let isOpen = false;

const toggleMenu = () => {
    if (isOpen) {
        isOpen = false;
        componenteMenuInterior.animate([
            { width: '320px', color:'rgb(255, 174, 0)' },
            { width: '0px', color:'transparent' },
        ], {
            duration: 300,
        });
        setTimeout(() => {
            componenteMenu.style.display = "none"
        }, 300);
    } else {
        componenteMenu.style.display = "block"
        componenteMenuInterior.animate([
            { width: '0px', color:'transparent' },
            { width: '320px', color:'rgb(255, 174, 0)' },
        ], {
            duration: 300,
        });
        isOpen = true;
    }
}