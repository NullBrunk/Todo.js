export function AddTask({add}) {
    return (
        <form className="d-flex" onSubmit={(e) => add(e)}>
            <input type="text" className="form-control p-2 fs-4" placeholder="Your task ..." />
            <button className="btn btn-primary ms-4">Submit</button>
        </form>
    );
}