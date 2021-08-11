import { ThemeOptions } from "@material-ui/core";

export const LOGIN_URL = '/login';
export const WORKSPACE_BASE = '/workspace/';

export const MINI_DRAWER_SIZE = 9;
export const MODE_DARK = 'dark';
export const MODE_LIGHT = 'light';

export const PRIMARY_COLOR = '#7367f0';

export const PREDEFINED_PRIMARYS =['#7367f0','#82868b','#ea5455','#ff9f43', '#00cfe8', '#000', '#fff'];

export const PREDEFINED_THEMES : {[name:string]:ThemeOptions} = {
  'fine-blue':{
    palette: {
      mode: 'dark',
      primary:{
        main: PRIMARY_COLOR,
      },
      background:{
        default:'#161d31',
        paper:'#283046'
      },
      text:{
        primary: '#d0d2d6',
        secondary: '#989ca9',
      },
      divider: '#3b4253',
    },
    typography:{
      fontSize: 13,
    }
  },
  'fine-light':{
    palette: {
      mode: 'light',
      primary: {
        main: PRIMARY_COLOR,
      },
      background: {
        default: '#f9f9f9',
        paper: '#ffffff'
      },
      text:{
        primary: '#5c5f61',
        secondary: '#baa4b0',
      },
      divider: '#ebe9f1',
    },
    typography:{
      fontSize: 13,
    }
  },
  'simple-black':{
    palette: {
      mode: 'dark',
    },
    typography:{
      fontSize: 13,
    }
  },
  'simple-white':{
    palette: {
      mode: 'light',
    },
    typography:{
      fontSize: 13,
    }
  }
}


export const HOVER_SCROLL_BAR = {
  '&::-webkit-scrollbar':{
    lg: {
      display: 'none',
    }
  }, 
  '&:hover':{
    '&::-webkit-scrollbar':{
      lg:{
        display: 'block',
      }
    }
  },
}