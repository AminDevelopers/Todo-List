//  creating basics variables
let taskInput = document.querySelector("#taskInput");
let btnTask = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

btnTask.addEventListener("click", () => {
  // creating variable for having the value of the input without spacement
  let taskInputText = taskInput.value.trim();
  // condition if input is not empty, in that case creating the li, append, and clear the input
  if (taskInputText !== "") {
    let taskLi = document.createElement("li");
    taskList.appendChild(taskLi);
    taskInput.value = "";
  }

  // adding eventlistener for marking tasks as completed
});
