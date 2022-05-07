let workstation = document.querySelector('.workstation');
let container = document.querySelector('.container');
let fontStyle = document.getElementById('font-style');
let fontColor = document.getElementById('font-colors');
let fontSize = document.getElementById('font-size');
// Font Family Changing 






fontStyle.onchange = function () {
    workstation.style.fontFamily = this.value;
    localStorage.setItem("font-Family", this.value)
};
if (localStorage.getItem("font-Family")) {
    workstation.style.fontFamily = localStorage.getItem("font-Family");
    fontStyle.value = localStorage.getItem("font-Family");
}
// Color Changing

fontColor.onchange = function () {
    workstation.style.color = this.value;
    workstation.style.borderColor = this.value;
    localStorage.setItem("color", this.value);
}
if (localStorage.getItem("color")) {
    workstation.style.color = localStorage.getItem("color");
    workstation.style.borderColor = localStorage.getItem("color");
    fontColor.value = localStorage.getItem("color");
}

// Font Size Changing

fontSize.onchange = function () {
    workstation.style.fontSize = `${this.value}px`;
    localStorage.setItem("font-size", `${this.value}px`);
}
if (localStorage.getItem("font-size")) {
    workstation.style.fontSize = localStorage.getItem("font-size");
    fontSize.value = localStorage.getItem("font-size").slice(0, 2);
}