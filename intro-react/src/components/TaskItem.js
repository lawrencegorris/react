const TaskItem = (props) => {

     return (
        <li>
            <input onClick={props.updateTask} type="checkbox" name="task"></input>
            <label htmlFor="task">{props.taskName + ' and the status is:' + props.checked}</label>
        </li>
     );
 }

export default TaskItem