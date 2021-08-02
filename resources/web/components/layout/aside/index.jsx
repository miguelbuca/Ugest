import { nodeName } from 'jquery'
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
            route: 'painel',
            icon: 'fa fa-chart-pie'
        },
        {
            name: 'Artigo',
            route: 'artigo',
            icon: 'fa fa-box',
            childrean: [
                {
                    name: 'Novo',
                    icon: 'fa fa-plus-circle',
                    route: 'artigo',
                },
                {
                    name: 'Produto',
                    icon: 'fa fa-tags',
                    route: 'produto'
                }/*,
                {
                    name: 'Serviços'
                }*/
            ]
        },
        {
            name: 'Stock',
            route: 'stock',
            icon: 'fa fa-boxes',
            childrean: [
                {
                    name: 'Novo',
                    icon: 'fa fa-plus-circle',
                    route: 'stock',
                },
                {
                    name: 'Listagem',
                    icon: 'fa fa-list',
                    route: 'stock'
                },
                {
                    name: 'Entrada',
                    icon: 'fas fa-arrow-right',
                    route: 'entrada'
                },
                {
                    name: 'Saída',
                    icon: 'fas fa-arrow-left',
                    route: 'saida'
                }
            ]
        },
        {
            name: 'Entidade',
            route: 'entidade',
            icon: 'fa fa-user',
            childrean: [
                {
                    name: 'Nova',
                    icon: 'fa fa-plus-circle',
                    route: 'entidade'
                },
                {
                    name: 'Cliente',
                    icon: 'fas fa-user-tag',
                    route: 'cliente'
                },
                {
                    name: 'Fornecedor',
                    icon: 'fas fa-luggage-cart',
                    route: 'fornecedor'
                },
                {
                    name: 'Operador',
                    icon: 'fas fa-users-cog',
                    route: 'operador'
                }
            ]
        },
        {
            name: 'Faturação',
            route: 'faturacao',
            icon: 'fa fa-credit-card',
            childrean: [
                {
                    name: 'Fatura',
                    icon: 'fas fa-newspaper',
                    route: 'faturacao'
                },
                {
                    name: 'Nota de Crédito',
                    icon: 'fas fa-newspaper',
                    route: 'notacredito'
                },
                {
                    name: 'Nota de Débito',
                    icon: 'fas fa-newspaper',
                    route: 'notadebito'
                },
                {
                    name: 'Receita',
                    route: 'receita'
                },
                {
                    name: 'Venda dia',
                    route: 'vendadia'
                },
                {
                    name: 'V. Produto',
                    route: 'vendaproduto'
                },
                {
                    name: 'Proforma',
                    route: 'proforma'
                }
            ]
        },
        {
            name: 'Recursos humano',
            route: 'recursoshumano',
            icon: 'fa fa-user-graduate'
        },
        {
            name: 'Tesouraria',
            route: 'tesouraria',
            icon: 'fa fa-cash-register',
        },
        {
            name: 'Taxa',
            icon: 'fas fa-chess-rook',
            route: 'taxa',
            childrean: [
                {
                    name: 'Nova',
                    icon: 'fa fa-plus-circle',
                    route: 'taxa'
                },
                {
                    name: 'Imposto',
                    icon: 'fas fa-newspaper',
                    route: 'imposto'
                },
                {
                    name: 'Encargo',
                    route: 'encargo'
                },
                {
                    name: 'Despesa',
                    route: 'despesa'
                },
                {
                    name: 'Desconto',
                    route: 'desconto'
                }
            ]
        },
        {
            name: 'Configurações',
            route: 'configuracaoes',
            icon: 'fas fa-cogs',
            childrean: [
                {
                    name: 'Personalisar',
                    icon: 'fas fa-palette',
                    route: 'personalisar'
                },
                {
                    name: 'Backup',
                    icon: 'fas fa-database',
                    route: 'backup'
                },
                {
                    name: 'Restore',
                    icon: 'fas fa-clock',
                    route: 'restore'
                }
            ]
        },
        {
            name: 'Usuário',
            route: 'usuario',
            icon: 'fas fa-user',
            childrean: [
                {
                    name: 'Novo',
                    icon: 'fa fa-plus-circle',
                    route: 'usuario'
                },
                {
                    name: 'Listagem',
                    icon: 'fas fa-newspaper',
                    icon: 'fa fa-list',
                    route: 'usuario'
                },
                {
                    name: 'Permição',
                    icon: 'fas fa-user-shield',
                    route: 'permicoes'
                }
            ]
        },
        {
            name: 'Outras tabela',
            icon: 'fas fa-calendar',
            route: 'outrastabelas',
            childrean: [
                {
                    name: 'Categoria',
                    icon: 'fas fa-box',
                    route: 'categoria'
                },
                {
                    name: 'Subcategoria',
                    icon: 'fas fa-sitemap',
                    route: 'subcategoria'
                },
                {
                    name: 'Papel',
                    icon: 'fas fa-shield-alt',
                    route: 'papel'
                },
                {
                    name: 'Estado',
                    icon: 'fas fa-toggle-on',
                    route: 'estado'
                },
                {
                    name: 'Tipo de Artigo',
                    icon: 'fas fa-tag',
                    route: 'tipoartigo'
                },
                {
                    name: 'Nível de Acesso',
                    icon: 'fas fa-fingerprint',
                    route: 'nivelacesso'
                }
            ]
        },
        {
            name: 'Sair',
            route: 'sair',
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
            <div>
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
            { !navToggle && (
                <div style={{
                    opacity: !navToggle ? 1 : 0
                }} className="menuTitle">
                    Menu
                </div>
            ) }
            </div>
            <div>
                <ul>
                    {
                        menu.map(({name,route,icon, childrean},index)=>{
                            return (
                                <li onClick={()=>{
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
                                                menu: name,
                                                route: null
                                            }
                                        })
                                    else
                                        setData({
                                            ...data,
                                            navigation: {
                                                ...data.navigation,
                                                menu: name,
                                                route,
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
                                        }}> {childrean.map(({ name, route , icon },key)=>{
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
                                                        submenu: name,
                                                        route
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
