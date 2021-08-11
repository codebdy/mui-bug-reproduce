import { Avatar, Box, IconButton, SvgIcon, Typography } from "@material-ui/core";
import { DialogTitle, Divider, Drawer, useTheme } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import intl from 'react-intl-universal';
import { Module } from "../../data/Module";
import { useAppStore } from "../../store/AppStore";
import { BottomMoreNavigationItem } from "./BottomMoreNavigationItem";

export const BottomMoreNavigation = (
  props:{
    open:boolean,
    onClose:()=>void,
    modules: Module[],
  }
)=>{
  const {modules, open, onClose} = props;
  const theme = useTheme();
  const appStore = useAppStore();
  const handleThemeSetteings = ()=>{
    appStore.backupTheme();
    appStore.openThemeSettings();
    onClose();
  }
  
  return (
    <Drawer
      anchor ="bottom"
      open = {open}
      variant="temporary"
      sx = {{
        '& .MuiDrawer-paper':{
          backgroundColor: theme.palette.background.paper,
          backgroundImage: 'none',
          borderBottom: theme.palette.divider + ' solid 1px',
        },
        '& .MuiDrawer-paperAnchorBottom':{
          bottom:56,
        },
        display: { md: 'none', sm: 'block' } ,
      }}

      onClose = {onClose}
    >
      <DialogTitle sx={{
        display:'flex',
        p:theme.spacing(1,2,1,3),
        alignItems: 'center',
        color: theme.palette.text.primary,
      }}>
        <Typography component ='div' variant = 'subtitle2'>
          { intl.get('more') }
        </Typography>
        <Box sx={{flex:1}}></Box>
        <IconButton aria-label="theme" size="large" color = "inherit" 
          sx={{
            '&:hover':{
              color:theme.palette.text.primary,
            }
          }}
          onClick={handleThemeSetteings}
        >
          <SvgIcon>
            <path fill="currentColor" d="M19,19L12,11V19H5L12,11V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
          </SvgIcon>
        </IconButton>        
        <IconButton aria-label="delete" size="small" color = "inherit" 
          sx={{
            '&:hover': {
              color:theme.palette.text.primary,
            },
            mr: 1,
          }}
        >
          <Settings />
        </IconButton>
        <IconButton size="small" color = "inherit">
          <Avatar alt="User avatar" src="/static/images/avatar.jpg" sx={{ width: 24, height: 24 }} />
        </IconButton>        
      </DialogTitle>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1.6,
        }}
      >
        {
          modules.map((module,index)=>{
            return (
              <BottomMoreNavigationItem 
                key={module.title + index} 
                module = {module}
                onClick = {onClose}
              />
            )
          })
        }
      </Box>      
    </Drawer>
  )
}