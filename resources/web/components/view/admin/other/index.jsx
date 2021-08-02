import React,{ useEffect, useState } from 'react'

import { Tab, Button } from '../../../layout/form'
import  Table from '../../../layout/form/table'

import { useUgest } from '../../context'

/** Api */

import Api from '../../../../api'

/*** Views */
import Estado from './estado'
import Subcategoria from './subcategoria'
import Papel from './papel'
import Categoria from './categoria'
import TipoArtigo from './tipoartigo'
import NivelAcesso from './nivelacesso'

export default function index(props) {

  const { data, setData } = useUgest()

  const { submenu, route } = props

  const [ tabContent, setTabContent ]  = useState([])

  const [ lastHover, setLastHover ] = useState()

  const [ otherData, setOtherData ] = useState([])

  const [ res, setRes ] = useState()

  useEffect(() => {
    setData({
      ...data,
        action:{}
    })

  }, [submenu])

  useEffect(async () => {
      const { data } = await Api.get( `/${route.toLocaleLowerCase()}`);
      setOtherData(data)
  }, [ res , route ])

  useEffect(() => {

        setTabContent([
            {
                name: 'Formulário',
                icon: 'fa fa-plus',
                content: (
                  <section className="otherForms">
                    <div>
                      { submenu === "Estado" && <Estado /> }
                      { submenu === "Subcategoria" && <Subcategoria /> }
                      { submenu === "Papel" && <Papel /> }
                      { submenu === "Categoria" && <Categoria /> }
                      { submenu === "Tipo de Artigo" && <TipoArtigo /> }
                      { submenu === "Nível de Acesso" && <NivelAcesso /> }
                    </div>
                    <div>
                          <Button className="cancel" style={{
                              marginRight: '1rem',
                            }}>
                            Cancelar
                            <i className="fa fa-times"/>
                          </Button>
                          <Button onClick={async()=>{
                            const res = await Api.post( `/${route.toLocaleLowerCase()}`,{
                              ...data.action.toSave
                            });

                            setRes(res)

                            console.log(`/${route.toLocaleLowerCase()}`,{
                              ...data.action.toSave
                            },res,props)
                          }} >
                            Salvar
                            <i className="fa fa-save"/>
                          </Button>
                    </div>
                  </section>
                )
            },
            {
                name: 'Tabela',
                icon: 'fa fa-calendar',
                content: (
                    <Table
            onHover={e=>setLastHover(e)}
        options={{
          onlyCollumn: [],
          header:{
            search: true,
            buttons: true,
            modal:{
                content:      (<div className="formContent">
                <div className="fCr">
                { submenu === "Estado" && <Estado /> }
                { submenu === "Subcategoria" && <Subcategoria /> }
                { submenu === "Papel" && <Papel /> }
                { submenu === "Categoria" && <Categoria /> }
                { submenu === "Tipo de Artigo" && <TipoArtigo /> }
                { submenu === "Nível de Acesso" && <NivelAcesso /> }
              </div>
              </div>) ,
                label: {
                    icon: "fas fa-edit",
                    title: "Editar"
                }
            }
          }
        }} 
        data={otherData} />
                )
            }
        ])
  }, [otherData,submenu,data])

    return (
        <div className="otherContainer">
            <Tab
                data={tabContent}
            />
        </div>
    )
}
