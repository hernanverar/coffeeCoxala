import React from 'react';
import Beans from './Beans';
import PropTypes from 'prop-types';

function BeansList(props) {
  return (
    <React.Fragment>
        {props.beansListList.map((beans) =>
      <Beans 
        whenFlavorClicked = { props.onBeansSelection }
        whenSellClicked = { props.onSell }
        name={beans.name}
        price={beans.price}
        description={beans.description}
        type={beans.type}
        quantity={beans.quantity}
        id={beans.id}
        key={beans.id}/>
    )}
    </React.Fragment>
  )
}

export default BeansList
