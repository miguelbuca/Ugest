import React from 'react'

import { Input } from '../../../../layout/form'

export default function index() {
    return (
        <div className="estadoForm">
            <Input 
                            icon="fas fa-pen"
                            label="Designação"
                            type="text"
                            placeholder="activo"
                        />
        </div>
    )
}
