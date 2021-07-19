import React, { useState } from 'react'

export default function index() {

    const [ navToggle, setNavToggle ] = useState(true)
    const [ menuOn, setMenuOn ] = useState(0)

    const menu = [
        {
            nome: 'Painel',
            route: '#',
            icon: 'fab fa-windows'
        },
        {
            nome: 'Produtos',
            route: '#',
            icon: 'fa fa-box'
        },
        {
            nome: 'Stock',
            route: '#',
            icon: 'fa fa-boxes'
        },
        {
            nome: 'Fornecidores',
            route: '#',
            icon: 'fa fa-users'
        },
        {
            nome: 'Faturação',
            route: '#',
            icon: 'fa fa-credit-card'
        },
        {
            nome: 'Clientes',
            route: '#',
            icon: 'fab fa-windows'
        },
        {
            nome: 'Recursos humanos',
            route: '#',
            icon: 'fab fa-windows'
        },
        {
            nome: 'Tesouraria',
            route: '#',
            icon: 'fa fa-cash-register'
        },
        {
            nome: 'Sair',
            route: '#',
            icon: 'fab fa-windows'
        }
    ]

    return (
        <aside style={{
            transition: 'all .3s',
            width: navToggle ? '196px' : '45px'
        }}>
            <div>
                <button onClick={()=>setNavToggle(!navToggle)} className="menuButton">
                    <i className="fa fa-bars"/>
                </button>
            </div>
            <div>
                <ul>
                    {
                        menu.map(({nome,route,icon},index)=><li onClick={()=>{
                            setMenuOn(index)
                        }} title={nome} key={index}><a active={menuOn===index?"true":"false"} href={route}><i className={icon}></i>{nome}</a></li>)
                    }
                </ul>
            </div>
        </aside>
    )
}
