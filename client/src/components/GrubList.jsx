import React from 'react';
import GrubListEntry from './GrubListEntry.jsx';
import Grid from '@material-ui/core/Grid';



const GrubList = ({ grubs }) => (
  <Grid container spacing={2}>
    <Grid item lg={12}>
      <Grid container justify='center' spacing={2}>
        {grubs.map((grub, index) => (
          <Grid key={index} item lg={4}>
            <GrubListEntry grub={grub} key={index} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>

)

export default GrubList;

{/* const GrubList = ({ grubs }) => {
  return grubs.map((grub, index) =>
  <GrubListEntry grub={grub} key={index} />
  )
} */}