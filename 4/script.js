window.onload = function() {
    const datos = [
        ["Clara", "Garcia", "Marta de Rholdos"],
        ["Pablo", "Torres", "Juanmontalvo"],
        ["Daniel", "Ortega", "Juan Tanca Marengo"]
    ];

    const filas = document.getElementById("tabla").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    
    for (let i = 0; i < datos.length; i++) {
        const celdas = filas[i].getElementsByTagName("td");
        for (let j = 0; j < datos[i].length; j++) {
            celdas[j].innerText = datos[i][j];
        }
    }
};