let div = document.querySelector('.myDiv');
function countDown() {
    div.innerHTML -= 1;

    if (div.innerHTML === "0") {
        clearInterval(counter);
    }

}


let counter = setInterval(countDown, 1000);