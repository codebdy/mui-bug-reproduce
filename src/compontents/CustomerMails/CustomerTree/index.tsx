import * as React from 'react';
import Box from '@material-ui/core/Box';
import TreeView from '@material-ui/lab/TreeView';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { HOVER_SCROLL_BAR } from '../../../util/consts';
import { CUSTOMERS } from '../../../data/customers';
import { StyledTreeItem } from './StyledTreeItem';
import { NodeItem } from './NodeItem';
import { NodeData } from './NodeData';
import { AccountData, useCustomerMailsStore } from '../store';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

export const CustomerTree = observer(() => {
  const customerMailsStore = useCustomerMailsStore();

  const handleSelect = (account: AccountData)=>{
    customerMailsStore.selectAccount(account);
  }

  const handleAccountClick =  (account: AccountData)=>{
    handleSelect(account);
    customerMailsStore.setSelectedCustomer(undefined);
  }

  useEffect(()=>{
    customerMailsStore.selectAccount(CUSTOMERS[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const accountNodeId = customerMailsStore.currentAccount ? (customerMailsStore.currentAccount.id.toString() + customerMailsStore.currentAccount.name) :''
  
  return (
    <TreeView
      aria-label="customer tree"
      defaultExpanded={[]}
      selected = { [customerMailsStore.selectedCustomer?.id?.toString()||'', accountNodeId] }
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ 
        flex: 1, 
        overflowY: 'overlay' as any, 
        ...HOVER_SCROLL_BAR,
        '& .MuiTreeItem-label':{
          pl: 0,
          ml:{lg:-0.5},
        }
      }}
    >
      {
        CUSTOMERS.map(account=>{
          return(
            <StyledTreeItem 
              key = {account.id}
              nodeId={account.id + account.name}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                  <Box component={AccountCircleIcon} color="inherit" sx={{ mr: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                    {account.name}
                  </Typography>
                </Box>
              }
              onClick = {(e)=>{
                handleAccountClick(account);
              }}
            >
              {
                account.children.map(node=>{
                  return <NodeItem key = {node.id} node = {node as NodeData} onSelect = {()=>handleSelect(account)} />
                })
              }
            </StyledTreeItem>
          )
        })
      }
    </TreeView>
  );
})
