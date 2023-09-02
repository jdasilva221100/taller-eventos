document.addEventListener("DOMContentLoaded", function () {
    const divElement = document.getElementById("miDiv");
    
    divElement.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
});