export function Search({todos, setTodoClone}) {
    
    function search_tasks(value) {
        setTodoClone(todos.filter((task) =>
            task.body.toLowerCase().includes(
                value.toLowerCase()
            )
        ));
    }

    const toggle_marked = (checked) => {
        if(checked) {
            setTodoClone(todos.filter(task => task.checked === false));
        } else {
            setTodoClone(todos);
        }
    }

    return (
        <form onSubmit={(e) => add(e)}>
            <div className="flex">
                <div className="border-primary rounded border bg-primary text-white fs-4 px-3 d-flex"><i className="bi bi-search m-auto"></i></div>
                <input type="text" className="border-primary form-control ms-2 p-2 fs-4" placeholder="Search for a task ..." onChange={(e) => search_tasks(e.target.value)}/>
            </div>

            <div className="form-check">
                <input onChange={(e) => toggle_marked(e.target.checked)} type="checkbox" className="form-check-input" id="checkbox" />
                <label className="form-check-label user-select-none" htmlFor="checkbox" >Show marked</label>
            </div>
        </form>
    );
}