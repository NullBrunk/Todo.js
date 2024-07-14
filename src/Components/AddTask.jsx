import { useState } from "react";

export function AddTask({add}) {

    const [showAddTask, setShowAddTask] = useState(false);

    // Display a button with a "+" icon
    if(!showAddTask) {
        return (
            <div onClick={(e) => setShowAddTask(!showAddTask)} className="show-add-task">
                <i className="bi bi-plus-lg m-auto text-white "></i> 
            </div>
        );
    }
    
    // Dislay the form to add a task
    return (
        <div className="flex w-full bottom-right">
            <form onSubmit={(e) => { 
                e.preventDefault();

                let input = e.target[0];

                add(input.value);
                input.value = "";
            }} 
            id="add-task">
                <input type="text" placeholder="Add a new task ..." autoFocus />
                
                <button onClick={
                        (e) => setShowAddTask(false)
                    } 
                type="button">
                    <i className="bi bi-x-lg"></i>
                </button>
                
                <button type="submit"><i className="bi bi-send"></i></button>
    
            </form>
        </div>
    );
}