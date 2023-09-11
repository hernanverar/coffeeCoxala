import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewRoastForm(props) {

  function handleNewRoastFormSubmission(e) {
    e.preventDefault();
    props.onNewRoastCreation({  
      name: e.target.name.value,
      price: parseFloat(e.target.price.value),
      description: e.target.description.value,
      type: e.target.type.value,
      quantity: parseInt(e.target.quantity.value), 
      id: v4()
    });
  }
  
    
  return (
      <React.Fragment>
        <form onSubmit={handleNewRoastFormSubmission}>
          <p>Roast:
          <input
          type='text'
          name='name'
          placeholder='Name of Roast'/><br></br></p>
          <input
          type='number'
          min='0.01'
          step='0.01'
          name='price'
          placeholder='Price' /><br></br>
        <input
          type='text'
          name='type'
          placeholder='Type' /><br></br>
        <textarea
          name='description'
          placeholder='Description' /><br></br>
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='Quantity' /><br></br>
        <button type='submit'>Add Roast</button>
      </form>
      </React.Fragment>
  );
}


NewRoastForm.propTypes = {
  onNewRoastCreation: PropTypes.func,
};

export default NewRoastForm;
