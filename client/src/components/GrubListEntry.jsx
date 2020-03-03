import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const GrubListEntry = ({ grub }) => (
  <Paper elevation={20}>
    {grub.item}
    Quantity:
    {grub.quantity}
    {grub.category}
    {grub.expiration}
  </Paper>
)

export default GrubListEntry;