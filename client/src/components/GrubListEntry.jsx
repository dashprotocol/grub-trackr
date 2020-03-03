import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const GrubListEntry = ({ grub }) => (
  <Card>
    <CardHeader
      action={
        <IconButton aria-label='edit'>
          <EditIcon />
        </IconButton>
      }
      title={grub.item}
      subheader={grub.expiration}
    />
    <CardContent>
      <Typography variant='body1' color='textPrimary' component='p'>
        Quantity: {grub.quantity}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {grub.category}
      </Typography>
    <CardActions>
      <IconButton style={{marginLeft:'auto', marginTop:'-50px', marginRight:'-12px'}} aria-label='delete'>
        <HighlightOffIcon />
      </IconButton>
    </CardActions>
    </CardContent>
  </Card>
)

export default GrubListEntry;

  {/* // <Paper elevation={20}>
  //   {grub.item}
  //   Quantity:
  //   {grub.quantity}
  //   {grub.category}
  //   {grub.expiration}
  // </Paper> */}