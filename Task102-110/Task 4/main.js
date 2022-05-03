let div = document.querySelector('.myDiv');
function countDown() {
    div.innerHTML -= 1;

    if (div.innerHTML === "0") {
        location.href = "https://www.google.com/"
    }

}


let counter = setInterval(countDown, 1000);