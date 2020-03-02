import React from 'react';
import GrubListEntry from './GrubListEntry.jsx';


const GrubList = ({ grubs }) => {
  return grubs.map((grub, index) =>
  <GrubListEntry grub={grub} key={index} />
  )
}

export default GrubList;