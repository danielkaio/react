import React from 'react'
import "../telas/Card.css"


const card = (props) => {
    const {titulo,children,color} = props
    const estyle = {
        backgroundColor: color
    }

    return (

        <div className="Card" style= {estyle}>
            <div className="titulo">{titulo}</div>
          
            <div className ="content">
            {children}
            </div>
        </div>
       
 
    
      
        
    )
}

export default card