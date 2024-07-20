import Task from "./Task.jsx";

const Todo = ({todos, showMarked, filter}) => {
    return (
        <div className="bg-gray-800 rounded-xl">
            <div className="relative rounded-xl overflow-auto">
                <div className="shadow-sm scroll-into my-8">
                    {/* Header */}
                    <div className="flex responsive-container">
                        <div className="todo-header w-1/12">Mark</div>
                        <div className="todo-header w-10/12 text-left-important">Body</div>
                        <div className="todo-header w-1/12 responsive-delete">Delete</div>
                    </div>

                    {/* Table body */}
                    {
                        todos.map((task) => { 
                            // If there is a text in the searchbar, ensure that we match it
                            if(!task.body.toLowerCase().includes(filter.toLowerCase())) return;

                            // If the "hide marked tasks" checkbox is checked, ensure to hide the marked tasks
                            if(showMarked && task.checked) return;

                            return (
                                <Task task={task} key={task.id}/>
                            ) 
                        })}
                </div>
            </div>
        </div>
    );
};

export default Todo;