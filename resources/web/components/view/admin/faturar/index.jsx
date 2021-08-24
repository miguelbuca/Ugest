import React, { useEffect, useState } from 'react'

import Card from '../../../layout/form/Card'
import Modal from '../../../layout/form/modal'

import ProductPropForm from './productPropForm'

import Api from '../../../../api'

import { useUgest } from '../../context'

function index() {

    const { data, setData } = useUgest()

    const [artigo, setArtigo] = useState() 
    const [tipoArtigo, setTipoArtigo] = useState()
    const [ toggle, setToggle ] = useState(false)
    
    const [typeFilter, setTypeFilter] = useState('')
    
    const [ selectedProduct, setSelectedProduct ] = useState({})

    useEffect(async() => {
        const { data: artigos } = await Api.get( `/artigo`);
        setArtigo(artigos)

        const { data: tipoArtigo } = await Api.get( `/tipoartigo`);
        setTipoArtigo(tipoArtigo)
    }, [])

    useEffect(() => {

        if (!artigo && !tipoArtigo) setData({
            ...data,
            loader: {
                state: true,
                label: null
            }          
        })
        
        if (artigo && tipoArtigo) setData({
            ...data,
            loader: {
                state: false,
                label: null
            }          
        })
            

    }, [artigo, tipoArtigo])

    return (
        <div style={{
            width: '100%'
        }}>
            <Modal onClose={()=>setToggle(!toggle)} display={toggle}>
                <ProductPropForm product={ selectedProduct }/>
            </Modal>
        <div className="faturarContainer">
            <div>
                <ul>
                    <li onClick={()=>setTypeFilter('')} active={ typeFilter === '' ? "true" : "false" }> <i className="fa fa-tags"/> Todos</li>
                    {
                        [...tipoArtigo || []].map(({ tip_designacao: name }, index) => <li onClick={()=>setTypeFilter(name)} active={ typeFilter === name ? "true" : "false" } key={index}>{ name }</li>)
                    }
                </ul>
            </div>
            <div className="faturarContent">
                {
                        [...artigo || []].map((item, index) => <Card onClick={() => {
                            setSelectedProduct(item)
                            setToggle(!toggle)
                    }} key={index} {...item} />)
                }
            </div>
            </div>
        </div>
    )
}

export default index
