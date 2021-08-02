import React,{ useEffect } from 'react'

import Aside from './components/layout/aside'

/** Views Import */

import Main from './components/view/admin'

import { useUgest } from './components/view/context'


export default function index() {

    const { data: { preference } } = useUgest()

    return (
        <main mode={preference.mode ? "Claro" : "Escuro"}>
            <Aside/>
            <Main/>
        </main>
    )
}
