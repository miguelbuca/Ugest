import React, { useEffect, useState } from 'react'

import Table from '../../../layout/form/table'

import Form from './usuarioForm'

import Api from '../../../../api'

export default function index(props) {

    const { menu,submenu,route  } = props

    const [ lastHover, setLastHover ]  = useState()

    const [ usuario, setUsuario ] = useState([])

    useEffect(async() => {
        const { data } = await Api.get( `/${route.toLocaleLowerCase()}`);
        setUsuario(data)
    }, [ menu ])

    return (
                submenu == 'Novo' ? <Form {...props} onUpdate={async()=>{
                        const { data } = await Api.get( `/${route.toLocaleLowerCase()}`);
                        setUsuario(data)
                }} route={menu} /> : (
                    <div className="tbOut" style={{
                        padding: '2rem',
                        width: '100%',
                        backgroundColor: 'white'
                    }}>
                        <Table
            onHover={e=>setLastHover(e)}
        options={{
          onlyCollumn: [],
          header:{
            search: true,
            buttons: true,
            modal:{
                content: <Form /> ,
                label: {
                    icon: "fas fa-edit",
                    title: "Editar"
                }
            }
          }
        }} 
        data={usuario} />
                    </div>
                )
    )
}
