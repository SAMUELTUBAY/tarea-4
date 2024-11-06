window.onload = function() {
    const lista = document.getElementById("lista").getElementsByTagName("li");
    for (let i = 0; i < lista.length; i++) {
        lista[i].innerText = `Ejemplo actualizado ${i + 1}`;
    }
};