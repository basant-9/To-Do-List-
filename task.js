function addTask () {
    let taskInput = document.getElementById("taskinput").value;
    let new_task = document.createElement ("div") ;
    new_task.className = "item";

    let task_text = document.createElement ("h1") ;
    task_text.textContent = taskInput;

    let task_complete_button = document.createElement ("button") ;
    task_complete_button.textContent = "complete" ;
    task_complete_button.className = "completetask";

    task_complete_button.addEventListener("click", function() {
            completeTask(new_task);
        });
    
        new_task.appendChild(task_text);
        new_task.appendChild(task_complete_button);
    
        document.getElementById("pendinglist").appendChild(new_task);
    
        document.getElementById("taskinput").value = "";
    }
    
function completeTask(taskElement) {
    taskElement.className = "item completed";
    document.getElementById("completed").appendChild(taskElement);
    } 

    