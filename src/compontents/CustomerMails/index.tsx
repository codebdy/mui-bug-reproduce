import * as React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { observer } from 'mobx-react';
import { InputAdornment, useTheme, Paper, OutlinedInput } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { CustomerBoard } from './CustomerBoard';
import { CustomerMailsLayout } from './CustomerMailsLayout';
import { CustomerTree } from './CustomerTree';
import intl from 'react-intl-universal';
import { ComposeFadeButton } from './ComposeFadeButton';
import { CustomerMailsStore, CustomerMailsStoreProvider } from './store';
import { ToolbarContent } from './ToolbarContent';

export const CustomerMails = observer(() => {
  const theme = useTheme();
  const [customerMailsStore] = React.useState(new CustomerMailsStore());
  const drawer = (
    <>
      <Toolbar>
        <OutlinedInput 
          size = "small" 
          sx={{
            borderRadius: '18px',
            height: '36px',
            pl: 1,

          }} 
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder={intl.get('search-customer')}
        />
      </Toolbar>
      <CustomerTree />
    </>
  );

  const content = (
    <Box 
      sx={{
        flex:1, 
        display:'flex', 
        height: '0',
        width: '100%',
      }}
    >
      <Paper 
        variant = 'outlined'
        sx = {{
          m:{
            md:theme.spacing(3)
          },
          flex:1, 
          width:'0',
          borderRadius:{
            md:'10px',
            sm: 0,
            xs: 0,
          },
          display: 'flex',
        }}
      >
        <CustomerBoard />
      </Paper>
    </Box>
  ) 

  return (
    <CustomerMailsStoreProvider value = {customerMailsStore}>
      <CustomerMailsLayout
        drawer = {drawer}
        toolbar = {
          <ToolbarContent />
        }
        toolbarProps = {{
          sx:{
            borderBottom: theme.palette.divider + ' solid 1px',
          }
        }}
        foldAt = 'lg'
      >
        {
          content
        }
        <ComposeFadeButton />
      </CustomerMailsLayout>
    </CustomerMailsStoreProvider>
  );
})
