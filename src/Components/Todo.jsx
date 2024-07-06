import { Task } from "./Task.jsx";
import { AddTask } from "./AddTask.jsx"
import { Search } from "./Search.jsx";
import { Fragment, useEffect, useState } from "react";

export function Todo() {
    
    const [todo, setTodo] = useState([
        { id: 1, body: "Hello", checked: true, },
        { id: 2, body: "Test", checked: false, },
    ]);
    const [ todoClone, setTodoClone ] = useState(todo);

    // When todo change, change the todo clone variable
    useEffect(() => {
        setTodoClone([...todo]);
    }, [todo]);

    /**
     * Ajoute une tâche
     * 
     * @param {*} event     Un événement de type submit passé par le formulaire d'ajout
     */
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
    
    /**
     * Marquer une tache
     * 
     * @param {int} id      L'id de la tâche à marquer
     */
    function check(id) {
        const new_todo = todo.map((todo) => {
            if(todo.id !== id) {
                return todo;
            }
            return { ...todo, checked: !todo.checked }
        });
        setTodo(new_todo);
    }


    /**
     * Supprimer une tâche
     * 
     * @param {int} id      L'id de la tâche à supprimer 
     */
    function remove(id) {
        const new_todo = todo.filter(task => task.id !== id);
        setTodo(new_todo);
    }
    
    return (
        <Fragment>
            <section className="w-4/5" style={{"marginLeft": "10%"}}>

                {/* Search through tasks */}
                <Search todos={todo} setTodoClone={setTodoClone} />
                
                {/* Todos table */}
                <div className="bg-gray-800 rounded-xl">
                    <div className="relative rounded-xl overflow-auto">
                        <div className="shadow-sm overflow-hidden my-8">
                            {/* Header */}
                            <div className="flex">
                                <div className="todo-header w-1/12">Mark</div>
                                <div className="todo-header w-10/12 text-left-important">Body</div>
                                <div className="todo-header w-1/12">Delete</div>
                            </div>

                            {/* Table body */}
                            {todoClone.map((task) => { return (
                                <Task task={task} check={check} remove={remove} key={task.id}/>
                            ) }) }
                        </div>
                    </div>
                </div>
                        
            </section>
            
            {/* Form to add a new task */}
            <AddTask add={add} />
        </Fragment>
    )
}