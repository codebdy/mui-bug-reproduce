import * as React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import MuiTooltip, { TooltipProps, tooltipClasses } from '@material-ui/core/Tooltip';
import { useHistory, useParams } from 'react-router-dom';
import { Module } from '../../data/Module';
import { Box, ListItemIcon } from '@material-ui/core';
import { WORKSPACE_BASE } from '../../util/consts';
import { useHoverButtonColor } from './useHoverButtonColor';
import { useHoverButtonBackcolor } from './useHoverButtonBackcolor';

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: theme.spacing(1.2, 2),
  },
}));

export function NavDrawerListItem(
  props: {
    module: Module
  }
) {
  const { module } = props;
  const history = useHistory();
  const theme = useTheme();
  const params: any = useParams();
  const selected = params.moduleId === module.moduleId;
  
  const handleClick = ()=>{
    history.push(WORKSPACE_BASE + module.moduleId);
  }

  const selectedHoverTextColor = useHoverButtonColor();
  const selectedHoverBackColor = useHoverButtonBackcolor();

  return (
    <Tooltip
      title={module.title}
      arrow
      placement="right"
    >
      <ListItem
        button
        sx={{
          width: '48px',
          minWidth: '48px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          mt: 0.5,
          mb: 0.5,
          borderRadius: '5px',
          backgroundColor: selected ? theme.palette.primary.main : 'inherit',
          color: selected
            ? (theme.palette.primary.main === '#fff' ? theme.palette.background.default : '#fff')
            : theme.palette.text.primary,
          '&:hover': {
            backgroundColor: selected ? selectedHoverBackColor : undefined,
            color: selected ? undefined : selectedHoverTextColor,
          },
        }}
        onClick = {handleClick}
      >
        <ListItemIcon 
          sx={{
            p: 0,
            minWidth:26,
            display:'flex',
            justifyContent: 'center',
            color: 'inherit',
          }}
        >
          <Box 
            dangerouslySetInnerHTML={{__html: module.icon}}
            sx={{
              display:'flex',
              alignItems:'center',
            }}
          >
          </Box>
          
        </ListItemIcon>
      </ListItem>
    </Tooltip>
  );
}
