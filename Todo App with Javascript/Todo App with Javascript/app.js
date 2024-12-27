// button --> click event
const AddButton = document.querySelector("button");
const InputBox = document.querySelector("input");
const TaskList = document.querySelector("#tasklist");

AddButton.addEventListener("click", addTask);
InputBox.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    let taskValue = InputBox.value.trim();
    
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskValue} 
        <i class="fa-solid fa-trash"></i>
    `;

    // Mark as completed on click
    listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");
    });

    // Delete task
    listItem.querySelector("i").addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent triggering the mark completed event
        listItem.remove();
    });

    TaskList.appendChild(listItem);
    InputBox.value = ""; // Clear input field
}
