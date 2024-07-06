import { Fragment, useState, useId } from 'react'

import { Header } from './Layout/Header.jsx'
import { Todo } from './Components/Todo.jsx'

function App() {

    return (
        <div className="bg-gray-100 h-screen">
            <Header />    
            <Todo />
        </div>
    );
}

export default App
