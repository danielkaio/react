import React from 'react'


const indireta = (props) => {
    const { texto, numero, bool } = props
    return (

        <div>

            <p>{texto}</p>
            <p>{numero}</p>
            <p>{bool}</p>
        </div>
    )
}

export default indireta