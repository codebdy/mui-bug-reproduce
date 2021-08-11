import { Box, Typography } from "@material-ui/core"
import { NodeData } from "./NodeData"
import { StyledTreeItem } from "./StyledTreeItem"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { NodeItem } from "./NodeItem";
import { useCustomerMailsStore } from "../store";

export const FolderNode = (props:{
  folder:NodeData,
  onSelect: ()=>void,
})=>{
  const {folder, onSelect} = props;
  const customerMailsStore = useCustomerMailsStore();
  const handleClick = ()=>{
    customerMailsStore.setSelectedCustomer(undefined);
    onSelect();
  }
  return (
    <StyledTreeItem 
      nodeId={folder.id + folder.name}
      label={
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            p: 0.5, 
            pr: 0,
          }}
          onClick = {handleClick}
        >
          <Box component={FolderOpenIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {folder.name}
          </Typography>
        </Box>
      }
    >
        {
          folder.children?.map(node=>{
            return <NodeItem onSelect={onSelect} key = {node.id} node = {node} />
          })
        }
    </StyledTreeItem>
  )
}