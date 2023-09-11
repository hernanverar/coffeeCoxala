import React from 'react';
import BeansList from "./BeansList";
import BeansDetail from "./BeansDetail";
import NewRoastForm from './NewRoastForm';
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

  handleAddingNewRoastToList = (newRoastData) => {
    const newMainBeansList = this.state.mainBeansList.concat(newRoastData);
    this.setState({
      mainBeansList: newMainBeansList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedBeans = (id) => {
    const selectedBeans = this.state.mainBeansList.filter(beans => beans.id === id)[0];
    this.setState({selectedBeans: selectedBeans});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingBeansInList = (beansToEdit) => {
    const editedMainBeansList = this.state.mainBeansList
      .filter(beans => beans.id !== this.state.selectedBeans.id)
      .concat(beansToEdit);
    this.setState({
        mainBeansList: editedMainBeansList,
        editing: false,
        selectedBeans: null
      });
  }

  sell = (inputId) => {
    let newSellBeansList = this.state.mainBeansList;
    if(newSellBeansList.filter(beans => beans.id === inputId)[0].quantity >= 2){
    newSellBeansList.filter(beans => beans.id === inputId)[0].quantity--;}
    else{
      newSellBeansList.filter(beans => beans.id === inputId)[0].quantity = 0;
    }
    this.setState({mainBeansList: newSellBeansList, formVisibleOnPage: false});
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
      
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewRoastForm onNewRoastCreation={this.handleAddingNewRoastToList} /> ;
      buttonText = "Return to Roast List";
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
