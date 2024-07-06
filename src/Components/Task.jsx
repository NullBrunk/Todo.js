export function Task({task, check, remove}) {
    return ( 
    <div className="flex bg-gray-800">
        
        {/* Mark task button */}
        <div className="todo-card justify-center w-1/12">
            <input type="checkbox" onChange={
                    () => check(task.id)
                } 
                className="checkbox" checked={task.checked}  
            />
        </div>
        
        {/* Body content */}
        <div className="todo-card w-10/12"> {task.body}</div>
        
        {/* Delete task button */}
        <div className="todo-card justify-center w-1/12"> 
            <button type="submit" onClick={(e) => { 
                    e.preventDefault(); 
                    remove(task.id)}
                }
                className="bg-rose-500 hover:bg-rose-300 duration-500 transition text-white font-bold py-1 px-2 rounded-md" 
            ><i className="bi bi-trash2-fill"></i></button>
        </div>

    </div>
    );
}