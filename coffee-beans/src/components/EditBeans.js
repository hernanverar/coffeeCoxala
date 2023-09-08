import ReusableForm from ',/ReusableForm';
import React from 'react'
import PropTypes from "prop-types";


function EditBeans(props) {
  const { beans } = props;

  function handleEditBeansSubmission(event) {
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
        formSubmissionHandler={handleEditBeansSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}
EditBeans.propTypes = {
  beans: PropTypes.object,
  onEditBeans: PropTypes.func
};

export default EditBeans


