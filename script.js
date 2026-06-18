const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");

let tasks = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() === "") return;

    tasks.push({
        id: Date.now(),
        text: input.value
    });

    renderTasks();

    input.value = "";
});

function renderTasks() {

    const todo = document.getElementById("todo");

    todo.innerHTML = "";

    tasks.forEach(task => {

        const card = document.createElement("div");

        card.classList.add("task");

        card.innerHTML = `
            <p>${task.text}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        card.querySelector(".edit-btn").addEventListener("click", () => {

            const updated = prompt("Edit Task", task.text);

            if (updated) {
                task.text = updated;
                renderTasks();
            }

        });

        card.querySelector(".delete-btn").addEventListener("click", () => {

            tasks = tasks.filter(item => item.id !== task.id);

            renderTasks();

        });

        todo.appendChild(card);

    });

}