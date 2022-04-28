// 02.. 
let inputAdd = document.getElementsByClassName("classes-to-add")[0];
let inputRemove = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title='Current']");
let classList = document.querySelector(".classes-list div");

inputAdd.onblur = function () {
    let inpuAddtValue = inputAdd.value;
    if (inpuAddtValue !== "") {
        inpuAddtValue.split(" ").map((ele) => {
            let newClass = document.createElement("span");
            newClass.className = ele.toLowerCase();
            newClass.textContent = ele.toLowerCase();
            classList.appendChild(newClass);
        });

    }
}

inputRemove.onblur = function () {
    let inputRemoveValue = inputRemove.value.toLowerCase();
    if (inputRemoveValue !== "") {
        document.querySelectorAll("span").forEach((ele) => {
            let inRemove = inputRemoveValue.split(" ").map((el) => {
                if (ele.className === el) {
                    ele.remove();
                }
            });

        });
    }
}

//03..
document.getElementsByClassName("our-element")[0].nextElementSibling.remove()
let ourP = document.getElementsByClassName("our-element")[0];
let copyD1 = document.getElementsByClassName("our-element")[0].cloneNode(true);
let copyD2 = document.getElementsByClassName("our-element")[0].cloneNode(true);
copyD1.className = "start";
copyD1.textContent = "Start"
copyD1.title = "Start Element";
copyD1.setAttribute("data-value", "Start");
copyD2.className = "end";
copyD2.textContent = "End"
copyD2.title = "End Element";
copyD2.setAttribute("data-value", "End");
ourP.before(copyD1);
ourP.after(copyD2);


//04..
let ourTarget = document.getElementsByTagName("span")[0].nextSibling.nextSibling.nextSibling.textContent;
console.log(ourTarget);

//05..
let divTarget = document.getElementById("assin5").children[0];
let spanTarget = document.getElementById("assin5").children[1];
let pTarget = document.getElementById("assin5").children[2];
let articleTarget = document.getElementById("assin5").children[3];
let sectionTarget = document.getElementById("assin5").children[4];
divTarget.addEventListener("click", function () {
    console.log("This is Div");
}
)
spanTarget.addEventListener("click", function () {
    console.log("This is Span");
}
)
pTarget.addEventListener("click", function () {
    console.log("This is P");
}
)
articleTarget.addEventListener("click", function () {
    console.log("This is Article");
}
)
sectionTarget.addEventListener("click", function () {
    console.log("This is Section");
}
) 