import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Box, Paper, SvgIcon, useTheme } from '@material-ui/core';
import { MODULES } from '../../data/modules';
import { BottomMoreNavigation } from './BottomMoreNavigation';
import _ from 'lodash';
import { useHistory, useParams } from 'react-router';
import { WORKSPACE_BASE } from '../../util/consts';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import intl from 'react-intl-universal';

const MORE_BUTTON_VALUE = 'more';

export const BottomDrawer = () => {
  const [moreOpen, setMoreOpen] = React.useState(false);
  const theme = useTheme();

  const history = useHistory();

  /**
   * 用BottomNavigationAction，有时会响应两次
   * @param event 
   */
  const toggleOpenMore = (event:React.MouseEvent)=>{
    setMoreOpen(!moreOpen);
    console.log('click more button')
    event.stopPropagation();
  }

  const indexCounts = 4;
  const indexItems =  _.slice(MODULES, 0, indexCounts);

  const handleChange = (event:React.SyntheticEvent<Element, Event>, newValue:any)=>{
    if(newValue !== MORE_BUTTON_VALUE){
      history.push(WORKSPACE_BASE + newValue);      
    }
  }

  const params: any = useParams();

  let value = params.moduleId;
  if(!indexItems.find(module=>module.moduleId === value)){
    value = MORE_BUTTON_VALUE;
  }

  const handleCloseMore = ()=>{
    setMoreOpen(false);
  }

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        display: { md: 'none', sm: 'block' } ,
        zIndex: theme.zIndex.drawer + 1,
      }} 
      elevation={moreOpen ? 0 : 6}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        onClick = {handleCloseMore}
      >
        {
         indexItems.map((module, index) => {
            return (
              <BottomNavigationAction 
                key={module.title}
                label={module.title} 
                icon={
                  <Box 
                    dangerouslySetInnerHTML={{__html: module.icon}}
                    sx={{
                      display:'flex',
                      alignItems:'center',
                    }}
                  >
                  </Box>
                }
                value = {module.moduleId} 
              />
            )
          })
        }

        {/* 解决onClick响应两次的bug，不使用BottomNavigationAction */}
        {/*<Box onClick = {toggleOpenMore}
          sx ={{
            fontSize: '0.7rem',
            display: 'flex',
            flex: '1',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color:value === MORE_BUTTON_VALUE? theme.palette.primary.main :theme.palette.text.secondary,
            pl:1,
            pr:1,
          }}
        >
          <MoreHorizIcon />
          <Box>
            {intl.get('more')}
          </Box>
        </Box>*/}
        <BottomNavigationAction label={intl.get('more')}
          icon={
            <SvgIcon>
              <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
            </SvgIcon>
          } 
          onClick = {toggleOpenMore} 
          value = {MORE_BUTTON_VALUE}
        />
      </BottomNavigation>
      <BottomMoreNavigation modules = {_.drop(MODULES, indexCounts)} open = {moreOpen} onClose = {handleCloseMore} />
    </Paper>
  );
}
