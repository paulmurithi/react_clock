import React from 'react'

export default function FormatDate ( props ) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is { props.date.toLocaleTimeString() }.</h2>
        </div>
    )
}
