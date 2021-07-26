import React, { useState, useEffect } from 'react'

import { Convert } from '../../../../util/money'
import { Min } from '../../../../util/condiction'

import { Input } from '../index'
import Modal from '../modal'

export default function index({ data, options = {
    onlyCollumn : [],
    header : {
        search : false,
        buttons : false,
        pagination: false,
        content: <div></div>
    }
},onHover}) {
    const [ dataTable, setDataTable ] = useState([])
    const [ columns, setColumns ] = useState([])
    const [ toggle, setToggle ] = useState(false)
    const [ filter, setFilter ] = useState('')

    useEffect(() => {
        setDataTable(data.filter(
            item=>JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase())>-1))

    }, [data,filter])

    useEffect(() => {
        setDataTable(data)
    }, [data])

    useEffect(() => {
        if(!dataTable.length)return
        setColumns(Object.keys(dataTable[0]))
    }, [dataTable])

    const verifyColumn = (col) =>JSON.stringify(options.onlyCollumn).indexOf(col)>-1? true: false

    const formatValeu = (value,type) =>{
        
        if(type === "preço") return <span className="monay">{Convert(value,'AOA')}</span>
        if(type === "quantidade") return <span className={'qtd '+ (parseInt(value)<= Min.qtd ? "isLow" : "")}>{ parseInt(value)<= Min.qtd && <i className="fa fa-arrow-down"/> }{value}</span>

        return value
    }

    return (
        <div>
            { options.header.content && <Modal onClose={()=>setToggle(!toggle)} display={toggle}>
                { options.header.content }
            </Modal> }
            <div className="tableConatiner">
                { options.header && <div>
                    <div>
                        { options.header.search && <Input onChange={e=>setFilter(e.target.value)} icon="fa fa-search" placeholder="Pesquisar" /> }
                    </div>
                    <div>
                    { options.header.buttons && (
                        <div>
                            <button>
                                <i className="fa fa-filter"/>
                                filtrar
                            </button>
                            <button>
                                <i className="fa fa-trash"/>
                                Eliminar
                            </button>
                            {/*<button onClick={()=>setToggle(!toggle)}>
                                <i className="fa fa-plus"/>
                                Novo
                            </button>*/}
                        </div>
                    ) }
                    </div>
                </div> }
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        {
                            columns
                                .map((col,index)=>{
                                    if(options.onlyCollumn && options.onlyCollumn.length>0)
                                        return verifyColumn(col) && <th key={index}>{col.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")}</th>
                                    else
                                        return <th key={index}>{col.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")}</th>
                                })  
                        }
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataTable.map((item,index)=>(
                            <tr key={index} onMouseEnter={()=>onHover && onHover(item)}>
                                {
                                    columns.map((col,index)=>{
                                        if(options.onlyCollumn && options.onlyCollumn.length>0)
                                            return verifyColumn(col) && <td key={index}>{formatValeu(item[col],col)}</td>
                                        else
                                            return <td key={index}>{formatValeu(item[col],col)}</td>
                                    })
                                }
                                <td>
                                    <button className="tableButton"><i className="fa fa-ellipsis-v"/></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}
