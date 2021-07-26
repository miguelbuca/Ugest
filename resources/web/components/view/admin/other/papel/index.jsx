import React from 'react'

import { Input, Select } from '../../../../layout/form'

export default function index() {
    return (
        <div className="estadoForm">
            <Input
                            icon="fas fa-pen"
                            label="Designação"
                            type="text"
                            placeholder="activo"
                        />
                        <Select
                            label="Estado"
                            data={[
                                {
                                    label: 'Activo',
                                    value: 'abc'
                                },
                                {
                                    label: 'Inactivo',
                                    value: 'abc'
                                }
                            ]}
                        />
        </div>
    )
}
