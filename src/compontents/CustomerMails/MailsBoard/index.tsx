import { Box } from "@material-ui/core"
import { HOVER_SCROLL_BAR } from "../../../util/consts"
import { MailList } from "./MailList"

export const MailsBoard = (props:{
})=>{

  return(
    <Box sx={{
      flex:1, 
      display:'flex', 
      flexFlow: 'column', 
      overflowY: 'overlay' as any, 
      p: 0,
      ...HOVER_SCROLL_BAR,
    }}>
      <MailList/>
    </Box>
  )
}