import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { createTheme, SvgIcon, ThemeProvider } from '@material-ui/core';
import { HOVER_SCROLL_BAR, MINI_DRAWER_SIZE, MODE_LIGHT } from '../../util/consts';
import { MODULES } from '../../data/modules';
import { observer } from 'mobx-react';
import { useAppStore } from '../../store/AppStore';
import { BottomDrawer } from './BottomDrawer';
import { StyledDrawer } from './StyledDrawer';
import { NavDrawerListItem } from './NavDrawerListItem';
import { NavDrawerSettingButtons } from './NavDrawerSettingButtons';

const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  color: theme.palette.mode === MODE_LIGHT ? theme.palette.primary.main : "#fff",
  ...theme.mixins.toolbar,
}));

export const NavDrawer = observer(() => {
  const appStore = useAppStore();
  const theme = createTheme(appStore.miniDrawerThemeOptions);

  return (

      <ThemeProvider theme={theme}>
        <StyledDrawer 
          variant="permanent" 
          open = {true}
          sx={{
            width:theme.spacing(MINI_DRAWER_SIZE),
            display: { md: 'block', xs: 'none' },
            '& .MuiDrawer-paper':{
              height: '100%',
              borderRight: theme.palette.divider + ' solid 1px',
            },
            '& ::-webkit-scrollbar':{
              lg:{
                display: 'none',
                width: '0.2rem',
                height: '0.2rem',          
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
          }}
        >
          <Box
            sx = {{
              height:'100%',
              display: 'flex',
              flexFlow: 'column',
            }}
          >
            <Logo>
              <SvgIcon fontSize='large' sx={{
                '&.MuiSvgIcon-fontSizeLarge':{
                  fontSize: '40px',
                }
              }} >
                <defs>
                  <linearGradient id="logo_color" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3a29e6"/>
                      <stop offset="90%" stopColor="#f155c3"/>
                      <stop offset="100%" stopColor="#3a29e6"/>
                  </linearGradient>
                </defs>
                <path style={{fill:'url(#logo_color)'}} d="M23 11.5L19.95 10.37C19.69 9.22 19.04 8.56 19.04 8.56C17.4 6.92 14.75 6.92 13.11 8.56L11.63 10.04L5 3C4 7 5 11 7.45 14.22L2 19.5C2 19.5 10.89 21.5 16.07 17.45C18.83 15.29 19.45 14.03 19.84 12.7L23 11.5M17.71 11.72C17.32 12.11 16.68 12.11 16.29 11.72C15.9 11.33 15.9 10.7 16.29 10.31C16.68 9.92 17.32 9.92 17.71 10.31C18.1 10.7 18.1 11.33 17.71 11.72Z" />
              </SvgIcon>
            </Logo>
          
            <Box
                sx={{
                  flex:1,
                  overflowY: 'overlay' as any, 
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexFlow: 'column',
                  ...HOVER_SCROLL_BAR,
                }}
              >
              <List sx={{
                display:'flex',
                flexFlow:'column',
                alignItems:'center',
              }}>
                {
                  MODULES.map((module, index) => {
                    return (
                        <NavDrawerListItem 
                          key={module.title} 
                          module = {module} />   
                    )
                  })
                }
              </List>
              <NavDrawerSettingButtons />
            </Box>          
          </Box>
        </StyledDrawer>
        <BottomDrawer/>
      </ThemeProvider>
  );
})
