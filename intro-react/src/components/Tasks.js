import TaskItem from "./TaskItem";

const Tasks = () => {
    const tasks = [
                    {name: "Clean kitchen", priority: "high"}, 
                    {name: "Pick up kids", priority: "meh"}, 
                    {name: "Learn react", priority: "yup"}, 
                    {name: "Git Better", priority: "dude"}, 
                    {name: "Git good", priority: "really"}
                ]

    return (
        <ul>
            {tasks.map(task => <TaskItem taskName={task.name} priority={task.priority}/>)}
        </ul>
    );
}

export default Tasks