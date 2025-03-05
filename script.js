function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
