import { TodoContext } from "../Context/TodoContext.jsx";
import { useContext, useState } from "react";

function AddTask () {
    
    const { add: add } = useContext(TodoContext);
    const [opened, setOpened] = useState(false);

    // Display a button with a "+" icon
    if(!opened) {
        return (
            <div onClick={(e) => setOpened(!opened)} className="show-add-task">
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
                        (e) => setOpened(false)
                    } 
                type="button">
                    <i className="bi bi-x-lg"></i>
                </button>
                
                <button type="submit"><i className="bi bi-send"></i></button>
    
            </form>
        </div>
    );
};

export default AddTask;