import React, { useState, useEffect } from 'react'

import { Input, Select } from '../../../../layout/form'

import { useUgest } from '../../../context'


export default function index() {

    const { data, setData } = useUgest()

    const [ estado, setEstado ] = useState([])

    useEffect(() => {

        setEstado(data.multUso.estado.map(({ est_id, est_designacao })=>{
            return { value: est_id, label: est_designacao }
        }))
    }, [data])

    return (
        <div className="estadoForm">
            <Input 
                            icon="fas fa-pen"
                            label="Designação"
                            type="text"
                            placeholder="nome"
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        tip_designacao: e.target.value
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
                                        tip_estado_id: e.target.value
                                    }
                                }
                            })}
                            label="Estado"
                            data={estado}
                        />
        </div>
    )
}
