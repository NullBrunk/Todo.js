export function Search({todos, setTodos}) {
    

    return (
        <form className="fs-6 rounded p-4" onSubmit={(e) => add(e)}>
            <input type="text" className="form-control p-2 fs-4" placeholder="Search for a task ..." onChange={(e) => {

            }}/>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox" />
                <label className="form-check-label user-select-none" htmlFor="checkbox">Show marked</label>
            </div>
        </form>
    );
}