import { useState, useEffect, useCallback } from 'react';
import { TodoContext } from "./Context/TodoContext.jsx";
import { v4 as uuidv4 } from 'uuid';

import storage from './Storage/LocalStorage.js';

import AddTask from "./Components/AddTask.jsx"
import Search from "./Components/Search.jsx";
import Todo  from './Components/Todo.jsx'
import Header from './Layout/Header.jsx'


function App() {
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
        
        const new_task = { id: uuidv4(), body: task_body, checked: false };

        // Store the task in the localstorage
        storage.set(new_task);

        // Update the todolist
        setTodo(prev => [ ...prev, new_task ]);
    }, [todo, showMarked]);
    

    /**
     * Supprime une tâche
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


    return (
        <div className="bg-gray-100 h-screen text-xl">
            <TodoContext.Provider value={{
                add: add, 
                check: check, 
                remove: remove
            }}>
                {/* top Navbar */}
                <Header /> 

                <section className="main">
                    {/* Search through tasks */}
                    <Search setShowMarked={setShowMarked} setFilter={setFilter}/>

                    {/* Show to todo list */}
                    <Todo todos={todo} showMarked={showMarked} filter={filter} />
                </section>

                {/* Show the add todo form */}
                <AddTask />
            </TodoContext.Provider>
        </div>
    );
}

export default App
