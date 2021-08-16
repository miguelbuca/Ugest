import React,{ useEffect, useState } from 'react'

function index({ min, max, onChange=(e)=>{} }) {

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        setCount(min)
    }, [max])

    useEffect(() => onChange(count), [count])

    return (
        <span className="counterContainer">
            <button onClick={() => {
                if(count>min)setCount(count-1)
            }}>
                <i className="fa fa-plus"/>
            </button>
            <span>
                {
                    count
                }
            </span>
            <button onClick={() => {
                if(count<max)setCount(count+1)
            }}>
                <i className="fa fa-plus"/>
            </button>
        </span>
    )
}

export default index
