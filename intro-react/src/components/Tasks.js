import React, {useState} from 'react';
import TaskItem from "./TaskItem";
import Form from './Form';
import uuidv4 from "uuid/v4";

const Tasks = () => {
    const initialTasks = [
                    {id: 1, name: "Clean kitchen", complete: false}, 
                    {id: 2, name: "Pick up kids", complete: false}, 
                    {id: 3, name: "Learn react", complete: false}, 
                    {id: 4, name: "Git Better", complete: false}, 
                    {id: 5, name: "Git good", complete: false}
                ] 
    
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (task) => {
        const tempTask = {id: uuidv4(), name: task, complete: false};
        setTasks([...tasks, tempTask]);
    }

    const updateTask = (id) => {
        const taskIndex = tasks.findIndex(el => el.id === id);
        let allTasks = [...tasks];
        allTasks[taskIndex] = {
            ...allTasks[taskIndex],
            complete: !allTasks[taskIndex].complete
        };
        setTasks(allTasks);
    }

    return (
        <>
            <Form addTask={addTask}/>
            <ul>{tasks.map(task => (<TaskItem updateTask={()=>{updateTask(task.id)}} key={task.id} taskName={task.name} checked={task.complete} /*onChange={updateTasks}*//>))}</ul>
        </>
    )

}

export default Tasks