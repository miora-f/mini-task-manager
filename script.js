const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const taskItem = document.createElement("li");
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        taskTextElement.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });
 
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen"; 
        
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();
            taskItem.remove();
        });
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
});