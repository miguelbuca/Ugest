import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/view/login'
import Routes from './main'
import { UgestProvider } from './components/view/context'

import '../assets/font/fontawesome/css/all.css'

const App = () => {
    
    const { pathname } = document.location

    return (
        <UgestProvider>
            {
                pathname === '/login' ? 
                    <Login /> 
                        : 
                    <Routes />
            }
        </UgestProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))