import React from 'react'


const Condicional =(props)=>{

 const {numero} = props

 const isPar = numero % 2 === 0

    return (
        <div>
            {isPar ?   
            <span>par </span> : 
            <span>impar</span> 
            }
           
            
        </div>
    )
}

export default Condicional