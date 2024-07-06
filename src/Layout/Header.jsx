export function Header() {
    return (
        <nav className="navbar bg-primary text-white px-4 py-2 flex justify-content-start" data-bs-theme="dark">
            <a className="fs-1 navbar-brand fw-bold w-25 ps-4 m-0" href="#">Todo.JS</a>

            <div className="w-50 d-flex justify-content-around ">
                <div className="m-auto">
                    <a className="px-2 text-white text-decoration-none fs-4 fw-bold">Home</a>
                    <a className="px-2 text-white text-decoration-none fs-4" href="#">Example</a>
                    <a className="px-2 text-white text-decoration-none fs-4" href="https://github.com/NullBrunk/Todo.js" target="_blank">Github</a>
                </div>
            </div>

            <div id="add-task" className="w-25 d-flex justify-content-end"></div>
        </nav>
    );
}