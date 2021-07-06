 const TaskItem = (props) => {
     return (
        <li>
            <input type="checkbox" name="task1"></input>
            <label for="task1">{ 'Priority is:' + props.priority + ': ' + props.taskName}</label>
        </li>
     );
 }

export default TaskItem