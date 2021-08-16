import React, { useEffect, useState } from 'react'

import Table from '../../../layout/form/table'

import Form from './artigosForm'

import Api from '../../../../api'

import { Tab } from '../../../layout/form'

export default function index(props) {

    const { menu,submenu  } = props

    const [ lastHover, setLastHover ]  = useState()

  const [artigo, setArtigo] = useState([])
  
  const [ tabContent, setTabContent ]  = useState([])

    useEffect(async () => {
          const { data } = await Api.get( `/${menu.toLocaleLowerCase()}`);
          setArtigo(data)
    }, [menu])
  
    useEffect(() => {

      setTabContent([
          {
              name: 'Produto',
              icon: 'fa fa-tag',
              content: (
                <section className="otherForms">
                  <Form onUpdate={async()=>{
                      const { data } = await Api.get( `/${menu.toLocaleLowerCase()}`);
                      setArtigo(data)
                }} route={menu} />
                </section>
              )
          },
          {
              name: 'Serviço',
              icon: 'fa fa-cog',
            content: (
                "ola"
              )
          }
      ])
}, [submenu])

    return (
                submenu == 'Novo' ?   <div className="otherContainer">
                <Tab
                    data={tabContent}
                />
            </div>  : (
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
