import { useCallback, useEffect, useState} from "react";

import Storage from "../Storage/LocalStorage.js";

import AddTask from "./AddTask.jsx"
import Search from "./Search.jsx";
import Task from "./Task.jsx";


export function Todo() {
    
    // custom class to interact with localStorage
    const storage = new Storage();
    
    // The todolist
    const [ todo, setTodo ] = useState([]);
    // Checkbox "Hide marked tasks"
    const [ showMarked, setShowMarked ] = useState(false);
    // Input Searchbar
    const [ filter, setFilter ] = useState("");

    useEffect(() => {
        setTodo(storage.loadTodos());
    }, [])
    

    /**
     * Ajoute une tâche
     * 
     * @param {string} task_body     Le body de la tâche à ajouter
     */
    const add = useCallback((task_body) => {
        if(task_body.trim() === "") return;
        
        const last_id = todo.length === 0 ? 0 : todo[todo.length-1].id;
        const new_task = { id: last_id + 1, body: task_body, checked: false };

        // Store the task in the localstorage
        storage.set(new_task);

        // Update the todolist
        setTodo([ ...todo, new_task ]);
    }, [todo, showMarked]);
    

    /**
     * Marquer une tache
     * 
     * @param {int} id      L'id de la tâche à marquer
     */
    const check = useCallback((id) => {
        const new_todo = todo.map((todo) => {
            if(todo.id !== id) {
                return todo;
            }
            return { ...todo, checked: !todo.checked }
        });

        // Toggle Mark attribute in the localstorage
        storage.toggleMarked(id);

        // Update the todolist
        setTodo(new_todo);
    }, [todo, showMarked]);


    /**
     * Supprimer une tâche
     * 
     * @param {int} id      L'id de la tâche à supprimer 
     */
    const remove = useCallback((id) => {
        const new_todo = todo.filter(task => task.id !== id);

        // Remove the task from the localStorage
        storage.remove(id);

        // Update the todolist
        setTodo(new_todo);
    }, [todo, showMarked]);
    

    return (
        <>
            <section style={{"width": "90%", "marginLeft": "5%"}}>

                {/* Search through tasks */}
                <Search setShowMarked={setShowMarked} setFilter={setFilter}/>

                {/* Todos table */}
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
                                // Loop through tasks
                                todo.map((task) => { 
                                    // If there is a text in the searchbar, ensure that we match it
                                    if(!task.body.toLowerCase().includes(filter.toLowerCase())) return;

                                    // If the "hide marked tasks" checkbox is checked, ensure to hide the marked tasks
                                    if(showMarked && task.checked) return;

                                    return (
                                        <Task task={task} check={check} remove={remove} key={task.id}/>
                                    ) 
                                })
                            }
                        </div>
                    </div>
                </div>
                        
            </section>
            
            {/* Form to add a new task */}
            <AddTask add={add} />
        </>
    );
}