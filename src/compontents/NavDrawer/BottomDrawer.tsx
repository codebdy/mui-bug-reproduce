import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Paper, SvgIcon, useTheme } from '@material-ui/core';

import { BottomMoreNavigation } from './BottomMoreNavigation';
export const BottomDrawer = () => {
  const [moreOpen, setMoreOpen] = React.useState(false);
  const theme = useTheme();


  /**
   * 用BottomNavigationAction，有时会响应两次
   * @param event 
   */
  const toggleOpenMore = (event:React.MouseEvent)=>{
    setMoreOpen(!moreOpen);
    console.log('click more button')
    event.stopPropagation();
  }


  const handleCloseMore = ()=>{
    setMoreOpen(false);
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
      elevation={moreOpen ? 0 : 6}
    >
      <BottomNavigation
        showLabels
      >

        <BottomNavigationAction label={'more'}
          icon={
            <SvgIcon>
              <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
            </SvgIcon>
          } 
          onClick = {toggleOpenMore} 
        />
      </BottomNavigation>
      <BottomMoreNavigation open = {moreOpen} onClose = {handleCloseMore} />
    </Paper>
  );
}
