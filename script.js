const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Adicionar tarefa
addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove">X</button>
    `;

    // Marcar como concluída
    li.querySelector("span").addEventListener("click", function () {
        this.classList.toggle("done");
    });

    // Remover tarefa
    li.querySelector(".remove").addEventListener("click", function () {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
}
