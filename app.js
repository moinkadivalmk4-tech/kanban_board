const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(input.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        id: Date.now().toString(),
        text: input.value,
        status: "todo"
    });

    saveTasks();
    renderTasks();

    input.value = "";
});

function renderTasks(){

    document.getElementById("todo").innerHTML = "";
    document.getElementById("progress").innerHTML = "";
    document.getElementById("done").innerHTML = "";

    tasks.forEach(task => {

        const card = document.createElement("div");

        card.classList.add("task");
        card.draggable = true;
        card.id = task.id;

        card.addEventListener("dragstart", drag);

        card.innerHTML = `
            <p>${task.text}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        card.querySelector(".edit-btn").addEventListener("click", () => {

            const updated = prompt(
                "Edit Task",
                task.text
            );

            if(updated && updated.trim() !== ""){

                task.text = updated;

                saveTasks();
                renderTasks();

            }

        });

        card.querySelector(".delete-btn").addEventListener("click", () => {

            tasks = tasks.filter(
                item => item.id !== task.id
            );

            saveTasks();
            renderTasks();

        });

        document
            .getElementById(task.status)
            .appendChild(card);

    });

}

renderTasks();