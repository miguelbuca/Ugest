import React, { useEffect, useState } from 'react'

import relogioIMG from '../../../../../assets/img/relogio.jpg'

import {  useUgest  } from '../../context'

import { Button } from '../../../layout/form'

import { Convert } from '../../../../util/money'


function index() {

    const { data, setData } = useUgest()

    const [artigo, setArtigo] = useState([])
    const [total, setTotal] = useState(0)
    
    useEffect(() => {

        artigo.map(({ quantidade, artigo: { art_stock_minimo } }) => {
            setTotal(total + quantidade*art_stock_minimo)
        })
    },[artigo])

    useEffect(() => {

        if (!data.shopping.artigo) return

        setArtigo(Object.keys(data.shopping.artigo).map(item => {
            console.log(item)

            return { ...data.shopping.artigo[item] }
        }))

    }, [data])

    const ArtigoCard = ({ artigo: {art_id, art_designacao}, quantidade}) => {
        return (
            <div className="artigoCard">
                <div>
                    <div>
                        <h3>{ art_designacao }</h3>
                    </div>
                    <div>
                        <span>
                            <i className="fa fa-edit" />
                        </span>
                        <span>
                            <i className="fa fa-trash" />
                        </span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={relogioIMG} alt="product"/>
                    </div>
                    <div>
                        othres
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="shoppingConatiner">
            <div>
                <div>
                    <h3 style={{
                        fontWeight: 'bold',
                        margin: 0
                    }}>Total <label style={{
                        fontWeight: 'normal'
                    }}>{ Convert( total+(total*14)/100 ) }</label></h3>
                </div>
                <div>
                    <div className="btns-final">
                        <Button style={{
                            marginRight: '1rem'
                        }} className="cancel">
                            <i className="fa fa-times" style={{
                                marginRight: '1rem'
                            }} />
                            Anular venda
                        </Button>
                        <Button>
                            <i className="fa fa-credit-card" style={{
                                marginRight: '1rem'
                            }} />
                            Fazer pagamento
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                <div>
                    <div>
                        <h4>Resumo</h4>
                    </div>
                    <div>
                        <div>
                            <span>Valor dos produtos</span>
                            <span>{ Convert( total ) } </span>
                        </div>
                        <div>
                            <span>IVA</span>
                            <span>14%</span>
                        </div>
                        <div>
                            <span>Desconto</span>
                            <span>0%</span>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <ul>
                        {
                            artigo.map(item =>(
                                    <li>
                                        <ArtigoCard {...item}/>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default index
