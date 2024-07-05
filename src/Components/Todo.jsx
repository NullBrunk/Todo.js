import { Fragment, useState } from "react";
import { Task } from "./Task.jsx";

export function Todo() {
    
    const [todos, setTodos] = useState([
        { id: 1, name: "Hello", checked: false, urg: "low" },
        { id: 2, name: "Hello", checked: false, urg: "low" },
        { id: 3, name: "Hello", checked: false, urg: "low" },
        { id: 4, name: "Hello", checked: false, urg: "low" },
        { id: 5, name: "Hello", checked: false, urg: "low" }
    ]);
    
    
    let showTasks = [];
    todos.forEach((task) => {
        showTasks.push(<Task task={task} todos={todos} setTodo={setTodos} key={task.name} />)
    });

    return (
        <Fragment>
            {showTasks} 
        </Fragment>
    )
}