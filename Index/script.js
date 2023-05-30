const centeredROT = document.getElementById("centeredROT");
const centeredWZG = document.getElementById("centeredWZG");
const centeredWEN = document.getElementById("centeredWEN");
const centeredSTU = document.getElementById("centeredSTU");

function reference1 () {
    location.href="/Zabytki_Cieszyna/GaleriaROT/galeriaROT.html";
}
function reference2 () {
    location.href="/Zabytki_Cieszyna/GaleriaWZG/galeriaWZG.html";
}
function reference3 () {
    location.href="/Zabytki_Cieszyna/GaleriaWEN/galeriaWEN.html";
}
function reference4 () {
    location.href="/Zabytki_Cieszyna/GaleriaSTU/galeriaSTU.html";
}
centeredROT.addEventListener("click", reference1);
centeredWZG.addEventListener("click", reference2);
centeredWEN.addEventListener("click", reference3);
centeredSTU.addEventListener("click", reference4);