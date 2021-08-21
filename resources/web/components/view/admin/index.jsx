import React, { useEffect, useState } from 'react'

import Header from '../../layout/header'

import Faturar from './faturar'
import Painel from './painel'
import Other from './other'
import Artigo from './artigo'
import Stock from './stock'
import Entidade from './entidade'
import Usuario from './usuario'
import Shopping from './shopping'

import { useUgest } from '../context'

export default function index() {

    const { data, setData } = useUgest()

    const [ route, setRoute ] = useState()

    useEffect(() => {
        if(!data.navigation)return
        setRoute(data.navigation)
        console.log(route)
    }, [data])
    return (
        <div>
            <Header/>
            {
                route && (
                    route.menu !== 'Painel' && route.menu !== 'Faturar' && (
                    <div className="navscale">
                        {route.submenu ? <span>{route.menu}<i className="fa fa-chevron-right"/>{route.submenu}</span> : <span>{route.menu}</span>}
                    </div>)
                )
            }
            <main className="mainContent">
                {
                    route && <div>
                                { route.menu === 'Faturar' && <Faturar {...route}/> }
                                { route.menu === 'Painel' && <Painel {...route}/> }
                                { route.menu === 'Outras tabela' && <Other {...route}/> }
                                { route.menu === 'Artigo' && <Artigo {...route}/> }
                                { route.menu === 'Entidade' && <Entidade {...route}/> }
                                { route.menu === 'Usuário' && <Usuario {...route}/> }
                                {route.menu === 'stock' && <Stock {...route} />}
                                { route.route === 'shopping-cart' && <Shopping {...route}/> }
                            </div>
                }
            </main>
        </div>
    )
}
