// SELECTOR DE LINGUAXE
let selectorLinguaxe = document.getElementById('linguaxe');
selectorLinguaxe.onchange = function() {
    window.location.replace(window.location.origin + this.value);
}
// BARRA LATERAL
const navbar = document.getElementById("navbar");
function openNav() {
    navbar.className = "active";
}
function closeNav() {
    navbar.className = "";
}
