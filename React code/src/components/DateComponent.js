import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
/**
 * Added by E5CTBU7
 */
class DateComponent extends React.Component {
  state = {
    startDate: new Date()
  };
 
handleChange = date => {
    this.setState({
      startDate: date
    });
  this.props.onSelectDate(date); 
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DateComponent;