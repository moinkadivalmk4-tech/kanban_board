const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const todo = document.getElementById("todo");

form.addEventListener("submit",function(e){

    e.preventDefault();

    if(input.value.trim() === ""){
        return;
    }

    const task = document.createElement("div");

    task.textContent = input.value;

    task.style.background = "#e8e8e8";
    task.style.padding = "10px";
    task.style.marginBottom = "10px";

    todo.appendChild(task);

    input.value = "";
});