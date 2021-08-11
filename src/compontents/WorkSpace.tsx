import { Box, CssBaseline } from "@material-ui/core"
import { Redirect, Route, Switch } from "react-router-dom"
import { CustomerMails } from "./CustomerMails"
import { Customers } from "./Customers"
import { Dashbord } from "./Dashbord"
import { LinkedIn } from "./LinkedIn"
import { MangeModules } from "./MangeModules"
import { NavDrawer } from "./NavDrawer"
import { Notifications } from "./Notifications"
import { PublicSea } from "./PublicSea"

export const WorkSpace = ()=>{
  return (
    <Box sx={{ display: 'flex', height:'100%', width: '100%'}}>
      <CssBaseline />
      <NavDrawer />
      <Box component="main" sx={{ flex: 1, p: 0, height: '100%', width:0, display: 'flex'}}>
        <Switch> 
          <Route path={ '/workspace/dashbord' } component={Dashbord}></Route>
          <Route path={ '/workspace/notifications' } component={Notifications}></Route>
          <Route path={ '/workspace/customer-emails' } component={CustomerMails}></Route>
          <Route path={ '/workspace/customers' } component={Customers}></Route>
          <Route path={ '/workspace/linkedin' } component={LinkedIn}></Route>
          <Route path={ '/workspace/public-sea' } component={PublicSea}></Route>
          <Route path={ '/workspace/manage-modules' } component={MangeModules}></Route>
          <Redirect to={ '/workspace/customer-emails' } from='/workspace' /> 
        </Switch>
      </Box>
    </Box>
  )
}