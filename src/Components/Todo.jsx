import { Task } from "./Task.jsx";
import { AddTask } from "./AddTask.jsx"
import { Search } from "./Search.jsx";
import { Fragment, useEffect, useState } from "react";

export function Todo() {
    
    const [ searchBar, toggleSearchBar ] = useState(true);

    const [todo, setTodo] = useState([
        { id: 1, body: "Hello", checked: true, },
        { id: 2, body: "Test", checked: false, },
    ]);
    const [ todoClone, setTodoClone ] = useState(todo);

    useEffect(() => {
        setTodoClone([...todo]);
    }, [todo]);

    function add(event) {
        let task_body = event.target[0].value;
        if(task_body.trim() === "") return;
        
        const last_id = todo.length === 0 ? 0 : todo[todo.length-1].id;

        const new_todo = [
            ...todo,
            { id: last_id + 1, body: task_body, checked: false },
        ]

        setTodo(new_todo);
        event.preventDefault();
    }
    
    function check(id) {
        const new_todo = todo.map((todo) => {
            if(todo.id !== id) {
                return todo;
            }
            return { ...todo, checked: !todo.checked }
        });
        setTodo(new_todo);
    }
    
    function remove(id) {
        const new_todo = todo.filter(task => task.id !== id);
        setTodo(new_todo);
    }
    
    return (
        <Fragment>
            <section className="w-4/5" style={{"marginLeft": "10%"}}>
                { searchBar && <Search todos={todo} setTodoClone={setTodoClone} />}
                
                <div className="not-prose relative bg-gray-800 rounded-xl overflow-hidden">
                    <div style={{"backgroundPosition": "10px 10px"}} className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                        <div className="relative rounded-xl overflow-auto">
                            <div className="shadow-sm overflow-hidden my-8">
                                <main className="border-collapse table-auto w-full text-sm">
                                    <div className="flex">
                                        <div className="todo-header w-1/12">Mark</div>
                                        <div className="todo-header w-10/12 text-left-important">Body</div>
                                        <div className="todo-header w-1/12">Delete</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800">
                                        {todoClone.map((task) => { return (
                                        <Task task={task} check={check} remove={remove} key={task.id}/>
                                        ) }) }
                                    </div>
                                </main> 
                            </div>
                    </div>
                </div>
                        
            </section>

            <AddTask add={add} />
        </Fragment>
    )
}