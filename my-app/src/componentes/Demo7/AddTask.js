import React from "react";

export default function AddTask( {onAdd} ) {

    const [text, setText] = React.useState("");
    const [day, setDay] = React.useState("");
    const [reminder, setReminder] = React.useState(false);


    const onSubmit=(e)=>{
        e.preventDefault();

        if(!text){
            alert('please add a task')
            return
        }
        onAdd({text,day,reminder})

        setText("");
        setDay("");
        setReminder(false);
    }


    return(
        <form className="taskAddForm" onSubmit={onSubmit}>
                <div className="taskFormControl">
                    <label>Task</label>
                    <input type='text' placeholder='add task' value={text} onChange={(e)=>setText(e.target.value)}></input>
                </div>
                <div className="taskFormControl">
                    <label>Day</label>
                    <input type='text' placeholder='add day and time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
                </div>
                <div className="taskFormControl">
                    <label>Set Remeinder</label>
                    <input checked={reminder} type='checkbox' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
                </div>
                <input type='submit' value='Save Task'/>
        </form>
    )
}