import React from 'react'
import "./telas/App.css"
import Primeiro from './Primeiro'
import ComParametro from '../components/ComParametro'
import Fragmento from "./Fragmento"
import Random from '../components/Random'
import Card from '../components/telas/Card'
import '../components/telas/Card'
import Famila from '../components/Familia'



const app = (props) => {

  return (
    <div id="app">

      <div className="exercicio">

        <Card titulo='desafio aleatorio'color="orange">
          <Random max={10} min={1}></Random>
        </Card>
        <Card titulo='fragmento'>
          <Fragmento></Fragmento>
        </Card>
        <Card titulo='Primeiro Componente'> <Primeiro></Primeiro></Card>
        <Card titulo='Com Parametro'> <ComParametro titulo="Daniel" idade={70}></ComParametro></Card>
        <Card color="navy" titulo='Componente com filhos'><Famila sobrenome ="Ajala"></Famila> </Card>
      </div>
    </div>
  )
}

export default app