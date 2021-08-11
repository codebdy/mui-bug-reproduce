import React from 'react';
import {Box, CircularProgress } from '@material-ui/core';

export default function Loading(){

  return (
    <Box sx = {{
      position:'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      height:'100%',
    }}>
      <CircularProgress />
    </Box>
  )
}
