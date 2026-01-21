const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const listElement = document.getElementById("todoList");

let tasks = [];

function renderTasks() {
    listElement.innerHTML = "";

    tasks.forEach((task) => {
        const newItem = document.createElement("li");
        newItem.innerText = task;
        listElement.appendChild(newItem);
    });
}

btn.addEventListener("click", () => {

    const text = input.value;
    if (text !== "") {
        tasks.push(text);
        renderTasks();
        input.value = "";
    }
});
