import { useState } from "react";

export function Search({todos, setTodoClone}) {
    
    // Affiche "show" ou "hide" marked tasks au niveau de la checkbox
    // en fonction de si elle est checkée ou pas 
    const [isMarked, setIsMarked ] = useState("Hide");
    
    /**
     * Modifie la variable todoClone pour y mettre uniquement les todo dont le body match value 
     * 
     * @param {String} value    Le texte à rechercher
     * 
     */
    function search_tasks(value) {
        setTodoClone(todos.filter((task) =>
            task.body.toLowerCase().includes(
                value.toLowerCase()
            )
        ));
    }

    /**
     * Si checked vaut true, modifie la variable todoClone pour y mettre uniquement les todo unchecked  
     * 
     * @param {Boolean} checked     La nouvelle value
     */
    const toggle_marked = (checked) => {
        if(checked) {
            setTodoClone(todos.filter(task => task.checked === false));
        } else {
            setTodoClone(todos);
        }

        setIsMarked(checked ? "Show" : "Hide");
    }


    return (
    <form onSubmit={(e) => add(e)} className="flex flex-col mt-6 mb-6">
        
        {/* Input to search for a task */}
        <div className="w-full flex m-auto rounded-md ring-1 ring-gray-300 text-xl focus:outline-none">
            <span className="flex items-center select-none px-4 text-gray-500 ">
                <i className="bi bi-search m-auto"></i>
            </span>
            
            <input type="text" onChange={
                    (e) => search_tasks(e.target.value)
                } 
                className="bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none" placeholder="Search for a task" 
            />
        </div>

        {/* Toggle to show/hide marked tasks */}
        <div className="flex mt-2 items-center">
            <input type="checkbox" onChange={
                    (e) => toggle_marked(e.target.checked)
                } 
                className="checkbox border-black" id="mark"
            />
            <label htmlFor="mark" className="text-base text-gray-900 ml-3 select-none">{isMarked} marked tasks</label>
        </div>
    </form>
    );
}