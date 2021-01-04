import React from 'react'
import alunos from '../data/alunos'


const lista = () => {

    const itens = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}
                {aluno.nome}
                {aluno.nota}
            </li>
        )

    })
    return (

        <div>
            <ul>
                {itens}

            </ul>

        </div>
    )
}

export default lista