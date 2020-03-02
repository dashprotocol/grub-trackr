import React from 'react';
import { Paper } from '@material-ui/core';

const GrubListEntry = ({ grub }) => (
  <Paper elevation={20}>
    {grub.item}
    {grub.quantity}
    {grub.category}
    {grub.expiration}
  </Paper>
)

export default GrubListEntry;