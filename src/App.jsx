import Header from "./Layout/Header.jsx";
import TodoApp from "./Components/TodoApp.jsx";


function App () {
    return (
        <main className="bg-gray-100 h-screen text-xl">
            {/* top Navbar */}
            <Header /> 

            {/* Main app */}
            <TodoApp />
        </main>
    );
}

export default App;