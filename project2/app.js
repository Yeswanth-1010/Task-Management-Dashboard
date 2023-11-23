$(document).ready(function () {
    
    const tasks = [
        { id: 1, title: "Task 1", description: "Description of Task 1." },
        { id: 2, title: "Task 2", description: "Description of Task 2." },
        
    ];

    
    initializeTasks();

    
    $(".task-container").sortable({
        update: function () {
            
            updateTaskOrder();
        },
    });

    
    $("#addTaskBtn").click(function () {
        const newTask = {
            id: tasks.length + 1,
            title: "New Task",
            description: "Description of the new task.",
        };

        tasks.push(newTask);
        displayTask(newTask);
        updateTaskOrder();
    });

    
    function initializeTasks() {
        tasks.forEach(function (task) {
            displayTask(task);
        });
    }

    
    function displayTask(task) {
        const taskHtml = `<div class="task" data-id="${task.id}">
                            <h3>${task.title}</h3>
                            <p>${task.description}</p>
                          </div>`;
        $("#taskList").append(taskHtml);
    }

    
    function updateTaskOrder() {
        const updatedTasks = [];
        $(".task").each(function (index) {
            const taskId = $(this).data("id");
            const task = tasks.find((t) => t.id === taskId);
            updatedTasks.push(task);
        });

        
        tasks.length = 0;
        Array.prototype.push.apply(tasks, updatedTasks);
    }
});
