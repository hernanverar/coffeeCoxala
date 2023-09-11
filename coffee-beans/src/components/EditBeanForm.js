import ReusableForm from './ReusableForm';
import React from 'react';
import PropTypes from "prop-types";


function EditBeanForm (props) {
  const { beans } = props;

  function handleEditBeanFormSubmission(event) {
    event.preventDefault();
    props.onEditBeans({
      name: event.target.name.value, 
      price: parseFloat(event.target.price.value), 
      description: event.target.description.value, 
      type: event.target.type.value, 
      quantity: parseInt(event.target.quantity.value), 
      id: beans.id});
  }
  return (
    <React.Fragment>
<ReusableForm 
        formSubmissionHandler={handleEditBeanFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}
EditBeanForm.propTypes = {
  beans: PropTypes.object,
  onEditBeans: PropTypes.func
};

export default EditBeanForm;


