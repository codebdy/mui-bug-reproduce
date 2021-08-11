import { Avatar, Box, Checkbox, IconButton, SvgIcon, useMediaQuery, useTheme } from "@material-ui/core"
import { orange } from "@material-ui/core/colors";
import React from "react";
import { Mail } from "../../../entity-interface/Mail";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const MailActions = ()=>{
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
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
      <IconButton color="inherit" size = "small">
        <SvgIcon fontSize = "small">
          <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
        </SvgIcon>
      </IconButton>                    
      <IconButton color="inherit" size = "small">
        <SvgIcon fontSize = "small">
          <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
        </SvgIcon>
      </IconButton>
    </Box>
  )
}
export const MailItem = (props:{
  isSelected: boolean,
  mail: Mail,
  index: number,
  onSelectChange:(id:number, isSelected:boolean)=>void,
})=>{
  const {isSelected, mail, index, onSelectChange} = props;
  const [hover, setHover] = React.useState(false);
  const theme = useTheme();
  const showActions = !useMediaQuery(theme.breakpoints.down('lg'));
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    mail.id && onSelectChange(mail.id, event.target.checked);
  };

  return (
    <Box 
      component= {'li'}
      sx={{
        borderBottom: theme.palette.divider + ' solid 1px',
        p: theme.spacing(2, 3),
        pb: hover ? 1.3 : 1,
        pt: hover ? 1.7 : 2,
        display:'flex',
        flexFlow:'column',
        width:'100%',
        backgroundColor: index % 2 === 0 
          ? (theme.palette.mode === 'light' ? 'rgba(0,0,0, 0.025)' : 'rgba(0,0,0, 0.15)')
          : theme.palette.background.paper,
        transition: 'all 0.2s',
      }}
      onMouseOver = {()=>setHover(true)}
      onMouseLeave = {()=>setHover(false)}  
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          minHeight: theme.spacing(7),
          cursor: 'pointer',
        }}  
      >
        <Avatar sx={{  }}>OP</Avatar>
        <Box
            sx={{
              flex:1, 
              ml:1,
              justifyContent: 'center',
              display: 'flex',
              flexFlow: 'column',
              width: 0,
            }}
          >
            <Box
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Martin Foller &lt;info@rxdrag.com&gt;
            </Box>
            <Box
              sx={{
                opacity: 0.9,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {mail.subject}
            </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'flex-start',
            height:'100%',
          }}
        >
          <Box
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.8rem',
              display: 'flex',
              justifyContent: 'flex-end',
              pr: 1,
            }}
          >
            {
              mail.attachments &&
              <SvgIcon 
                sx={{
                  color:theme.palette.text.primary, 
                  mr:1,
                  transform: 'rotate(-40deg)',
                }}
              >
                <path fill="currentColor" d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />
              </SvgIcon>
            }
            9:08 PM
          </Box>
          {hover && showActions && <MailActions />}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: theme.palette.text.secondary,
          width: '100%',
        }}
      >
        <Checkbox 
          sx={{
            ml:-1.4,
          }} 
          value = {isSelected}
          checked = {isSelected}
          onChange={handleSelectChange}
        /> 

      <Checkbox
        sx={{
          '&.Mui-checked': {
            color: orange[500],
          },
        }}
        icon={
          <StarBorderIcon />
        }
        checkedIcon={
          <StarIcon/>
        }
      />
        
        <Box
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Dear marin, please seend me you acount number, I will trans
        </Box>
      </Box>
    </Box>

  )
}