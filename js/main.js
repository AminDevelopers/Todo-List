//  creating basics variables
let taskInput = document.querySelector("#taskInput");
let btnTask = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

btnTask.addEventListener("click", () => {
  // creating variable for having the value of the input without spacement
  let taskInputText = taskInput.value.trim();
  // condition if input is not empty, in that case creating the li, append, and clear the input
  if (taskInputText !== "") {
    let taskLi = document.createElement("div");
    taskLi.className = "newDiv";
    let taskcheckBox = document.createElement("input");
    taskcheckBox.type = "checkbox";
    taskcheckBox.className = "taskCheckBox";
    taskcheckBox.addEventListener("click", () => {
      taskLi.style.backgroundColor = "white";
      taskLi.style.color = "black";
      modifyBtn.style.border = "2px solid black";
      deleteBtn.style.border = "2px solid black";
    });
    let taskText = document.createTextNode(taskInputText);
    let modifyBtn = document.createElement("button");
    modifyBtn.className = "modifyBtn";
    modifyBtn.innerText = "modify";
    modifyBtn.addEventListener("click", () => {
      let valmodif = document.createElement("input");
      valmodif.style.border = "2px solid black";
      valmodif.className = "valmodif";
      valmodif.setAttribute("placeholder", "Enter your modification");
      taskLi.insertBefore(valmodif, deleteBtn);

      let confirmerChange = document.createElement("button");
      let txtChange = document.createTextNode("Valider");
      confirmerChange.className = "btn_valider";
      confirmerChange.style.border = "2px solid black";
      confirmerChange.appendChild(txtChange);
      taskLi.appendChild(confirmerChange);
      modifyBtn.replaceWith(confirmerChange);

      confirmerChange.addEventListener("click", function () {
        confirmerChange.replaceWith(modifyBtn);
        taskText.textContent = valmodif.value;
        valmodif.remove();
      });
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => {
      let btn1 = document.createElement("button");
      btn1.className = "btn1";
      let textBtn1 = document.createTextNode("Supprimé");

      btn1.addEventListener("click", () => {
        taskLi.remove();
      });
      btn1.appendChild(textBtn1);
      let btn2 = document.createElement("button");
      btn2.className = "btn2";
      let btn2Text = document.createTextNode("Annulé");
      btn2.addEventListener("click", () => {
        btn1.remove();
        btn2.replaceWith(deleteBtn);
      });
      btn2.appendChild(btn2Text);
      deleteBtn.replaceWith(btn1);
      // taskLi.appendChild(btn1);
      taskLi.appendChild(btn2);
    });
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "delete";
    taskLi.style.marginTop = "2em";
    taskLi.style.padding = "2em";
    taskLi.style.color = "white";
    taskLi.style.backgroundColor = "black";
    taskLi.style.borderRadius = "15px";
    taskLi.appendChild(taskcheckBox);
    taskLi.appendChild(taskText);
    taskList.appendChild(taskLi);
    taskLi.appendChild(modifyBtn);
    taskLi.appendChild(deleteBtn);
    taskInput.value = "";
  }
});

// adding eventlistener for marking tasks as completed
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("taskCheckBox")) {
    let taskLi = event.target.parentElement;
    taskLi.classList.toggle("completed");
    if (!event.target.checked) {
      taskLi.style.backgroundColor = "black";
      taskLi.style.color = "white";
    }
  }
});
// function to link my github
function github() {
  window.open("https://github.com/AminDevelopers/", "_blank");
}
let github1 = document.querySelector("#github");
github1.addEventListener("click", github);
