import { Menu, MenuItem, useTheme } from "@material-ui/core";
import { Box, IconButton, SvgIcon, Typography } from "@material-ui/core"
import { observer } from "mobx-react";
import React from "react";
import { Customer } from "../../../entity-interface/Customer";
import { useCustomerMailsStore } from "../store";
import { StyledTreeItem } from "./StyledTreeItem";

export const CustomerNode = observer((
  props:{
    customer: Customer,
    onSelect: ()=>void,
  }
)=>{
  const {customer, onSelect} = props;
  const customerMailsStore = useCustomerMailsStore();
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  
  const theme = useTheme();

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleClick = ()=>{
    customerMailsStore.setSelectedCustomer(customer);
    customerMailsStore.closeCustomerTreeOnMobile();
    onSelect();
  }

  return (
    <>
      <StyledTreeItem nodeId={customer.id?.toString()||''} 
        label={
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 0.5, 
              pr: 0, 
              pl:0, 
              ml: -0.5, 
              color: customer.color,
            }}
            style={{ cursor: 'context-menu' }}
            onContextMenu={handleContextMenu}
            onClick = {handleClick}
          >
            <SvgIcon color="inherit" sx={{ mr: 1 }}>
              <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z" />
            </SvgIcon>
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {customer.name}
            </Typography>
            <Box sx={{display:'flex'}}>
              {
                customer.comments && customer.comments.length > 0 &&
                <IconButton size="small"
                  sx = {{
                    color: customer.color || theme.palette.text.secondary,
                  }}
                >
                  <SvgIcon fontSize='small'>
                    <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                  </SvgIcon>
                </IconButton>              
              }

              {
                customer.reminds && customer.reminds.length > 0 &&
                <IconButton size="small"
                  sx = {{
                    color: customer.color || theme.palette.text.secondary,
                  }}
                >
                  <SvgIcon fontSize='small'>
                    <path fill="currentColor" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
                  </SvgIcon>
                </IconButton>
              }

            </Box>
          </Box>
        } 
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z" />
          </SvgIcon>
          颜色
        </MenuItem>        
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
          </SvgIcon>
          标注
        </MenuItem>        
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
          </SvgIcon>          
          提醒
        </MenuItem>        
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
          </SvgIcon>              
          编辑
        </MenuItem>        
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M18,21L15,18L18,15V17H22V19H18V21M13,18C13,18.71 13.15,19.39 13.42,20H2V17C2,14.79 5.58,13 10,13C11,13 11.96,13.09 12.85,13.26C13.68,13.42 14.44,13.64 15.11,13.92C13.83,14.83 13,16.32 13,18M4,17V18H11C11,16.96 11.23,15.97 11.64,15.08L10,15C6.69,15 4,15.9 4,17M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,6A2,2 0 0,0 8,8A2,2 0 0,0 10,10A2,2 0 0,0 12,8A2,2 0 0,0 10,6Z" />
          </SvgIcon>  
          分发
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M3,10H6V7H3V10M5,5H8V2H5V5M8,10H11V7H8V10M17,1L12,6H15V10H19V6H22L17,1M7.5,22C6.72,22 6.04,21.55 5.71,20.9V20.9L3.1,13.44L3,13A1,1 0 0,1 4,12H20A1,1 0 0,1 21,13L20.96,13.29L18.29,20.9C17.96,21.55 17.28,22 16.5,22H7.5M7.61,20H16.39L18.57,14H5.42L7.61,20Z" />
          </SvgIcon>            
          放入公海
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SvgIcon sx={{mr:2}}>
            <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
          </SvgIcon>  
          删除
        </MenuItem>
      </Menu>
    </>
  )
})