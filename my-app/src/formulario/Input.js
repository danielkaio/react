import React, { useState } from 'react'



const Formulario = (props) => {
    const mudar = (e)=>Setvalor(e.target.value)

    const [valor, Setvalor] = useState("inicial")

    return(
        <div style={{
            display :"flex",
            flexDirection :"column"
           
        }}>
            <h2>{valor}</h2>
            <input value={valor} onChange={mudar}/>
            <input value={valor} onChange={mudar} readOnly/>
          
        </div>
    )



}


export default Formulario