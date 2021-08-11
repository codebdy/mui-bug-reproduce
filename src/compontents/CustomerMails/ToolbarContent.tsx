import { Avatar, Box, IconButton, SvgIcon, Tooltip, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { observer } from "mobx-react";
import intl from 'react-intl-universal';
import { CUSTOMER_MAIL_BOX_FOLD_AT } from "./consts";
import { CustomerMailBoxDrawer } from "./CustomerBoard/CustomerMailBoxDrawer";
import { ReceiveButton } from "./ReceiveButton";
import { useCustomerMailsStore } from "./store";

export const ToolbarContent = observer(()=>{
  const theme = useTheme();
  const customerMailsStore = useCustomerMailsStore();
  const showTitle = !useMediaQuery(theme.breakpoints.down(CUSTOMER_MAIL_BOX_FOLD_AT));

  const handleAvatarClick = ()=>{
    customerMailsStore.openMailBoxOnMobile();
  }

  return (
    <>
      {
        customerMailsStore.selectedCustomer && 
        <>
          <Avatar 
            sx={{
              mr:1, 
              width: 28, 
              height: 28, 
              color: theme.palette.text.primary,
              backgroundColor: customerMailsStore.selectedCustomer.color,
            }}
            onClick={handleAvatarClick}
          >{customerMailsStore.selectedCustomer.name.substr(0,1)}</Avatar>
          {
            showTitle &&
            <Typography variant="subtitle1" component="div" 
              sx={{
                alignItems:'center', 
                mr:2,
                color: customerMailsStore.selectedCustomer.color,
              }}
            >
              {customerMailsStore.selectedCustomer.name}
            </Typography>
          }

          <IconButton sx={{color:theme.palette.text.primary}}>
            <SvgIcon>
              <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
            </SvgIcon>
          </IconButton>
          <IconButton sx={{color:theme.palette.text.primary}}>
            <SvgIcon>
              <path fill="currentColor" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
            </SvgIcon>
          </IconButton>
        </>
      }

      {
        !customerMailsStore.selectedCustomer && customerMailsStore.currentAccount &&
        <>
          
          <Typography variant="subtitle1" component="div" 
            sx={{
              alignItems:'center', 
              mr:2,
            }}
          >
            {customerMailsStore.currentAccount.name}
          </Typography>
        </>
      }


      <Box sx={{flex:1}}></Box>
      <ReceiveButton />
      <Tooltip title = {intl.get('more-settings')} arrow>
        <IconButton sx={{
          color: theme.palette.text.primary,
        }}>
          <SvgIcon>
            <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
          </SvgIcon>
        </IconButton>
      </Tooltip>

      <CustomerMailBoxDrawer/>
    </>
  )
})