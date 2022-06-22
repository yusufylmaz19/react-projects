import React from 'react'
import TaskSingle from './TaskSingle'
 

export default function Task ({tasks,onDelete,onToggle}) {


  return (
    <div>
      {tasks.map((task)=>(
        <TaskSingle key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))
      }
    </div>
  )
}
