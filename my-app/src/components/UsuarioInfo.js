import React from 'react'
import If, { Else } from './If'


const UsuarioInfo = (props)=>{
    const usuario = props.usuario
  
    return (
        <div>
         {/*  <If test = {usuario && usuario.nome}>
                seja bem vindo  <strong>{usuario.nome}</strong>

            </If>
            <If test = {!usuario || usuario.nome}>
                seja bem vindo  <strong>{usuario.nome}</strong>

    </If>*/}

            <If test = {!usuario || usuario.nome}>
                seja bem vindo  <strong>{usuario.nome}</strong>
                <Else>
                    seja bem vindo <strong>amigão</strong>
                </Else>

            </If>


        </div>

    )


}


export default UsuarioInfo
