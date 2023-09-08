import React from 'react';
import BeansList from "./BeansList";
import BeansDetail from "./BeansDetail";
import PropTypes from "prop-types";
import EditBeanForm from './EditBeanForm';


class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeansList: [],
      selectedBeans: null,
      editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedBeans != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeans: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditBeanForm beans = {this.state.selectedBeans} onEditBeans = {this.handleEditingFBeansInList} />
      buttonText = "Return to beans List";
    }
    else if (this.state.selectedBeans != null) {
      currentlyVisibleState = <BeansDetail beans = {this.state.selectedBeans} onClickingEdit={this.handleEditClick}/>
      buttonText = "Return to beans List";
    }
      
    else {
      currentlyVisibleState = <BeansList beansList={this.state.mainBeansList} 
      onBeansSelection={this.handleChangingSelectedBeans} 
      onSell={this.sell}
      onClickingEdit = {this.handleEditClick}  />;
      buttonText = "Add Beans";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
  }
}

CoffeeControl.propTypes = {
  beans: PropTypes.object.isRequired
};

export default CoffeeControl;
