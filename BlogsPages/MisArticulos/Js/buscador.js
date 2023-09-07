// Opciones de la búsqueda
const opciones = [
    {
        nombre: '7 competencias organizacionales',
        liga: './1.html'
    },
    {
        nombre: 'Aplicaciones accesibles',
        liga: './2.html'
    },
];

const search = ()=> {
    const input = document.getElementById("searchInput").value.toLowerCase();
  
    // Recibe los resultados de la búsqueda
    const opcionesFiltradas = opciones.filter( (elemento) => {
        console.log(elemento);
        return elemento.nombre.toLowerCase().includes(input.toLowerCase());
    });

    // Pinta los resultados en un div
    if (input.length == 0) {
        displayResults(opciones);
    } else {
        displayResults(opcionesFiltradas);
    }
}
  
const displayResults = (opcionesFiltradas) => {
    const resultsDiv = document.getElementById("searchResults");
    let htmlString = "";
    // Iterar sobre los resultados y mostrarlos en el elemento div
    for (let i = 0; i < opcionesFiltradas.length; i++) {
        htmlString = htmlString + `
        <h4>
            <a href = "${opcionesFiltradas[i].liga}">${opcionesFiltradas[i].nombre}</a>
        </h4>
        `;
        resultsDiv.innerHTML = htmlString;
        
    }
}
search();