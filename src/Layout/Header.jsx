export function Header({currentPage, setPage}) {

    const basic_link = "px-2 text-white text-decoration-none bg-primary border border-0 fs-4";
    const current_link = basic_link + " fw-bold";

    return (
        <nav className="navbar bg-primary text-white px-4 py-2 flex justify-content-start" data-bs-theme="dark">
            <a className="fs-1 navbar-brand fw-bold w-25 ms-4" href="#">Todo.JS</a>

            <div className="w-50 d-flex justify-content-around ">
                <div className="m-auto">
                    <button 
                        className={currentPage === "Home" ? current_link : basic_link}  
                        onClick={() => setPage("Home")}
                    >Home</button>

                    <button 
                        className={currentPage === "Example" ? current_link : basic_link} 
                        onClick={() => setPage("Example")}
                    >Example</button>
                    
                    <button 
                        className={currentPage === "Github" ? current_link : basic_link} 
                        onClick={() => setPage("Github")}
                    >Github</button>
                </div>
            </div>
        </nav>
    );
}