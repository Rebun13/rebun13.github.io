// SELECTOR DE LINGUAXE
let selectorLinguaxe = document.getElementById('linguaxe');
selectorLinguaxe.onchange = function() {
    window.location.replace(window.location.origin + this.value);
}
// BARRA LATERAL
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    //document.getElementById("main").style.marginLeft = "250px";
}
