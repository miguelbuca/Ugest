import React from 'react'

import Aside from './components/layout/aside'

/** Views Import */

import Home from './components/view/admin'


export default function index() {
    return (
        <main>
            <Aside/>
            <Home/>
        </main>
    )
}
