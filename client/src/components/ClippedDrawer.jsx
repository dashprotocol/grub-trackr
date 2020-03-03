import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import GrubList from './GrubList.jsx';
import AddIcon from '@material-ui/icons/Add';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import EcoIcon from '@material-ui/icons/Eco';
import AddModal from './AddModal.jsx';
import axios from 'axios';

const drawerWidth = 180;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});


class ClippedDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalOpen: false,
    }
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFridgeClick = this.handleFridgeClick.bind(this);
    this.handleFreezerClick = this.handleFreezerClick.bind(this);
    this.handlePantryClick = this.handlePantryClick.bind(this);
  }

  componentDidMount() {
    this.handleFridgeClick();
  }

  handleClickOpen() {
    this.setState({
      modalOpen: true
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false
    });
  }

  handleFridgeClick() {
    axios.get('/list/Fridge')
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      })
  }

  handleFreezerClick() {
    axios.get('/list/Freezer')
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      })
  }

  handlePantryClick() {
    axios.get('/list/Pantry')
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch(function () {
        console.log(error);
      })
      .finally(function () {
      })
  }


  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <Toolbar></Toolbar>
        <List>
            <ListItem button onClick={this.handleClickOpen}>
              <ListItemIcon>
                <AddIcon color='black' />
              </ListItemIcon>
              <ListItemText primary='Add' />
            </ListItem>
            <ListItem button onClick={this.handleFridgeClick}>
              <ListItemIcon>
                <KitchenIcon color='black' />
              </ListItemIcon>
              <ListItemText primary='Fridge' />
            </ListItem>
            <ListItem button onClick={this.handleFreezerClick}>
              <ListItemIcon>
                <AcUnitIcon color='black' />
              </ListItemIcon>
              <ListItemText primary='Freezer' />
            </ListItem>
            <ListItem button onClick={this.handlePantryClick}>
              <ListItemIcon>
                <EcoIcon color='black' />
              </ListItemIcon>
              <ListItemText primary='Pantry' />
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <GrubList grubs={this.state.data} />
      <AddModal open={this.state.modalOpen} handleClose={this.handleClose} />
    </div>
    )
  }
}

export default withStyles(styles)(ClippedDrawer);