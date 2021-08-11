import { Avatar, Box, IconButton, SvgIcon } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import { useAppStore } from "../../store/AppStore";
import { Tooltip } from "./NavDrawerListItem";
import { useHoverButtonColor } from "./useHoverButtonColor";

export const NavDrawerSettingButtons = ()=>{
  const appStore = useAppStore();
  const handleThemeSetteings = ()=>{
    appStore.backupTheme();
    appStore.openThemeSettings();
  }

  const hoverButtonColor = useHoverButtonColor();
  return (
    <Box sx={{
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      pb:1,
    }}>
      <Tooltip title={'主题'} arrow placement="right">
        <IconButton aria-label="theme" size="large" color = "inherit" 
          sx={{
            '&:hover':{
              color:hoverButtonColor,
            }
          }}
          onClick={handleThemeSetteings}
        >
          <SvgIcon>
            <path fill="currentColor" d="M19,19L12,11V19H5L12,11V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Tooltip title={'设置'} arrow placement="right">
        <IconButton aria-label="delete" size="large" color = "inherit" 
          sx={{
            '&:hover':{
              color: hoverButtonColor,
            }
          }}
        >
          <Settings />
        </IconButton>
      </Tooltip>

      <Tooltip title={'账号管理'} arrow placement="right">
        <IconButton sx={{mt:1}} size="large">
          <Avatar alt="User avatar" src="/static/images/avatar.jpg" sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Tooltip>            
    </Box>            

  )
}