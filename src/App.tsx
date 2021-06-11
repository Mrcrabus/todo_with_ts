import React, {useState} from 'react';
import {Navbar} from "./Components/Navbar";
import {TodoForm} from "./Components/TodoForm";


const App: React.FC = () => {


    return <>
        <Navbar/>
        <div className='container'>
            <TodoForm />
        </div>
    </>

}

export default App
