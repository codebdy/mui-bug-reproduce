import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { LOGIN_URL } from './util/consts';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './compontents/Login';
import { WorkSpace } from './compontents/WorkSpace';
import { useIntl } from './util/useIntl';
import Loading from './compontents/common/Loading';
import { useAppStore } from './store/AppStore';
import { ThemeSettings } from './compontents/ThemeSettings';

const App = observer(() => {
  const appStore = useAppStore();
  const theme = createTheme(appStore.themeOptions);

  const [langLoading, error] = useIntl();

  error && console.error(error);

  return (
    <ThemeProvider theme={theme}>
      {
        langLoading
        ? <Loading />
        : <>
            <Switch> 
              <Route path={ LOGIN_URL } component={Login}></Route>
              <Route path="/workspace/:moduleId?" component={WorkSpace}></Route>
              <Redirect to={ '/workspace' } from='/' /> 
            </Switch>
            <ThemeSettings />
          </>
      }
    </ThemeProvider>
  );
})

export default App;
