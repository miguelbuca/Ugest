import React from 'react'

export default function index() {
    return (
        <footer>
            <div className="container">
                <div>
                    <h5>
                        Ugest
                    </h5>
                    <ul>
                        <li><a href="#">Sobre a UGEST</a></li>
                        <li><a href="#">Recrutamento</a></li>
                        <li><a href="#">Os nossos Clientes</a></li>
                        <li><a href="#">Referral Members</a></li>
                        <li><a href="#">Consultoria</a></li>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div>
                    <h5>
                        EDUCATION
                    </h5>
                    <ul>
                        <li><a href="#">Teaching with Software</a></li>
                        <li><a href="#">Education Talks</a></li>
                        <li><a href="#">Education Labs</a></li>
                        <li><a href="#">Study Visits</a></li>
                    </ul>
                </div>
                <div>
                    <h5>
                        NOTICIAS E EVENTOS
                    </h5>
                    <ul>
                        <li><a href="#">Press Releases</a></li>
                        <li><a href="#">Eventos e Webinars</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Newsletter</a></li>
                    </ul>
                </div>
                <div>
                    <h5>
                        SITE
                    </h5>
                    <ul>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos de Utilização</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Mapa do Site</a></li>
                    </ul>
                </div>
                <div>
                    <h5>
                        CONTACTOS
                    </h5>
                    <ul>
                        <li><a href="#">Como chegar</a></li>
                        <li><a className="mailto" href="mailto:info@ugest.com">info@ugest.com</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="container">
                    <div>
                        Ugest Angola, © 2021 - {new Date().getFullYear()} | MADE WITH LOVE BY INFINITUS
                    </div>
                    <div>
                        Logo
                    </div>
                </div>
            </div>
        </footer>
    )
}
