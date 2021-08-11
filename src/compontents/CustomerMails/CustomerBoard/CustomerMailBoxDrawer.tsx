import { Avatar, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { observer } from 'mobx-react';
import { CUSTOMER_MAIL_BOX_FOLD_AT } from '../consts';
import { useCustomerMailsStore } from '../store';
import { CustomerMailBoxDrawerContent } from './CustomerMailBoxDrawerContent';

export const CustomerMailBoxDrawer = observer(()=>{
  const customerMailsStore = useCustomerMailsStore();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(CUSTOMER_MAIL_BOX_FOLD_AT));

  const handleClose = ()=>{
    customerMailsStore.closeMailBoxOnMobile();
  }

  return (
    <>
      {
        matches &&
        <Drawer 
          open = {customerMailsStore.showMailBoxOnMobile} 
          onClose = {handleClose}
          sx = {{
            zIndex: theme.zIndex.drawer + 2,
          }}
        >
          <Toolbar>
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
                >{customerMailsStore.selectedCustomer?.name.substr(0,1)}</Avatar>
                  <Typography variant="subtitle1" component="div" 
                  sx={{
                    alignItems:'center', 
                    mr:2,
                    color: customerMailsStore.selectedCustomer.color,
                  }}
                >
                  {customerMailsStore.selectedCustomer.name}
                </Typography>
              </>
            }

          </Toolbar>
          <CustomerMailBoxDrawerContent />
        </Drawer>        
      }
    </>
  )
})