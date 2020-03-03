import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


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