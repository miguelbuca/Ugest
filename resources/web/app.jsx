import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './router'
import { UgestProvider } from './components/view/context'

import '../assets/font/fontawesome/css/all.css'

const App = () => (
    <UgestProvider>
        <Routes />
    </UgestProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))