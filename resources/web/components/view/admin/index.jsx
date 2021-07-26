import React, { useEffect, useState } from 'react'

import Header from '../../layout/header'

import Painel from './painel'
import Other from './other'
import Artigos from './artigos'

import { useUgest } from '../context'

export default function index() {

    const { data, setData } = useUgest()

    const [ route, setRoute ] = useState()

    useEffect(() => {
        if(!data.navigation)return
        setRoute(data.navigation)
    }, [data])


    useEffect(() => {
        console.log(route)
    }, [route])
    
    return (
        <div>
            <Header/>
            {
                route && (
                    route.menu !== 'Painel' && (
                    <div className="navscale">
                        {route.submenu ? <span>{route.menu}<i className="fa fa-chevron-right"/>{route.submenu}</span> : <span>{route.menu}</span>}
                    </div>)
                )
            }
            <main className="mainContent">
                {
                    route && <div>
                                { route.menu === 'Painel' && <Painel {...route}/> }
                                { route.menu === 'Outas tabelas' && <Other {...route}/> }
                                { route.menu === 'Artigos' && <Artigos {...route}/> }
                            </div>
                }
            </main>
        </div>
    )
}
