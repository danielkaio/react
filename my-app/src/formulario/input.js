import { useState } from "react"
import React from "react"


const Formulario = () => {
    const [valor, setvalor] = useState('inicial')

    const mudar = (e)=>{
        setvalor(e.target.value)

    }
    return (
        <div className="input">  
        <h2>{valor}</h2>

        <div style={{
            display:'flex',
            flexDirection:'column'
            
            

        }}>

        </div>
        
      
            <input value={valor}  onChange = {mudar} />
            <input value={valor}  readOnly/>
            <input value={undefined} />
        </div>
    )
}

export default Formulario