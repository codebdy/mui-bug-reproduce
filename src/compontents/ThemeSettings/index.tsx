import * as React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '../../store/AppStore';
import { Box, Button, DialogActions, DialogContent, DialogTitle, Divider, Drawer, Typography } from '@material-ui/core';
import intl from 'react-intl-universal'
import { ThemeOptionsPannel } from './ThemeOptionsPannel';
import { useTheme } from '@material-ui/core';

export const ThemeSettings = observer(() => {
  const theme = useTheme();
  const appStore = useAppStore();

  const handleClose = ()=>{
    appStore.restoreTheme();
    appStore.closeThemeSettings();
  }

  const handleSave = ()=>{
    appStore.closeThemeSettings();
  }

  return (
    <Drawer
      variant = "persistent"
      anchor={'right'}
      open={appStore.showThemeSettings}
      onClose={handleClose}
      sx={{
        '& .MuiDrawer-paper':{
          backgroundColor: theme.palette.background.paper,
          backgroundImage: 'none',
          boxShadow: (theme.shadows  as any)[20],
          zIndex: theme.zIndex.drawer + 2,
        },
      }}
    >
      <DialogTitle>
        { intl.get('theme-settings') }
      </DialogTitle>
      <Divider />
      <DialogContent 
        sx={{
          minWidth:300,
          '&::-webkit-scrollbar':{
            lg:{
              display: 'block',
              width: '0.3rem',
              height: '0.3rem',          
            }
          }, 
          '&::-webkit-scrollbar-track':{
            lg:{
              borderRadius: 0,          
            }
          },
          '&::-webkit-scrollbar-thumb':{
            lg:{
              borderRadius: '0.2rem',
              background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
              transition: 'all .2s',          
            }
          },
          display:'flex',
          flexFlow:'column',    
        }}
      >
        <Box>
          <Typography variant = "subtitle1" sx={{ml:-1}}>
            {intl.get('mini-drawer')}
          </Typography>
        </Box>
        <ThemeOptionsPannel 
          skin = {appStore.drawerSkinName} 
          primary = {appStore.drawerPrimary}
          onSkinChange = {(skin)=>{
            appStore.setDrawerSkinName(skin)
          }}

          onPrimaryChange = {(primary)=>{
            appStore.setDrawerPrimary(primary)
          }}
        />
        <Box sx={{mt:2}}>
          <Typography variant = "subtitle1" sx={{ml:-1}}>
            {intl.get('workspace')}
          </Typography>
        </Box>
        <ThemeOptionsPannel 
          skin = {appStore.skinName} 
          primary = {appStore.primary}
          onSkinChange = {(skin)=>{
            appStore.setSkinName(skin)
          }}

          onPrimaryChange = {(primary)=>{
            appStore.setPrimary(primary)
          }}
        />
      </DialogContent>
      <Divider />
      <DialogActions>
      <Button color = 'inherit' onClick={handleClose}>
        {intl.get('cancel')}
      </Button>
      <Button variant = "contained" onClick={handleSave}>
        {intl.get('save')}
      </Button>
      </DialogActions>
    </Drawer>

  );
})
