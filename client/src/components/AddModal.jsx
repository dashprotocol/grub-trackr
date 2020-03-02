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



class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grubName: '',
      quantity: 0,
      location: '',
    }
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return(
     <div>
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="grub name"
            label="New food item"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="quantity"
            type="number"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
     </div>
    )
  }
}

export default AddModal;