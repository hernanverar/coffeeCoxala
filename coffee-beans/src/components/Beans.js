import React from 'react'

function Beans(props) {
  return (
    <div onClick={() => props.whenBeansClicked(props.id, props.type)}></div>
  )
}

Beans.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.description.isRequired,
  type: PropTypes.type.isRequired,
  quantity: PropTypes.quantity.isRequired,
  id: PropTypes.string,
};
export default Beans
