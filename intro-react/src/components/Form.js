import React, { useRef } from "react";

const Form = (props) => {
    const inputName = useRef();

    function clickHandler(e){
        e.preventDefault();
        const task = inputName.current.value;
        inputName.current.value = null;
        props.addTask(task);
    }

    return (
        <form>
            <input ref={inputName} id="user-task-input" placeholder="I want to..."></input>
            <br></br>
            <button onClick={clickHandler} id="user-add-task-button">Add Task</button>
        </form>
    );
}

export default Form