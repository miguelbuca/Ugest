import React, { useEffect } from 'react'

function index({
    state,
    label}) {

    return state &&  (
        <div className="loaderContainer">
            <div className="loaderAnimation"></div>
            {label && (
                <div>{ label }</div>
            ) }
        </div>
    )
}

export default index
