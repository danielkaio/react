import React from 'react'
import FamiliaMembro from './FamiliaMembro'

const Familia = (props) => {

    return (

        <div>
            <FamiliaMembro nome="karina" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="rosa" {...props}></FamiliaMembro>
            <FamiliaMembro nome="daniel"></FamiliaMembro>
        </div>

    )

}
export default Familia