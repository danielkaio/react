import React from 'react'
import If from './If'
    


const Usuario = (props) => {

    const { usuario } = props || {}

    return (
        
            <div>
                <If test={usuario&& usuario.nome}>
                seja bem vindo {usuario.nome}
                </If>

                <If test={!usuario || usuario.nome}>
                seja bem vindo amigo
                </If>
              
            </div>
       
    )
}

export default Usuario