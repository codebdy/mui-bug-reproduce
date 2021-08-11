import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, SvgIcon, useTheme } from '@material-ui/core';
import { CONTACT_ICON, SENT_ICON } from './consts';
import { Contact } from '../../../entity-interface/Contact';

export const CustomerContactMailBox = (props:{
  contact: Contact,
})=>{
  const {contact} = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem 
        button 
        onClick={handleClick}
        sx = {{
          color: theme.palette.text.primary,
        }}
      >
        <ListItemIcon
          sx = {{
            color: 'inherit',
            minWidth: '30px',
          }}   
        >
          <SvgIcon>
            {CONTACT_ICON}
          </SvgIcon>
        </ListItemIcon>
        <ListItemText primary={contact.abbr || contact.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem 
            button 
            sx = {{
              color: theme.palette.text.primary,
              pl: 4,
            }}
          >
            <ListItemIcon
              sx = {{
                color: 'inherit',
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
              pl: 4
            }}
          >
            <ListItemIcon
              sx = {{
                color: 'inherit',
              }}              
            >
              <SvgIcon sx={{transform:'rotate(-35deg)'}}>
                {SENT_ICON}
              </SvgIcon>
            </ListItemIcon>
            <ListItemText primary='已发送邮件' />
          </ListItem>
        </List>
      </Collapse>    
    </>
  )
}