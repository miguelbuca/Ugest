import React, { useEffect, useState } from 'react'

export function Input({
    value="",
    icon,
    label="", 
    ...props 
}) {
    return (
        <div className="input">
            { label && <span>{label}</span> }
            <input {...props}/>
            { icon && <i className={icon}/> }
        </div>
    )
}
export function Button({children,className="",...props}) {
    return(
        <div>
            <button className={"btnSystem "+className} {...props}>
                {children}
            </button>
        </div>
    )
}
export function Tab({
    data=[{
        name: '',
        content: <div></div>
    }]
}) {

    const [ activeIndex, setActiveIndex ] = useState(0)


    return(
        <div className="tab">
            <div>
                {
                    data.map(({ name , icon },index)=>{
                        return(
                            <span onClick={()=>setActiveIndex(index)} active={index === activeIndex ? "true" : "false"} key={index}>{ icon && <i className={icon}/> }{name}</span>
                        )
                    })
                }
            </div>
            <div>
                {data[activeIndex] && data[activeIndex].content}
            </div>
        </div>
    )
}
export function Select({
    icon,
    label,
    data=[
        {
            label: '',
            value: ''
        }
    ],
    ...props}) {
    return(
        <div className="input">
            { label && <span>{label}</span> }
            <select>
                <optgroup>{
                    data.map(({ label, value },index)=>{
                        return <option key={index} value={value} >{label}</option>
                    })
                }</optgroup>
            </select>
            { icon && <i className={icon}/> }
        </div>
    )
}
export function InputFile({
    ...props
}) {
    return(
        <div className="inputFile">
            <div>1</div>
            <div>Clica ou arraste o seu arquivo aqui</div>
            <input {...props} type="file" hidden={true} />
        </div>
    )
}