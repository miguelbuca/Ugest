import React, { useState, useEffect } from 'react'

import { Input, Select } from '../../../../layout/form'

import { useUgest } from '../../../context'

import Api from '../../../../../api'

export default function index() {

    const { data, setData } = useUgest()

    const [ estado, setEstado ] = useState([])

    const [ papel, setPapel ] = useState([])

    useEffect(() => {
        setEstado(data.multUso.estado.map(({ est_id, est_designacao })=>{
            return { value: est_id, label: est_designacao }
        }))

        console.log('data->',data)
    }, [data])
    

    return (
        <div>
        <div className="estadoForm">
            <Input 
                            icon="fas fa-map"
                            label="Morada"
                            type="text"
                            placeholder="rua 52, Urbanização nova vida, Luanda"
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_morada: e.target.value
                                        }
                                    }
                                }
                            })}
                        />
                        <Input 
                            icon="fas fa-map"
                            label="Localidade"
                            type="text"
                            placeholder=""
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_localidade: e.target.value
                                        }
                                    }
                                }
                            })}
                        />
                  
                  <Input 
                            icon="fas fa-flag"
                            label="Código postal"
                            type="number"
                            placeholder=""
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_codigo_postal: e.target.value
                                        }
                                    }
                                }
                            })}
                        />
                        <Input 
                            icon="fas fa-flag"
                            label="Latitude"
                            type="number"
                            placeholder=""
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_latitude: e.target.value
                                        }
                                    }
                                }
                            })}
                        />
                        <Input 
                            icon="fas fa-flag"
                            label="Longitude"
                            type="number"
                            placeholder=""
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_longitude: e.target.value
                                        }
                                    }
                                }
                            })}
                        />
                        <Select
                             onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_estado_id: e.target.value
                                        }
                                    }
                                }
                            })}
                            label="Estado"
                            data={estado}
                        />
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <label style={{
                                cursor: 'pointer'
                            }} htmlFor="qestionAddress">Este endereço, é o principal ? </label> <input style={{
                                marginLeft: '1rem',
                                marginBottom: '1rem'
                            }} id="qestionAddress" type="checkbox" onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        endereco:{
                                            ...data.action.toSave.endereco,
                                            end_principal: e.target.checked
                                        }
                                    }
                                }
                            })}  />
                        </div>
        </div>
        </div>
    )
}
