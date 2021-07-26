import React,{ useEffect, useState } from 'react'

import { Tab, Button } from '../../../layout/form'
import  Table from '../../../layout/form/table'

/*** Views */
import Estado from './estado'
import Subcategoria from './subcategoria'
import Papel from './papel'
import Categoria from './categoria'
import TipoArtigo from './tipoartigo'
import NivelAcesso from './nivelacesso'

export default function index(props) {

    const { submenu } = props

    const [ tabContent, setTabContent ]  = useState([])

    const [ lastHover, setLastHover ] = useState()

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
    setLastHover(produtos[0])
  }, [])



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
                      { submenu === "Nível de Acesso" && <TipoArtigo /> }
                    </div>
                    <div>
                          <Button className="cancel" style={{
                              marginRight: '1rem',
                            }}>
                            Cancelar
                            <i className="fa fa-times"/>
                          </Button>
                          <Button>
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
          onlyCollumn: [
            'nome',
            'categoria',
            'subcategoria',
            'preço',
            'estado',
            'quantidade',
          ],
          header:{
            search: true,
            buttons: true,
            content: "Product form"
          }
        }} 
        data={produtos} />
                )
            }
        ])
    }, [submenu])

    return (
        <div className="otherContainer">
            <Tab
                data={tabContent}
            />
        </div>
    )
}
