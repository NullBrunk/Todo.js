import { TodoContext } from "../Context/TodoContext.jsx";
import { useContext } from "react";

import Checkbox from "./Forms/Checkbox.jsx"

function Task ({task}) {
    
    const {
        check: check,
        remove: remove
    } = useContext(TodoContext);

    return ( 
        <div className="flex bg-gray-800">
            
            {/* Mark task button */}
            <div className="todo-card justify-center w-1/12">
                <Checkbox onChange={() => check(task.id)} value={task.checked} />
            </div>
            
            {/* Body content */}
            <div className={
                "todo-card w-10/12 " + 
                (task.checked ? "line-through text-grey" : "")
            }> {task.body}</div>
            
            {/* Delete task button */}
            <div className="todo-card justify-center w-1/12"> 
                <button onClick={(e) => { 
                    e.preventDefault(); 
                    remove(task.id)
                }}>
                    <i className="bi bi-trash2-fill"></i>
                </button>
            </div>
        </div>
    );
};

export default Task;