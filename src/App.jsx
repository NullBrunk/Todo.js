import { Fragment, useState, useId } from 'react'

import { Header } from './Layout/Header.jsx'
import { Todo } from './Components/Todo.jsx'

function App() {

    return (
        <Fragment>
            <Header />    
            <Todo />
        </Fragment>
    );
}

export default App
