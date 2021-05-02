import { useState } from "react"
import React from "react"


const Formulario = () => {
    const [valor, setvalor] = useState('inicial')

    return (
        <div className="input">  
            <input value={valor} />
        </div>
    )
}

export default Formulario