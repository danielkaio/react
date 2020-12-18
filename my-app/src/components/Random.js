import React from 'react'


const aleatorio = (props) => {

    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (

        <div>
            <h1>valor aleatorio</h1>
            <p>valor maximo{max}</p>
            <p>valor minimo{min}</p>
            <strong>{aleatorio}</strong>
        </div>
    )

}

export default aleatorio