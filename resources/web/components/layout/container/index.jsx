import React from 'react'

export default function index({ children, ...props }) {
    return (
        <div className="formContentUgest">
            <div>
                { children }
            </div>
            <div>
                test
            </div>
        </div>
    )
}
