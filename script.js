document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".text");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
 
    let currentSize = 16; // Tamanho de fonte inicial em pixels
    const maxSize = 24;   // Tamanho máximo de fonte permitido
    const minSize = 12;   // Tamanho mínimo de fonte permitido
 
    // Função para ajustar o tamanho da fonte
    function adjustFontSize(size) {
        textElements.forEach(function (element) {
            element.style.fontSize = size + "px";
        });
    }
 
    // Função para aumentar a fonte
    increaseBtn.addEventListener("click", function () {
        if (currentSize < maxSize) {
            currentSize += 2;
            adjustFontSize(currentSize);
        }
    });
 
    // Função para diminuir a fonte
    decreaseBtn.addEventListener("click", function () {
        if (currentSize > minSize) {
            currentSize -= 2;
            adjustFontSize(currentSize);
        }
    });
});

