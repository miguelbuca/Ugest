import React, { useEffect, useState } from 'react'

import { Tab } from '../../../layout/form'

import { useUgest } from '../../context'

import Api from '../../../../api'

import Table from '../../../layout/form/table'

/** Views */

import DadosPessoais from './dodospessoais'
import Contacto from './contacto'
import Endreco from './endereco'

export default function index({submenu: route}) {

    const { data: { action: { toSave } } } = useUgest()

    const [ data, setData ] = useState([])

    const [ lastHover, setLastHover ] = useState()

    useEffect(async() => {

        console.log(route)

        const { data } = await Api.get( `/pessoa`);
        setData(data)
    }, [route])

    return (
        <div className="otherContainer">
            {
                route === 'Nova' ? <Tab 
                data={[
                    {
                        name: 'Dados pessoais',
                        icon: 'fa fa-user',
                        content: <DadosPessoais />
                    },
                    {
                        name: 'Endereço',
                        icon: 'fa fa-map-pin',
                        content: <Endreco />
                    },
                    {
                        name: 'Contacto',
                        icon: 'fa fa-phone-alt',
                        content: <Contacto />
                    }
                ]}
                isStep
                onDone={async()=>{
                    const { statusText } = await Api.post( `/pessoa`,{
                        ...toSave["dadospessoais"]
                    });
                    
                    if(statusText === "OK"){
                        const { statusText: enderecoStatusText } = await Api.post( `/endereco`,{
                            ...toSave["endereco"],end_pessoa_id: 1
                        });

                        const { statusText: contactoStatusText } = await Api.post( `/contacto`,{
                            ...toSave["contacto"],cont_pessoa_id: 1
                        });

                        console.log(enderecoStatusText,contactoStatusText)
                    }
                }}
                /> : (
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
                            content: "tes" ,
                            label: {
                                icon: "fas fa-edit",
                                title: "Editar"
                            }
                        }
                      }
                    }} 
                        data={data}
                    />
                    </div>
                )
            }
        </div>
    )
}
