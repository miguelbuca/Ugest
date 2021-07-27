import React, { useState, useEffect } from 'react'

import { Input, Select } from '../../../../layout/form'

import { useUgest } from '../../../context'

import Api from '../../../../../api'

export default function index() {

    const { data, setData } = useUgest()

    const [ estado, setEstado ] = useState([])

    const [ subCategoria, setSubCategoria ] = useState([])

    useEffect(() => {
        setEstado(data.multUso.estado.map(({ est_id, est_designacao })=>{
            return { value: est_id, label: est_designacao }
        }))
    }, [data])

    useEffect(() => {
        (async () => {
              const res = await Api.get( `/subcategoria`);
              setSubCategoria(res.data.map(({ scat_id, scat_designacao })=>{
                return { value: scat_id, label: scat_designacao }
            }))

            console.log(subCategoria)

          })()
      }, [])
    

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
                                        catg_designacao: e.target.value
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
                                        catg_subcategoria_id: e.target.value
                                    }
                                }
                            })}
                            label="Subcategoria"
                            data={subCategoria}
                        />
                        <Select
                            onChange={e=>setData({
                                ...data,
                                action:{
                                    ...data.action,
                                    toSave: {
                                        ...data.action.toSave,
                                        catg_estado_id: e.target.value
                                    }
                                }
                            })}
                            label="Estado"
                            data={estado}
                        />
        </div>
    )
}
