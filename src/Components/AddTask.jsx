import { useState } from "react";

export function AddTask({add}) {
    const [showForm, setShowForm] = useState(false);

    if(!showForm) {
        return <div onClick={(e) => setShowForm(!showForm)} className="bottom-right wh-48 bg-gray-800 text-center rounded-md select-none justify-center">
                <i className="bi bi-plus-lg m-auto text-white "></i> 
        </div>
    }
    
    return <div className="flex w-full bottom-right">
        <form  onSubmit={(e) => { 
                console.log(add);
                add(e);
                setShowForm(!showForm);
            }}
            className="flex m-auto ring-1 ring-gray-300 pl-4 rounded-md overflow-hidden" 
        >
            <input type="text" className="w-5/6 bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none" placeholder="Add a new task ..." style={{"width": "80vw"}} />
            <button onClick={
                    (e) => setShowForm(false)
                } 
                className="bg-gray-800 hover:bg-gray-600 duration-500 transition text-white font-bold px-6 border-r-2 border-gray-300  rounded-sm"
            ><i class="bi bi-x-lg"></i></button>
            
            <button className="bg-gray-800 hover:bg-gray-600 duration-500 transition text-white font-bold px-6 rounded-sm"><i class="bi bi-send"></i></button>
        </form>
    </div>

}