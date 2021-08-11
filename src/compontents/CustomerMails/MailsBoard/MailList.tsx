import { Box } from "@material-ui/core"
import { observer } from "mobx-react";
import { MAILS } from "../../../data/mails";
import { useCustomerMailsStore } from "../store";
import { MailItem } from "./MailItem";

export const MailList = observer((props:{
})=>{
  const mailStore = useCustomerMailsStore();

  const handleSelectChange = (id:number, isSelected:boolean)=>{
    mailStore.toggleMailSelect(id, isSelected);
  }

  return(
    <Box 
      component={'ul'}
      sx={{
        listStyle:'none',
        display:'flex',
        flexFlow:'column',
        p:0,
        m:0,
        width: '100%',
      }}
    >
      {
        MAILS.map((mail, index)=>{
          return(
            <MailItem 
              key={mail.id} 
              mail={mail} 
              index ={index} 
              onSelectChange = {handleSelectChange}
              isSelected = {mailStore.isMailSelected(mail.id)}
            />
          )
        })
      }
    </Box>
  )
})