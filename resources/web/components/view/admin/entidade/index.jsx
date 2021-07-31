import React from 'react'

import { Tab } from '../../../layout/form'

export default function index() {
    return (
        <div className="otherContainer">
            <Tab 
                data={[
                    {
                        name: 'Dados pessoais',
                        icon: 'fa fa-user',
                        content: "Dados pessoais"
                    },
                    {
                        name: 'Endereço',
                        icon: 'fa fa-map-pin',
                        content: "Endereço"
                    },
                    {
                        name: 'Contacto',
                        icon: 'fa fa-phone-alt',
                        content: "Contacto"
                    },/*
                    {
                        name: 'Papel',
                        icon: 'fa fa-user-graduate',
                        content: "ola mundo1"
                    }*/
                ]}
                isStep
                />
        </div>
    )
}
