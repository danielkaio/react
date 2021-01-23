
import  React from 'react'

const Direta = (props)=>{
    const {QuandoClicar} = props
    const gerarIdade = () => parseInt(Math.random() *(20)) + 50
    return(

        <div>
         
        
        <button onClick={
            (e)=> QuandoClicar("karina",gerarIdade(),true)
        }>enviar info</button>
        </div>
    )
}


export  default Direta