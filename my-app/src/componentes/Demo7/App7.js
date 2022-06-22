import React from "react";
import '../../styles/task.css'
import Header  from "./Header";
import Buttons from "./Buttons";
import Task from "./Task";
import AddTask from "./AddTask"
export default function App7(){


// set tasks
const [tasks, setTasks] = React.useState([
  {
    id:1,
    text:'Task 1',
    day:'1 June at 10 pm',
    reminder:true,
},
{
    id:2,
    text:'Task 2',
    day:'1 May at 5 pm',
    reminder:true,
},
{
    id:3,
    text:'Task 3',
    day:'1 Apr at a am',
    reminder:false,
}
]);

const [showAddTask,setShowAddTask]=React.useState(false);

// delete tasks
const deleteTask=(id)=>{
    setTasks(tasks.filter(task => task.id!==id))
}


// toggle remeinder

const toggleReminder=(id)=>{
    setTasks(tasks.map(task=>
        task.id===id?{...task,reminder:!task.reminder}:task
    ))
}

// add task
const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000)+1;
    const newTask={id,...task};
    setTasks([...tasks,newTask]);
}

    return(
      
        <>
              <div className="taskContainer">
                <nav className="taskNav">
                <Header  title='Task'/>
                <Buttons title='Add' onAdd={ ()=>setShowAddTask(!showAddTask) } showAdd={showAddTask} color={showAddTask?'red':'green'}/>
                </nav>
                { showAddTask && <AddTask onAdd={addTask}/>}
                {tasks.length>0 ? <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <p>No tasks</p>}
              </div> 
        </>
    );
}



