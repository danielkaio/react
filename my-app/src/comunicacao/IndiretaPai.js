import React, {useState} from 'react'
import IndiretaFilho from '../comunicacao/IndiretaFilho'
const Direta = (props) => {

    const [nome,Setnome] = useState( '?')
    const [idade,Setidade]= useState()
    const [nerd,Setnerd]= useState(false)

 

    const informacoes = (nome, idade, nerd) => {

        Setidade(idade)
        Setnerd(nerd)
        Setnome(nome)


    }
    return (


        <div>

            <span>{nome}</span>
           <strong> <span>{idade}   </span></strong>
            <span>{nerd ?'verdade':  'false'}</span>
            <IndiretaFilho QuandoClicar={informacoes} ></IndiretaFilho>

        </div>
    )
}


export default Direta