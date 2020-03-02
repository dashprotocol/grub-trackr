import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ExpirationDate from './ExpirationDate.jsx';
import axios from 'axios';



class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grubName: '',
      category: '',
      expiration: '',
      location: '',
    }
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleGrubNameChange = this.handleGrubNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleExpirationDateChange = this.handleExpirationDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  handleGrubNameChange(event) {
    this.setState({
      grubName: event.target.value
    });
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  handleExpirationDateChange(date){
    this.setState({
      expiration: date
    })
  }

  handleSubmit() {
    this.props.handleClose();
    let grub = {
      item: this.state.grubName,
      quantity: this.state.quantity,
      category: this.state.category,
      expiration: this.state.expiration,
      location: this.state.location,
    };
    axios.post('/grub', grub)
      .then(function (response) {
        console.log('Client side add success');
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      })
  }

  render() {
    const { classes } = this.props;
    return(
     <div>
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="grub name"
            label="item name"
            type="text"
            value={this.state.grubName}
            onChange={this.handleGrubNameChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="quantity"
            type="number"
            value={this.state.quantity}
            onChange={this.handleQuantityChange}
            fullWidth
          />
          <InputLabel id='location-dialog-select-label'>location</InputLabel>
          <Select
            labelId='location'
            id='location'
            value={this.state.location}
            onChange={this.handleLocationChange}
            input={<Input />}
            fullWidth
          >
            <MenuItem value='Fridge'>
              Fridge
            </MenuItem>
            <MenuItem value='Freezer'>
              Freezer
            </MenuItem>
            <MenuItem value='Pantry'>
              Pantry
            </MenuItem>
          </Select>
          <InputLabel id='category-dialog-select-label'>category</InputLabel>
          <Select
            labelId='category'
            id='category'
            value={this.state.category}
            onChange={this.handleCategoryChange}
            input={<Input />}
            fullWidth
          >
            <MenuItem value='Dairy'>
              Dairy
            </MenuItem>
            <MenuItem value='Meat'>
              Meat
            </MenuItem>
            <MenuItem value='Vegetable'>
              Vegetable
            </MenuItem>
            <MenuItem value='Fruit'>
              Fruit
            </MenuItem>
            <MenuItem value='Grains and pasta'>
              Grains and pasta
            </MenuItem>
            <MenuItem value='Beverage'>
              Beverages
            </MenuItem>
            <MenuItem value='Other'>
              Other
            </MenuItem>
          </Select>
          <ExpirationDate handleExpirationDateChange={this.handleExpirationDateChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
     </div>
    )
  }
}

export default AddModal;