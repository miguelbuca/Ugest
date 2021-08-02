import React, { useEffect, useState } from 'react'

import Table from '../../../layout/form/table'

import Form from './usuarioForm'

import Api from '../../../../api'

export default function index(props) {

    const { menu,submenu  } = props

    const [ lastHover, setLastHover ]  = useState()

    const [ artigo, setArtigo ] = useState([])

    const produtos = [
        {
          nome: 'Marcelo Burlon',
          categoria: 'Roupa',
          subcategoria: 'T-shert',
          'preço': 25306,
          estado: 'activo',
          quantidade: 8,
          foto: 'mrcb.jpg'
        },
        {
          nome: 'Balanciaga',
          categoria: 'Calçados',
          subcategoria: 'Botas',
          'preço': 4505.02,
          estado: 'activo',
          quantidade: 16,
          foto: 'botas.jpg'
        },
        {
          nome: 'SmartWath',
          categoria: 'Eletrônicos',
          subcategoria: 'Relógio',
          'preço': 8500.728,
          estado: 'activo',
          quantidade: 3,
          foto: 'relogio.jpg'
        },
        {
          nome: 'Test',
          categoria: 'Eletrônicos',
          subcategoria: 'Relógio',
          'preço': 70000,
          estado: 'inativo',
          quantidade: 35,
          foto: 'relogio.jpg'
        }
    ]

    useEffect(() => {
      (async () => {
            const { data } = await Api.get( `/${menu.toLocaleLowerCase()}`);
            setArtigo(data)
        })()
    }, [ menu ])

    return (
                submenu == 'Novo' ? <Form onUpdate={()=>{
                      (async () => {
                        const { data } = await Api.get( `/${menu.toLocaleLowerCase()}`);
                        setArtigo(data)
                    })()
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
        data={artigo} />
                    </div>
                )
    )
}
