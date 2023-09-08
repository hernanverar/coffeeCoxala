import React from 'react';
import Beans from './Beans';
import PropTypes from 'prop-types';

function BeansList(props) {
  return (
    <React.Fragment>
        {props.beansList.map((beans) =>
      <Beans 
        whenBeansClicked = { props.onBeansSelection }
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
  );
}

BeansList.propTypes = {
  beansList: PropTypes.array,
  onBeansSelection: PropTypes.func,
  onSell: PropTypes.func,
};

export default BeansList
