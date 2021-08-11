import * as React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme, InputBase, InputAdornment, SvgIcon, IconButton, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ComposeButton } from '../ComposeButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {MailsBoard} from '../MailsBoard'
import intl from 'react-intl-universal';
import { CustomerLayout } from './CustomerLayout';
import { CustomerMailBoxDrawerContent } from './CustomerMailBoxDrawerContent';
import { observer } from 'mobx-react';
import { useCustomerMailsStore } from '../store';

export const CustomerBoard = observer(()=>{
  const theme = useTheme();
  const mailStore = useCustomerMailsStore();

  const toolbar = (
    <>
      <InputBase
        sx={{ ml: 0, fontSize: '0.8rem'}}
        placeholder={
          intl.get('search-email')
        }
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{color:theme.palette.text.secondary}} />
          </InputAdornment>
        }
        inputProps={{ 
          'aria-label': '搜索邮件',
        }}
      />
      <Box sx={{flex:1,width:0}}/>
      <IconButton color = 'inherit'>
        <SvgIcon >
          <path fill="currentColor" d="M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z" />
        </SvgIcon>
      </IconButton>
      <IconButton color = 'inherit'>
        <SvgIcon >
          <path fill="currentColor" d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" />
        </SvgIcon>
      </IconButton>

      <IconButton color = 'inherit' sx={{display:{lg:'flex', md:'none', sm:'none', xs:'none'}}}>
        <SvgIcon>
          <path fill="currentColor" d="M13,5H21V19H13V5M3,5H11V7H3V5M3,11V9H11V11H3M3,19V17H11V19H3M3,15V13H11V15H3Z" />
        </SvgIcon>
      </IconButton>
   
    </>
  )

  const toolbar2 = (
    <>
      <FormControlLabel 
        control={<Checkbox indeterminate />} 
        label={ 
          <Typography sx={{
            fontSize:'0.85rem'
          }}>
            {intl.get('select-all')}
          </Typography>
        } 
      />

      <Typography 
        sx={{
          color:theme.palette.text.secondary,
          fontSize:'0.8rem'
        }}>
        {mailStore.selectedMailIds.length + intl.get('selected')}
      </Typography>
      <Box
        sx={{
          flex:1,
        }}
      >
      </Box>
      <IconButton color="inherit" size = "small">
        <SvgIcon fontSize = "medium">
          <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
        </SvgIcon>
      </IconButton>                     
      <IconButton color="inherit" size = "small">
        <SvgIcon fontSize = "medium">
          <path fill="currentColor" d="M11,9.8V10.7L12.7,10.9C15.3,11.3 17.2,12.3 18.6,13.6C16.9,13.1 15.1,12.8 13,12.8H11V14.1L8.8,12L11,9.8M13,5L6,12L13,19V14.9C18,14.9 21.5,16.5 24,20C23,15 20,10 13,9M7,8V5L0,12L7,19V16L3,12" />
        </SvgIcon>
      </IconButton>     
      <IconButton color="inherit">
        <SvgIcon>
          <path fill="currentColor" d="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z" />
        </SvgIcon>
      </IconButton>                  
      <IconButton color="inherit">
        <SvgIcon sx={{width:18, height:18}}>
          <path fill="currentColor" d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z" />
        </SvgIcon>
      </IconButton>                  
      <IconButton color="inherit" size = "small">
        <SvgIcon fontSize = "small">
          <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
        </SvgIcon>
      </IconButton>                    

    </>
  );

  return (
    <CustomerLayout
      drawer = {
        <>
          <Box 
            sx = {{
              p: theme.spacing(2),
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ComposeButton />
          </Box>
          <CustomerMailBoxDrawerContent />
        </>
      }
      defualtDrawerWidth = {200}
      toolbar = {
        mailStore.selectedMailIds.length > 0
        ? toolbar2
        : toolbar
      }
    >
      <MailsBoard/>
    </CustomerLayout>
  );
})
