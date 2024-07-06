import { useState } from "react";

export function AddTask({add}) {
    const [showForm, setShowForm] = useState(false);

    if(!showForm) {
        return <div onClick={(e) => setShowForm(!showForm)} className="d-flex w-100" style={{ "position": "fixed", "bottom": "20px", "cursor": "pointer"}}>
            <div style={{"width": "90%"}} className="d-block text-center rounded border border-primary text-primary m-auto user-select-none">
                <i className="bi bi-plus-lg fs-3"></i> <span className="ms-2 fs-4 fw-bold">ADD A TASK </span>
            </div>
        </div>
    }
    
    return <div className="d-flex w-100" style={{ "position": "fixed", "bottom": "20px", "cursor": "pointer"}}>
        <form className="d-flex m-auto" style={{"width": "90%"}} onSubmit={(e) => { 
            console.log(add);
            add(e);
            setShowForm(!showForm);
        }}>
            <input type="text" className="form-control p-2 fs-4" placeholder="Your task ..." />
            <button className="btn btn-primary ms-4">Submit</button>
        </form>
    </div>

}