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
            <section className="container my-4 fs-3">
                { searchBar && <Search todos={todo} setTodoClone={setTodoClone} />}
                {todoClone.map((task) => { return (
                <Task task={task} check={check} remove={remove} key={task.id}/>
                ) }) } 
            </section>

            <AddTask add={add} />
        </Fragment>
    )
}