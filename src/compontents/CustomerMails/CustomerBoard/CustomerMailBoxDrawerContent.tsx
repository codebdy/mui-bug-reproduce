import { Box, List, ListItem, ListItemIcon, SvgIcon, Typography, useTheme } from "@material-ui/core";
import { HOVER_SCROLL_BAR } from "../../../util/consts";
import ListItemText from '@material-ui/core/ListItemText';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { orange } from "@material-ui/core/colors";
import intl from 'react-intl-universal';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { CustomerContactMailBox } from "./CustomerContactMailBox";
import { SENT_ICON } from "./consts";
import { observer } from "mobx-react";
import { useCustomerMailsStore } from "../store";


export const CustomerMailBoxDrawerContent = observer(()=>{
  const theme = useTheme();
  const mailStore = useCustomerMailsStore();

  return (
    <>
      <Box 
        sx={{ flex: 1, overflowY: 'auto', ...HOVER_SCROLL_BAR}}
      >
        <List>
          <Typography 
            variant = "subtitle2"
            sx={{
              ml:2,
              color: theme.palette.text.secondary,
            }}
          >
            {intl.get('common-folders')}
          </Typography>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <FolderOpenIcon />
            </ListItemIcon>
            <ListItemText primary={
              <span>
                所有未读 
                <Box component='span' sx={{color:orange[800], ml:0.5}}>(94)</Box>
              </span>
            } 
            />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary='置顶邮件' />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <LocalOfferOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='标签邮件' />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <AccessTimeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='定时发送' />
          </ListItem>
        </List>
        <List>
          <Typography 
            variant = "subtitle2"
            sx={{
              ml:2,
              color: theme.palette.text.secondary,
            }}
          >
            {intl.get('mail-box')}
          </Typography>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <EmailOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='收件箱' />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <CreateOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='草稿箱' />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <SvgIcon sx={{transform:'rotate(-35deg)'}}>
                {SENT_ICON}
              </SvgIcon>
            </ListItemIcon>
            <ListItemText primary='已发送邮件' />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <DeleteOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='已删除邮件' />
          </ListItem>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
            }}
          >
            <ListItemIcon
              sx = {{
                color: theme.palette.text.primary,
              }}              
            >
              <SvgIcon>
                <path fill="currentColor" d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M11,15H13V17H11V15M11,7H13V13H11V7" />
              </SvgIcon>
            </ListItemIcon>
            <ListItemText primary='垃圾箱' />
          </ListItem>
        </List>
        <List>
          {
            mailStore.selectedCustomer &&
              <Typography 
              variant = "subtitle2"
              sx={{
                ml:2,
                color: theme.palette.text.secondary,
              }}
            >
              客户箱
            </Typography>
          }

          {
            mailStore.selectedCustomer?.contacts?.map((contact)=>{
              return (
                <CustomerContactMailBox key={contact.id} contact = {contact} />
              )
            })
          }
        </List>        
      </Box>    
    </>
  )
})