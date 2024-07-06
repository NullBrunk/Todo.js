import { Fragment, useEffect, useState } from "react";

import { Storage } from "../Storage/LocalStorage.js";

import { AddTask } from "./AddTask.jsx"
import { Search } from "./Search.jsx";
import { Task } from "./Task.jsx";

export function Todo() {
    
    let storage = new Storage();

    const [todo, setTodo] = useState(storage.loadTodos());
    const [ todoClone, setTodoClone ] = useState(todo);

    // When todo change, change the todo clone variable
    useEffect(() => {
        setTodoClone([...todo]);
    }, [todo]);

    /**
     * Ajoute une tâche
     * 
     * @param {String} task_body     Le body de la tâche à ajouter
     */
    function add(task_body) {
        if(task_body.trim() === "") return;
        
        const last_id = todo.length === 0 ? 0 : todo[todo.length-1].id;
        const new_task = { id: last_id + 1, body: task_body, checked: false };

        const new_todo = [
            ...todo,
            new_task,
        ]

        setTodo(new_todo);

        storage.set(new_task);
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