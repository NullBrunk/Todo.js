export function Task({task, todos, setTodo}) {

    function check() {
        const new_todos = todos.map((todo) => {
            if(todo.id !== task.id) {
                return todo;
            }
            return { ...todo, checked: !todo.checked }
        });

        setTodo(new_todos);
    }

    return (
    <form className="card flex-row p-4">
        <input type="checkbox" className="form-check-input" checked={task.checked} onClick={e => check()} />

        <span className="ms-4">{task.name}</span>

        <button type="submit" className="btn btn-danger ms-auto" onClick={(e) => {
            e.preventDefault();
        }}>
            <i className="bi bi-trash2-fill"></i>
        </button>
    </form>
    );
}