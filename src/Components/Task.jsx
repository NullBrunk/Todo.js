function Task({task, check, remove}) {
    
    return ( 
    <div className="flex bg-gray-800">
        
        {/* Mark task button */}
        <div className="todo-card justify-center w-1/12">
            <input onChange={
                    () => check(task.id)
                } 
                checked={task.checked}  
                className="checkbox" 
                type="checkbox"
            />
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
}

export default Task;