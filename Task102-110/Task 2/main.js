let container = document.querySelector(".container");
let button = document.getElementById("btn");
setTimeout(function () {
    container.style.display = "flex";

}, 5000)
button.onclick = function () {
    container.style.display = "none";
}