const task = document.getElementById("task");
const add = document.querySelector('.submit');
const renderTasks = document.getElementById("renderTasks");


function addTodo(e) {
   if (task.value.length == 0) {
        alert("Please enter a task!")
    } else {

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("class", "btn btn-danger btn-sm float-right");

        li.setAttribute("class","item");
        li.textContent = task.value;
        renderTasks.appendChild(li);
        task.value = "";

        li.appendChild(deleteButton)

                deleteButton.addEventListener("click", deleteTask);

                function deleteTask(e) {
                    e.target.parentElement.remove()
                };
            }
}