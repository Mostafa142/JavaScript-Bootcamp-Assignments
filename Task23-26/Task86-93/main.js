let one = document.getElementById("elzero");
console.log(one);


let two = document.getElementsByClassName("element")[0];
console.log(two);

let three = document.getElementsByName("js")[0];
console.log(three);

let four = document.getElementsByTagName("div")[0];
console.log(four);

let five = document.querySelector("div");
console.log(five);

let six = document.querySelector("#elzero");
console.log(six);

let seven = document.querySelector(".element");
console.log(seven);

let eight = document.querySelector("div[name]");
console.log(eight);

let nine = document.querySelectorAll("div")[0];
console.log(nine);

let ten = document.querySelectorAll(".element")[0];
console.log(ten);

let eleven = document.querySelectorAll("#elzero")[0];
console.log(eleven);

let twelve = document.querySelectorAll("div[name]")[0];
console.log(twelve);

let thirteen = document.body.children[0];
console.log(thirteen);

let fourteen = document.body.childNodes[1];
console.log(fourteen);

let fifteen = document.body.firstElementChild;
console.log(fifteen);



// ----------------------------------------------

// for (let i = 0; i <= 10; i++) {
//     let imgSrc = document.querySelectorAll("img")[i];
//     imgSrc.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     imgSrc.alt = " Elzero Logo";
// }

// ----------------------------------------------


let myInput = document.querySelector("[name='dollar']");
let myResult = document.getElementsByClassName("result")[0];

document.forms[0].onchange = function (e) {
    let inputValid = false;

    if (myInput.value != "" && myInput.value.length < 10 && myInput.value > 0) {
        myResult.innerHTML = `${myInput.value} USD Dollar = ${((myInput.value) * 15.6).toFixed(2)} Egyptian Pound`
        console.log(myResult)
    }



    if (inputValid === false) {
        e.preventDefault();
    }

}


// ----------------------------------------------

let ele1 = document.getElementsByClassName("one")[0].title;
let ele1In = document.getElementsByClassName("one")[0].textContent;

let ele2 = document.getElementsByClassName("two")[0].title;
let ele2In = document.getElementsByClassName("two")[0].textContent;


document.getElementsByClassName("one")[0].title = ele2;
document.getElementsByClassName("one")[0].textContent = ele2In;

document.getElementsByClassName("two")[0].title = ele1;
document.getElementsByClassName("two")[0].textContent = `${ele1In} 2`;


// ----------------------------------------------


