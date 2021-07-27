import React, { useEffect } from 'react'

import { Input } from '../../../../layout/form'


import { useUgest } from '../../../context'

export default function index() {

    const { data , setData } = useUgest()
 
    return (
        <div className="estadoForm">
            <Input onChange={e=>setData({
                ...data,
                action:{
                    ...data.action,
                    toSave: {
                        est_designacao: e.target.value
                    }
                }
            })}
                            icon="fas fa-pen"
                            label="Designação"
                            type="text"
                            placeholder="activo"
                        />
        </div>
    )
}
