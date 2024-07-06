export function Task({task, check, remove}) {
    return ( <div className="flex bg-gray-800">
        <div className="todo-card justify-center w-1/12">
            <input type="checkbox" className="checkbox" checked={task.checked} onChange={() => check(task.id)} />
        </div>
        
        <div className="todo-card w-10/12"> 
                {task.body}
        </div>
        
        <div className="todo-card justify-center w-1/12"> 
            <button type="submit" className="bg-rose-500 hover:bg-rose-300 duration-500 ease-linear transition text-white font-bold py-1 px-2 rounded-md" onClick={(e) => { 
                e.preventDefault(); 
                remove(task.id)}
            }><i className="bi bi-trash2-fill"></i></button>
        </div>
      
    </div>
    );
}