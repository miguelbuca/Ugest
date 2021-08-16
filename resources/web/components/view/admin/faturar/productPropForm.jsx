import React, { useState } from 'react'

import relogioIMG from '../../../../../assets/img/relogio.jpg'
import { Convert } from '../../../../util/money'
import { Button } from '../../../layout/form'
import Counter from '../../../layout/form/counter'

import { useUgest } from '../../context'

function productPropForm({ product }) {
    
    const { art_designacao: name, art_stock_real: stock } = product

    const [ qtd, setQtd ] = useState()

    const { data, setData } = useUgest()

    return (
        <div className="productPropForm">
            <div>
                <img src={ relogioIMG } alt="product"/>
            </div>
            <div>
                <div>
                    <h3>
                        {name}
                    </h3>
                    <div>
                        <div>
                            <strong>Preço unitário { " " }</strong>{ Convert(7830,'AOA') }
                        </div>
                        <div>
                            <strong>Tipo de artigo { " " }</strong>Eletrónico
                        </div>
                        <div>
                            <strong>Quantidade</strong><Counter onChange={e=>setQtd(e)} min={1} max={stock} />
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={() => {

                        let artigo = {
                            ...data.shopping.artigo,
                        }

                        console.log(artigo)

                        artigo[product.art_id] = {
                            quantidade: qtd,
                            artigo: product
                        }

                        setData({
                            ...data,
                            shopping: {
                                ...data.shopping,
                                artigo
                            }
                        })
                    }}>
                        Finalizar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default productPropForm
