import React from 'react'


const FamiliaMembro = (props)=>{

    const {nome ,sobrenome} = props
    
    return(
      <span>
       
       <p>{nome}</p><p>{sobrenome}</p>
      </span>

    )

}
export default FamiliaMembro