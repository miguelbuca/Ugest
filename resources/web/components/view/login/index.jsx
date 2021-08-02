import React,{ useEffect } from 'react'

import Logo from '../../../../assets/img/logo.png'

import { Input, Button } from '../../layout/form'

import { useUgest } from '../context'

export default function index() {


    const { data: { preference : { mode } } } = useUgest()

    console.log(mode)

    return (
        <main mode={ !mode ? "Escuro" : "Claro" } className="loginContainer">
            <div className="logo-box">
                <img src={Logo} alt="Ugest-logo"/>
            </div>
            <div className="card">
                <div>
                    <div>
                        <Input
                            icon="fas fa-user"
                            label="Email ou usuário"
                            placeholder="user@ugest.com"
                            type="text"
                        />
                        <Input
                            icon="fas fa-lock"
                            label="Senha"
                            placeholder="*******"
                            type="password"
                        />
                    </div>
                    <div>
                        <div className="logWith">
                            <i className="fab fa-github"/>
                            <i className="fab fa-facebook"/>
                        </div>
                        <div>
                            <Button onClick={()=>{
                                window.location = '/'
                            }}>
                                Entrar
                                <i className="fa fa-sign-in-alt"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#">Esqueceu a sua senha ?</a>
                </div>
            </div>
        </main>
    )
}
