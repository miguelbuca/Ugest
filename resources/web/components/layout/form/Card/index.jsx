import React from 'react'
import relogioIMG from '../../../../../assets/img/relogio.jpg'

import { Button } from '../../../layout/form'

import { Convert } from '../../../../util/money'

function index({ onClick ,art_designacao: nome, art_stock_real: stock }) {
    return (
        <div className="productCard">
            <div>
                <div>
                    <img src={relogioIMG}  alt="produto" />
                </div>
                <div>
                    <h3>{ nome }</h3>
                </div>
            </div>
            <div>
                <div>
                    <span>
                        <strong>Preço unitário{ " " }</strong>{ Convert(7830,'AOA') }
                    </span>
                    <span>
                        <strong>Stock{ " " }</strong>{ stock }
                    </span>
                </div>
                <div>
                    <Button onClick={onClick} style={{
                        width: '100%'
                    }}> <i className="fa fa-shopping-cart"/> Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

export default index
