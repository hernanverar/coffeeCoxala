import React from 'react';
import PropTypes from "prop-types";

function BeansDetail(props) {
  const { beans } = props;
  return (
    <React.Fragment>
      <h1>Chosse your favorite Coffee Beans!</h1>
      <h2> {beans.name}</h2>
      <p>Price: ${beans.price} per pound</p>
      <p>About: <emn>beans.description</emn></p>
      <p>Type: <em>{beans.type}</em></p>
      <p><em>Avalible in stock: {beans.quantity}</em></p>
      <button onClick={ props.onClickingEdit }>Update</button>
    </React.Fragment>
  );
}

BeansDetail.propTypes = {
  beans: PropTypes.object,
  onClickEdit: PropTypes.func,
}

export default BeansDetail
