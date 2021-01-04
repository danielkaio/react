import React from 'react'


import produtos from '../data/produtos'



const Tabela = (props) => {

    
    const getLinhas = () => {
        return produtos.map(produto => {

            return (
                <tr key = {produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>preço</th>
                    </tr>
                </thead>

                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela 