import React, { useEffect, useState } from 'react'

import {  useUgest  } from '../../context'


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

    const ArtigoCard = () => {
        return (
            <div>
                ola mundo
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
                    }}>{ Convert( total ) }</label></h3>
                </div>
                <div>
                    test
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
    )
}

export default index
