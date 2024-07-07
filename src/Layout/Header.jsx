export function Header() {
    return ( 
        <nav className="bg-gray-800 py-2">
            <div className="flex h-16">
                <div className="flex flex-1 items-center justify-center">
                    <img className="h-8 w-auto" src="/favicon.png" alt="Todo react logo" />
                    <div className="hidden ml-6 sm:block flex space-x-4">
                        <a href="#" className="navbar-links text-white bg-gray-900" aria-current="page">Dashboard</a>
                        <a href="https://todo-react-0.netlify.app/" className="navbar-links navbar-links-hover">Example</a>
                        <a href="https://github.com/NullBrunk/Todo.js" className="navbar-links navbar-links-hover">Github</a>
                    </div>
                </div>
            </div>

            <div className="sm:hidden">
                <div className="space-y-1 p-2">
                    <a href="#" className="navbar-links-mobile text-white bg-gray-900" aria-current="page">Dashboard</a>
                    <a href="https://todo-react-0.netlify.app/" className="navbar-links-mobile navbar-links-hover">Example</a>
                    <a href="https://github.com/NullBrunk/Todo.js" className="navbar-links-mobile navbar-links-hover">Github</a>
                </div>
            </div>
        </nav>
    );
}
