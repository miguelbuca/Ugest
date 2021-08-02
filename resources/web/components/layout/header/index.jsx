import React, { useState, useEffect } from 'react'

import Logo from '../../../../assets/img/logo.png'

import Avatar from '../../../../assets/img/avatar.png'

import { useUgest } from '../../view/context'


export default function index() {


    const [ mode, setLang ] = useState(JSON.parse(localStorage.getItem('UserPreference')).mode)
    const { data, setData } = useUgest()

    useEffect(() => {
        setData({
            ...data,
            preference: {
              ...data.preference,
              mode
            }
          })
    }, [mode])

    return (
        <header>
            <div>
                <div className="logoBox">
                    <img src={Logo} alt="ugest-logo"/>
                </div>
                <div>
                    
                </div>
                <div>
                    <button onClick={()=>setLang(!mode)} className="btn-location">
                        <span>
                            <i className="fa fa-sun" />
                        </span>
                        <span className="mode-container">
                            <label style={{
                                fontWeight: mode ? 'bold' : 'normal'
                            }}>Claro</label> | <label style={{
                                fontWeight: !mode ? 'bold' : 'normal'
                            }}>Escuro</label> 
                        </span>
                    </button>
                    <button className="btn">
                        <i className="fa fa-bell"/>
                    </button>  
                    <button className="btn">
                        <i className="fa fa-search"/>
                    </button>
                    <span className="headerAvatar">
                        <img src={Avatar} alt="user-photo"/>
                    </span>
                </div>
            </div>
        </header>
    )
}
