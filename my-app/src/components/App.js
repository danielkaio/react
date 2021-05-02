import React from 'react'
import "./telas/App.css"
import Primeiro from './Primeiro'
import ComParametro from '../components/ComParametro'
import Fragmento from "./Fragmento"
import Random from '../components/Random'
import Card from '../components/telas/Card'
import '../components/telas/Card'
import Famila from '../components/Familia'
import FamiliaMembro from '../components/FamiliaMembro'
import ListaAlunos from '../components/ListaAlunos'
import TabelaProdutos from '../components/TabelasProdutos'
import ParouImpar from '../components/ParouImpar'
import UsuarioInfo from '../components/UsuarioInfo'
import DiretaPai from '../comunicacao/DiretaPai'
import IndiretaPai from '../comunicacao/IndiretaPai'
import Formulario from '../formulario/input'



const app = (props) => {

  return (
    <div id="app">

      <div className="exercicio">

        <Card titulo='desafio aleatorio' color="tomato">
          <Random max={10} min={1}></Random>
        </Card>
        <Card titulo='fragmento'>
          <Fragmento></Fragmento>
        </Card>
        <Card titulo='Primeiro Componente'>
          <Primeiro></Primeiro>
        </Card>
        <Card titulo='Com Parametro' color="gray">
          <ComParametro titulo="Daniel" idade={70}></ComParametro>
        </Card>
        <Card color="navy" titulo='Componente com filhos'>
          <Famila sobrenome="Ajala">
            <FamiliaMembro nome="karina"></FamiliaMembro>
            <FamiliaMembro nome="Joana"></FamiliaMembro>
          </Famila>
        </Card>

        <Card color="green" titulo="repetição ">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card color="black" titulo=" desafio repetição ">
          <TabelaProdutos></TabelaProdutos>
        </Card>
        <Card color="orange" titulo=" comunicação direta ">
          <DiretaPai></DiretaPai>
        </Card>
        <Card color="#c1c1c1" titulo=" comunicação indireta ">
          <IndiretaPai></IndiretaPai>
        </Card>
        <Card color="#c1c1c1" titulo="  componente controlado ">
          <Formulario></Formulario>
        </Card>
        <Card color="blue" titulo=" rederinzação condicional ">
          <ParouImpar numero={2}></ParouImpar>
          <UsuarioInfo usuario={{ nome: 'rosa' }}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>
        <Card color="orange" titulo="componente controlado">
          <Formulario></Formulario>
        </Card>



      </div>
    </div>
  )
}

export default app