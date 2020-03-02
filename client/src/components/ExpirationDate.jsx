import 'date-fns';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class ExpirationDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date (),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.selectedDate = this.selectedDate.bind(this);
  }


  handleDateChange(date) {
    this.setState({date: date});
  }

  selectedDate() {
    return newDate();
  }

  render() {
    const selectedDate = new Date();
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Expiration Date"
          format="MM/dd/yyyy"
          value={this.state.date}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default ExpirationDate;