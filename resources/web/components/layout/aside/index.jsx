import React, { useState, useEffect } from 'react'

import Avatar from '../../../../assets/img/avatar.png'

import { UgestProvider, useUgest } from '../../view/context'

export default function index() {


    const { data, setData } = useUgest()

    const [ navToggle, setNavToggle ] = useState(true)
    const [ menuOn, setMenuOn ] = useState(0)

    const [ submenu, setSubmenu ] = useState([])
    const [ submenuActive, setSubmenuActive] = useState(0)

    const menu = [
        {
            name: 'Painel',
            route: '#',
            icon: 'fa fa-chart-pie'
        },
        {
            name: 'Artigos',
            route: '#',
            icon: 'fa fa-box',
            childrean: [
                {
                    name: 'Novo',
                    icon: 'fa fa-plus-circle'
                },
                {
                    name: 'Produtos',
                    icon: 'fa fa-tags'
                }/*,
                {
                    name: 'Serviços'
                }*/
            ]
        },
        {
            name: 'Stock',
            route: '#',
            icon: 'fa fa-boxes',
            childrean: [
                {
                    name: 'Novo',
                    icon: 'fa fa-plus-circle'
                },
                {
                    name: 'Listagem',
                    icon: 'fas fa-calendar',
                    icon: 'fa fa-list'
                },
                {
                    name: 'Entradas',
                    icon: 'fas fa-calendar'
                },
                {
                    name: 'Saídas'
                }
            ]
        },
        {
            name: 'Entidades',
            route: '#',
            icon: 'fa fa-users',
            childrean: [
                {
                    name: 'Nova',
                    icon: 'fa fa-plus-circle'
                },
                {
                    name: 'Clientes',
                    icon: 'fas fa-user-tag'
                },
                {
                    name: 'Fornecedores',
                    icon: 'fas fa-luggage-cart'
                },
                {
                    name: 'Operadores',
                    icon: 'fas fa-users-cog'
                }
            ]
        },
        {
            name: 'Faturação',
            route: '#',
            icon: 'fa fa-credit-card',
            childrean: [
                {
                    name: 'Faturas',
                    icon: 'fas fa-newspaper'
                },
                {
                    name: 'Nota de Crédito',
                    icon: 'fas fa-newspaper'
                },
                {
                    name: 'Nota de Débito',
                    icon: 'fas fa-newspaper'
                },
                {
                    name: 'Receitas'
                },
                {
                    name: 'Venda dia'
                },
                {
                    name: 'V. Produtos'
                },
                {
                    name: 'Proformas'
                }
            ]
        },
        {
            name: 'Recursos humanos',
            route: '#',
            icon: 'fa fa-user-graduate'
        },
        {
            name: 'Tesouraria',
            route: '#',
            icon: 'fa fa-cash-register',
        },
        {
            name: 'Taxas',
            icon: 'fas fa-chess-rook',
            route: '#',
            childrean: [
                {
                    name: 'Nova',
                    icon: 'fa fa-plus-circle'
                },
                {
                    name: 'Impostos',
                    icon: 'fas fa-newspaper'
                },
                {
                    name: 'Encargos'
                },
                {
                    name: 'Despesas'
                },
                {
                    name: 'Descontos'
                }
            ]
        },
        {
            name: 'Configurações',
            route: '#',
            icon: 'fas fa-cogs',
            childrean: [
                {
                    name: 'Personalisar',
                    icon: 'fas fa-palette'
                },
                {
                    name: 'Backup',
                    icon: 'fas fa-database'
                },
                {
                    name: 'Restore',
                    icon: 'fas fa-clock'
                }
            ]
        },
        {
            name: 'Usuários',
            route: '#',
            icon: 'fas fa-user',
            childrean: [
                {
                    name: 'Novo',
                    icon: 'fa fa-plus-circle'
                },
                {
                    name: 'Listagem',
                    icon: 'fas fa-newspaper',
                    icon: 'fa fa-list'
                },
                {
                    name: 'Permições',
                    icon: 'fas fa-user-shield'
                }
            ]
        },
        {
            name: 'Outas tabelas',
            icon: 'fas fa-calendar',
            route: '#',
            childrean: [
                {
                    name: 'Categoria'
                },
                {
                    name: 'Subcategoria'
                },
                {
                    name: 'Papel'
                },
                {
                    name: 'Estado'
                },
                {
                    name: 'Tipo de Artigo'
                },
                {
                    name: 'Nível de Acesso'
                }
            ]
        },
        {
            name: 'Sair',
            route: '#',
            icon: 'fas fa-sign-out-alt'
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
            <div style={{
                opacity: navToggle ? 1 : 0
            }} className="userSectionAside">
                <div>
                    <div>
                        <img src={Avatar} alt="user-img" />
                    </div>
                    <div>
                        <strong>Miguel Buca</strong>
                        <div>
                            <span>Nível:</span><span>Admin</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    {
                        menu.map(({name,route,icon, childrean},index)=>{
                            return (
                                <li onClick={(e)=>{
                                    setMenuOn(index)

                                    if(childrean){

                                        var SubData = {
                                            ...submenu
                                        }

                                        SubData[index] = !submenu[index]

                                        setSubmenu(SubData)
                                    }

                                    if(!childrean)
                                        setData({
                                            ...data,
                                            navigation: {
                                                menu: name
                                            }
                                        })
                                    else
                                        setData({
                                            ...data,
                                            navigation: {
                                                ...data.navigation,
                                                menu: name,
                                                submenu: data.navigation.submenu ? data.navigation.submenu : childrean[0].name
                                            }
                                        })
                                }} title={name} key={index}>
                                    <a active={menuOn===index?"true":"false"}>
                                    <i className={icon}></i>{name}</a>
                                    {
                                        childrean && navToggle && <span className="chevron"><i className={`fas fa-chevron-${submenu[index] ? 'up' : 'down'}`}></i></span>
                                    }
                                    {
                                        childrean && <ul style={{
                                            display: submenu[index] ? 'flex' : 'none',
                                            flexDirection: 'column'
                                        }}> {childrean.map(({ name, icon },key)=>{
                                            return <li title={name} onClick={(e)=>{
                                                var SubData = {
                                                    ...submenu
                                                }
        
                                                SubData[index] = !submenu[index]
        
                                                setSubmenu(SubData)

                                                setSubmenuActive(key)

                                                setData({
                                                    ...data,
                                                    navigation: {
                                                        ...data.navigation,
                                                        submenu: name
                                                    }
                                                })

                                                e.stopPropagation()
                                            }} active={submenuActive===key?"true":"false"} key={key}>
                                                <a><i className={icon ? icon : "fa fa-arrow-right"}/>{name}</a>
                                            </li>
                                        })}</ul>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}
