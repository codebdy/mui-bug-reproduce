import React, { useState } from 'react';
import { 
  Grid, 
  Typography, 
  InputAdornment, 
  TextField, 
  FormControl, 
  IconButton, 
  InputLabel, 
  OutlinedInput, 
  Checkbox, 
  FormControlLabel, 
  ThemeProvider,
  Button,
  createTheme,
  styled, 
} from '@material-ui/core';
import background from "../assets/img/background1.jpg";
import leftImage from "../assets/img/login.png";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import intl from "react-intl-universal";
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import { PREDEFINED_THEMES } from '../util/consts';

const Form = styled('form')(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
    backgroundImage:`url(${background})`,
    backgroundPosition:' 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
);

export const Login = observer(()=>{
  const [values, setValues] = useState<any>({
    account: 'demo',
    password: 'demo',
    showPassword: false,
  });
  const theme = createTheme(PREDEFINED_THEMES['fine-light']);
  const [rememberMe, setRememberMe] = useState(true);
  const history = useHistory();

  const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setRememberMe(event.target.checked);
  }

  const handleLogin = (event?: React.FormEvent<HTMLFormElement>)=>{
    history.push('/workspace');
    event && event.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit = {handleLogin}>
        
          <Grid container justifyContent = "center">
            <Grid 
              container 
              item md={7} 
              sm={8}
              xs={10} 
              alignContent = "stretch"
              sx={{
                background: "#FFF",
                height:'60vh',
                minHeight:'480px',
                boxShadow: '0px 11px 14px -7px rgb(0 0 0 / 20%), 0px 23px 36px 3px rgb(0 0 0 / 6%), 0px 9px 44px 8px rgb(0 0 0 / 5%)',
              }}
              onKeyUp = {e=>{
                if(e.key === 'Enter') {
                  handleLogin()
                }
              }}
            >
              <Grid item md={6} sx={{
                background:"#f2f4f4",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flex:1,
                height:'100%',
              }}>
                <img src={leftImage} alt="" width="100%"/>
              </Grid>
              <Grid container item lg={6} 
                justifyContent = "space-between" 
                alignItems="flex-start" 
                alignContent = "flex-start"
                spacing = {3}
                sx={{
                  p: theme.spacing(4)
                }}
              >
                <Grid item xs={12}>
                  <h2 style={{fontSize:'20px'}} >{intl.get('login')}</h2>
                  <Typography variant="subtitle1" color="textSecondary">{intl.get('login-tip')}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="name"
                    label={intl.get('user-name')}
                    value={values.account}
                    variant="outlined"
                    onChange={handleChange('account')}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant = "outlined" required>
                    <InputLabel htmlFor="standard-adornment-password" style={{background:"#fff",padding:"0 8px"}}>{intl.get('password')}</InputLabel>
                    <OutlinedInput
                      id="standard-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  alignItems:"center",
                }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rememberMe}
                          name="rememberMe"
                          color="primary"
                          onChange={handleRememberMe}
                        />
                      }
                      label={<Typography variant="subtitle1" color="textSecondary"> {intl.get('remember-me')}</Typography>}
                    />
                    <a href="#forgot"> {intl.get('forgot-password')}</a>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="primary" size = "large" 
                    sx={{fontSize:'1.2rem'}}
                    type = "submit"
                  >
                    {intl.get('login')}
                  </Button>
                </Grid>            
              </Grid>
                
            </Grid>

          </Grid>
      </Form>
    </ThemeProvider>
  )
})
