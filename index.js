document.addEventListener('DOMcontentLoaded', function(){
    const taskForm=document.getElementById('taskForm');
    const taskInput=document.getElementById('taskInput');
    const taskList=document.getElementById('taskList');
 
// function to fetch tasks
async function fetchTasks(){
    const response=await fetch('db.json');
    const data=await response.json();
    return data.tasks;



    
};
// function to display tasks
async function displayTasks(){
    const tasks=await fetchTasks();
    taskList.innerHTML='';
    tasks.forEach(tasks=>{
        const li=document.createElement('li');
        li.textContent=task.name;
        taskList.appendChild(li);
    });
}
 // Event listener to add a new task
 taskForm.addEventListener('submit',async function(e) {
    e.preventDefault();
    const taskName=taskInput.value.trim();
    if(taskName!==''){
        const response=await fetch('db.json');
        const data=await response.json();
        const tasks=data.tasks;
        tasks.push({id: tasks.lenght +1,name: taskName});
        await fetch('db.json',{
            method:PUT,
            headers:{
                'content-type':'application/json'
                
            },
        });
        taskInput.value='';
        displayTasks();
    }
 });
});
