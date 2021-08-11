import {  Box } from "@material-ui/core";
import { Drawer, useTheme } from "@material-ui/core";



export const BottomMoreNavigation = (
  props:{
    open:boolean,
    onClose:()=>void,
  }
)=>{
  const {open, onClose} = props;
  const theme = useTheme();

  
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
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1.6,
        }}
      >
      </Box>      
    </Drawer>
  )
}