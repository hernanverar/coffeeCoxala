import PropTypes from "prop-types";
import PropTypes from "prop-types";

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
}
  export default CoffeeControl;