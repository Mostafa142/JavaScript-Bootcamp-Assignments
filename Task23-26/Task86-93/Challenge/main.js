let inputElements = document.getElementsByClassName("input")[0];
let inputText = document.getElementsByClassName("input")[1];
let inputSelect = document.getElementsByClassName("input")[2];
let resultDiv = document.getElementsByClassName("results")[0];

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  document.querySelectorAll(".box").forEach(function (e) {
    e.remove();
  });

  let eleNum = inputElements.value;
  if (eleNum > 0) {
    for (let i = 0; i < eleNum; i++) {
      let element = document.createElement(inputSelect.value);
      element.className = "box";
      element.setAttribute("title", "Element");
      element.id = `id-${i + 1}`;
      element.innerText = inputText.value;
      resultDiv.appendChild(element);
    }
  }
};
