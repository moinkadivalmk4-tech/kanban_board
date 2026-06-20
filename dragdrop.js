function drag(event){
    event.dataTransfer.setData(
        "text",
        event.target.id
    );
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){

    event.preventDefault();

    const taskId =
        event.dataTransfer.getData("text");

    let targetColumn = event.target;

    while(
        targetColumn &&
        !targetColumn.classList.contains("task-list")
    ){
        targetColumn = targetColumn.parentElement;
    }

    if(!targetColumn){
        return;
    }

    tasks.forEach(task => {

        if(task.id === taskId){
            task.status = targetColumn.id;
        }

    });

    saveTasks();
    renderTasks();
}