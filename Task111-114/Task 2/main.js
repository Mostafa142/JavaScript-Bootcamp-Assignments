let form = document.querySelector(".form");
let txtInput = document.querySelector('#textInput');
let numInput = document.querySelector('#numInput');
let passInput = document.querySelector('#passInput');
let selectbox = document.querySelector('#selectBox');

txtInput.onblur = function () {
    sessionStorage.setItem('textInput-Value', this.value)
};
if (sessionStorage.getItem("textInput-Value")) {
    txtInput.value = sessionStorage.getItem("textInput-Value");
}

numInput.onblur = function () {
    sessionStorage.setItem('NumInput-Value', this.value)
}
if (sessionStorage.getItem("NumInput-Value")) {
    numInput.value = sessionStorage.getItem("NumInput-Value");
}


passInput.onblur = function () {
    sessionStorage.setItem('passInput-Value', this.value)
}
if (sessionStorage.getItem("passInput-Value")) {
    passInput.value = sessionStorage.getItem("passInput-Value");
}

selectbox.onchange = function () {
    sessionStorage.setItem('selectBox-Value', this.value)
}
if (sessionStorage.getItem("selectBox-Value")) {
    selectbox.value = sessionStorage.getItem("selectBox-Value");
}


