import * as React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useCustomerMailsStore } from './store';

export const CustomerMailsLayout = observer((props: {
  defualtDrawerWidth?: number,
  drawer?: any,
  toolbar?: any,
  children?: any,
  toolbarProps?: ToolbarProps,
  drawerMinWidth?: number,
  drawerMaxWidth?: number,
  className?: string,
  foldAt?: 'xl'|'lg'|'md'|'sm'|'xs',
}) => {
  const {
    defualtDrawerWidth = 260, 
    drawerMinWidth = 180,
    drawerMaxWidth = 500,
    drawer, 
    toolbar, 
    toolbarProps = {}, 
    className,
    foldAt = 'lg',
    children
  } = props;
  const [drawerWidth, setDrawerWidth] = useState(defualtDrawerWidth);
  const [draging, setDraging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const theme = useTheme();
  const folded = useMediaQuery(theme.breakpoints.down(foldAt));
  const customerMailsStore = useCustomerMailsStore();
  
  const handleDrawerToggle = () => {
    customerMailsStore.toggleCustomerTreeOnMobile();
  };

  const handleMouseDown = (event:React.MouseEvent<HTMLElement>)=>{
    document.body.classList.add('drawer-resizing');
    setDraging(true);
    setLastX(event.screenX);
  }

  const handleMouseMove = (event:MouseEvent)=>{
    if(draging){
      let newDrawerWidth = drawerWidth - Math.round((lastX - event.screenX));
      if(newDrawerWidth < drawerMinWidth){
        newDrawerWidth = drawerMinWidth
      }
      if(newDrawerWidth > drawerMaxWidth){
        newDrawerWidth = drawerMaxWidth
      }
      setDrawerWidth(newDrawerWidth);
      setLastX(event.x);
   }
  }

  const handleMouseup = ()=>{
    document.body.classList.remove('drawer-resizing');
    setDraging(false);
  }

  //不要加参数[]，要不然事件处理函数里拿不到state
  useEffect(()=>{
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseup)
    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseup)
    }
  })

  return (
    <Box 
      className = {className}
      sx={{ 
      display: 'flex', 
      flex: 1, 
      width:'0', 
      height: '100%',
      '& ::-webkit-scrollbar':{
        lg:{
          display: 'block',
          width: '0.3rem',
          height: '0.3rem',          
        }
      }, 
      '& ::-webkit-scrollbar-track':{
        lg:{
          borderRadius: 0,          
        }
      },
      '& ::-webkit-scrollbar-thumb':{
        lg:{
          borderRadius: '0.2rem',
          background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
          transition: 'all .2s',          
        }
      }

    }}>
      <Box
        component="nav"
        sx={{ 
          width: { lg: drawerWidth }, 
          flexShrink: { lg: 0 },
        }}
        aria-label="mailbox folders"
      >
        {
          folded &&
            <Drawer
            variant="temporary"
            open={customerMailsStore.showCustomerTreeMobile}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              zIndex: theme.zIndex.drawer + 2,
              display: 'flex',
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        }

        {
          !folded &&
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              borderRight: theme.palette.divider + ' solid 1px',
              height: '100%',
              flexFlow: 'column',
            }}
          >
            {drawer}
            <Box
              sx={{
                position: 'absolute',
                width: '10px',
                height: '100%',
                top:0,
                right:'-5px',
                cursor: 'w-resize',
              }}
              onMouseDown = {handleMouseDown} 
              component = 'div'
            >
            </Box>
          </Box>          
        }

      </Box>
      <Box sx={{display: 'flex', flex:1, height:'100%', width:0, flexFlow:'column'}}>
        <Toolbar {...toolbarProps}>
          {
            folded&&
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2}}
            >
              <MenuIcon />
            </IconButton>            
          }
          {toolbar}
        </Toolbar>
        <Box sx={{
          display: 'flex', 
          flex:1, 
          width:'100%', 
          flexFlow:'column', 
          height: '0',
        }} >
          {children}
        </Box>
      </Box>
    </Box>
  );
})
