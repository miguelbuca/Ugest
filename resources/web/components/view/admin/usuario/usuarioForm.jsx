import React, { useEffect, useState } from 'react'


import { Input, Select, Button, InputFile } from '../../../layout/form'

import { useUgest } from '../../context'

import Api from '../../../../api'

const Form = (props) =>{

    const { data, setData } = useUgest()
    const [ estado, setEstado ] = useState([])
    const [ nivelAcesso, setNivelAcesso ] = useState()
    
    useEffect(() => {
        setEstado(data.multUso.estado.map(({ est_id, est_designacao })=>{
            return { value: est_id, label: est_designacao }
        }))
    }, [data])

    useEffect(async() => {
        const res = await Api.get( `/nivelacesso`);
            setNivelAcesso(res.data.map(({ niv_id, niv_designacao })=>{
            return { value: niv_id, label: niv_designacao }
        }))
    }, [])

    useEffect(() => {
        setData({
          ...data,
            action:{}
        })
    }, [])



    return(
        <div className="formContent">
        <div className="fCr">
        <Input 
                icon="fas fa-user"
                label="NIF/BI"
                type="text"
                placeholder="nif do proprietário"
                onChange={e=>{
                    console.log(e.target.value)
                }}
            />

<Input 
                icon="fas fa-user-check"
                label="Proprietário"
                type="text"
                readOnly
                placeholder="nome completo"
                onChange={e=>{
                    console.log(e.target.value)
                }}
            />
            
<Input 
                icon="fas fa-pen"
                label="Nome"
                type="text"
                placeholder="nome.usuario"
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            usu_username: e.target.value
                        }
                    }
                })}
            />
<Select
                label="Nível de acesso"
                data={nivelAcesso}
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            usu_nivelAcesso_id: e.target.value
                        }
                    }
                })}
            />

<Input 
                icon="fas fa-lock"
                label="Palavra passe"
                type="password"
                onChange={e=>setData({
                    ...data,
                    action:{
                        ...data.action,
                        toSave: {
                            ...data.action.toSave,
                            usu_password: e.target.value
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
                            usu_estado_id: e.target.value
                        }
                    }
                })}
            />
</div>
<div>
<Button className="cancel" style={{
                  marginRight: '1rem',
                }}>
                Cancelar
                <i className="fa fa-times"/>
              </Button>
              <Button onClick={async()=>{
                            const res = await Api.post( `/usuario`,{
                              ...data.action.toSave,"usu_pessoa_id": "3"
                            });
                            props.onUpdate()
                          }}>
                Salvar
                <i className="fa fa-save"/>
              </Button>
</div>
    </div>
    )
}

export default Form