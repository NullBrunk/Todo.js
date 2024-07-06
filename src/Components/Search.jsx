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
    <form onSubmit={(e) => add(e)} className="flex flex-col mt-6 mb-6">
            <div class="w-full flex m-auto rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-0 focus:outline-none text-lg">
                <span class="flex select-none items-center pl-3 text-gray-500 mr-2"><i className="bi bi-search m-auto"></i></span>
                <input onChange={(e) => search_tasks(e.target.value)} type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none" placeholder="Search for a task" />
            </div>

            <div class="flex h-6 mt-2  items-center">
                <input onChange={(e) => toggle_marked(e.target.checked)} id="comments" name="comments" type="checkbox" class="checkbox" />
                <label htmlFor="comments" class="font-medium text-gray-900 ml-3">Hide marked</label>
            </div>
        </form>
    );
}