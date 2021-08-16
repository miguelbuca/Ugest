import React, { useEffect, useState } from 'react'


import { Input, Select, Button, InputFile } from '../../../layout/form'

import { useUgest } from '../../context'

import Api from '../../../../api'

const Form = ({ route, ...props }) =>{

    const { data, setData } = useUgest()
    const [ estado, setEstado ] = useState([])
    const [ tipoArtigo, setTipoArtigo ] = useState()
    
    useEffect(() => {
        setEstado(data.multUso.estado.map(({ est_id, est_designacao })=>{
            return { value: est_id, label: est_designacao }
        }))

        console.log(data)

    }, [data])

    useEffect(async() => {
        const res = await Api.get( `/tipoartigo`);
            setTipoArtigo(res.data.map(({ tip_id, tip_designacao })=>{
            return { value: tip_id, label: tip_designacao }
        }))
    }, [])

    useEffect(() => {
        setData({
          ...data,
            action:{}
        })
    }, [route])



    return(
        <div className="productContentMain">
            <div>
                <InputFile />
            </div>
            <div className="formContent">
        <div className="fCr">
<Input 
                icon="fas fa-pen"
                label="Designação"
                type="text"
                placeholder="Nome do artigo"
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            art_designacao: e.target.value
                        }
                    }
                })}
            />
<Select
                label="Estado"
                data={estado}
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            art_estado_id: e.target.value
                        }
                    }
                })}
            />
<Select
                label="Tipo de Artigo"
                data={tipoArtigo}
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            art_tipoArtigo_id: e.target.value
                        }
                    }
                })}
            />

<Input 
                icon="fas fa-box"
                label="Stock mínimo"
                type="number"
                placeholder="0"
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            art_stock_minimo: e.target.value
                        }
                    }
                })}
            />
             <Input 
                icon="fas fa-boxes"
                label="Stock real"
                type="number"
                placeholder="10"
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            art_stock_real: e.target.value
                        }
                    }
                })}
            />
</div>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>
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

                                        //setRes(res)

                                        console.log(`/${route.toLocaleLowerCase()}`,{
                                        ...data.action.toSave
                                        },res)
                                    }}>
                            Salvar
                            <i className="fa fa-save"/>
                        </Button>
            </div>
        </div>
        </div>
    )
}

export default Form