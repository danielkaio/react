import React, { cloneElement } from 'react'


const Familia = (props) => {

  console.log(typeof props.children)
  return (

  
    <div>

      {

        React.Children.map(props.children, (child) => {

          return cloneElement(child, props)
        })
      }
    </div>


  )

}
export default Familia