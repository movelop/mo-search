import React, { useState } from 'react';
import { Navbar, Footer, Route } from './components'

const initialState = sessionStorage.getItem('theme') || false

const App = () => {
    const [darkTheme, setDarkTheme] = useState(initialState);
    return (
        <div className = {darkTheme ? 'dark' : ''}>
            <div className = 'bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                <Navbar setDarkTheme = {setDarkTheme} darkTheme = {darkTheme}/>
                <Route />
                <Footer />
            </div>
        </div>
    )
}

export default App
