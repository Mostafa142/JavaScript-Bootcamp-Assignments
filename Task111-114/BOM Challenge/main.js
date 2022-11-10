let taskInput = document.getElementById("task-id");
let addBtn = document.getElementById("button-addon2");
let tasksContainer = document.querySelector(".tasks");
let task = document.getElementsByClassName("task alert alert-primary");

addBtn.addEventListener("click", function (e) {
  if (taskInput.value !== "") {
    let divTask = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let deleteIcon = document.createElement("span");

    divTask.className = "task alert alert-warning alert-dismissible fade show";
    divTask.innerText = taskInput.value;
    deleteBtn.className = "close";
    deleteBtn.appendChild(deleteIcon);
    deleteIcon.innerHTML = `&times;`;
    divTask.appendChild(deleteBtn);
    tasksContainer.appendChild(divTask);

    deleteBtn.onclick = function () {
      divTask.remove();
    };
    window.localStorage.setItem("tasks", taskInput.value);
  }
});
