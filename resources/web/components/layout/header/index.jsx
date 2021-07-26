import React, { useState } from 'react'

import Logo from '../../../../assets/img/logo.jpeg'

import Avatar from '../../../../assets/img/avatar.png'


export default function index() {

    const [ mode, setLang ] = useState(true)

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
                            {/*<svg width="15" height="15" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.08156 0.123644 0.123644 4.08156 0 9C0.0834458 10.4542 0.484517 11.8725 1.175 13.155L1.245 13.28C6.685 22 8.31 22 9 22C10.08 22 11.245 21.24 14 17.365C15.445 15.365 16.685 13.365 16.735 13.275L16.805 13.155C17.5025 11.8741 17.9104 10.4557 18 9C17.8764 4.08156 13.9184 0.123644 9 0ZM15.5002 12.5002C15.5002 12.5002 10.5002 20.5002 9.00018 20.5002C7.50018 20.5002 2.50018 12.5002 2.50018 12.5002C1.9189 11.4191 1.57781 10.2252 1.50018 9.00018C1.50018 4.85805 4.85805 1.50018 9.00018 1.50018C13.1423 1.50018 16.5002 4.85805 16.5002 9.00018C16.4179 10.2263 16.0717 11.4203 15.4852 12.5002H15.5002Z" fill="#D5A368"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.99988 4.5C6.79074 4.5 4.99988 6.29086 4.99988 8.5C4.99988 10.7091 6.79074 12.5 8.99988 12.5C11.209 12.5 12.9999 10.7091 12.9999 8.5C12.9999 6.29086 11.209 4.5 8.99988 4.5ZM8.99994 11.0002C7.61923 11.0002 6.49994 9.88089 6.49994 8.50018C6.49994 7.11947 7.61923 6.00018 8.99994 6.00018C10.3807 6.00018 11.4999 7.11947 11.4999 8.50018C11.4999 9.88089 10.3807 11.0002 8.99994 11.0002Z" fill="#D5A368"/>
                                </svg> */}
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
