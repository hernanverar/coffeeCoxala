import React from 'react'

function Beans(props) {
  return (
    <div onClick={() => props.whenBeansClicked(props.id, props.type)}></div>
  )
}

export default Beans
