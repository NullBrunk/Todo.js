export function Task({task, check, remove}) {
    return (
    <form key={task.id} className="card flex flex-row w-3/5 m-auto mt-2 justify-center">
        <input type="checkbox" className="form-check-input" checked={task.checked} onChange={() => check(task.id)} />
            
        <div className="ms-4 user-select-none">
            {task.body}
        </div>

        <button type="submit" className="btn btn-danger ms-auto" onClick={(e) => { 
            e.preventDefault(); 
            remove(task.id)}
        }><i className="bi bi-trash2-fill"></i></button>
    </form>
    );
}