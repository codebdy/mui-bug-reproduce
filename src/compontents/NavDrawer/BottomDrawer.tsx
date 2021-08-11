import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Button, Paper, SvgIcon, useTheme } from '@material-ui/core';

export const BottomDrawer = () => {
  const [times, setTimes] = React.useState(0);
  const theme = useTheme();


  /**
   * 用BottomNavigationAction，有时会响应两次
   * @param event 
   */
  const toggleOpenMore = (event:React.MouseEvent)=>{
    //setMoreOpen(!moreOpen);
    setTimes(times + 1);
    //console.log('click more button')
    //event.stopPropagation();
  }



  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        //display: { md: 'none', sm: 'block' } ,
        zIndex: theme.zIndex.drawer + 1,
      }} 
    >
      click times: {times}
      <BottomNavigation
        showLabels
      >

        <button 
          onClick = {toggleOpenMore} 
        >
          More
        </button>
      </BottomNavigation>
      {/*<BottomMoreNavigation open = {moreOpen} onClose = {handleCloseMore} />*/}
    </Paper>
  );
}
