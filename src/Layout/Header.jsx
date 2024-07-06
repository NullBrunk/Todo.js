export function Header() {
    return ( 
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="/favicon.png" alt="Todo react logo" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="navbar-links-lg text-white bg-gray-900" aria-current="page">Dashboard</a>
                                <a href="#" className="navbar-links-lg text-gray-300 hover:bg-gray-700 hover:text-white">Example</a>
                                <a href="https://github.com/NullBrunk/Todo.js" className="navbar-links-lg text-gray-300 hover:bg-gray-700 hover:text-white">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Example</a>
                    <a href="https://github.com/NullBrunk/Todo.js" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Github</a>
                </div>
            </div>
        </nav>
    );
}