import { Fragment, useState } from 'react'
import { Header } from './Layout/Header.jsx'
import { Todo } from './Components/Todo.jsx'

function App() {

    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <Fragment>
            <Header currentPage={currentPage} setPage={setCurrentPage} />

            <section className="container my-4 fs-3">
                <Todo />
            </section>
      
        </Fragment>
    );
}

export default App
