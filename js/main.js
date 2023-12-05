//  creation des variables
let taskInput = document.querySelector("#taskInput");
let btnTask = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

btnTask.addEventListener("click", () => {
  // creation de variable pour recuperer la valuer de l'input sans espacement
  let taskInputText = taskInput.value.trim();
  // condition if si l'input n'est pas vide dans ce cas creation de li, append, et vider l'input
  if (taskInputText !== "") {
    let taskLi = document.createElement("li");
    taskList.appendChild(taskLi);
    taskInput.value = "";
  }
});
