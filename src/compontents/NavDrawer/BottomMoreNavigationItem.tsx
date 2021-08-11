import { useTheme } from "@material-ui/core";
import { Box } from "@material-ui/core"
import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { Module } from "../../data/Module";
import { WORKSPACE_BASE } from "../../util/consts";


export const BottomMoreNavigationItem = (
  props:{
    module: Module,
    onClick: ()=>void,
  }
)=>{
  const { module, onClick } = props;
  const theme = useTheme();
  const histroy = useHistory();
  const params: any = useParams();

  const selected = params.moduleId === module.moduleId;

  const handleClick = (event:React.MouseEvent)=>{
    histroy.push(WORKSPACE_BASE + module.moduleId);
    onClick();
  }

  return (
    <Box
      sx={{
        m:1,
        width: theme.spacing(7),
        fontSize: '0.7rem',
        '& a':{
          textDecoration: 'none',
        },
        color: theme.palette.text.secondary,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
        onClick = {handleClick}
      >
        <Box sx={{
          p: theme.spacing(1, 1),
          borderRadius: '5px',
          mb: 1,
          backgroundColor: selected ? theme.palette.primary.main :'inherit',
          color: selected 
            ? ( theme.palette.primary.main === '#fff' ? theme.palette.background.default : '#fff') 
            : 'inherit',
        }}>
          <Box 
            dangerouslySetInnerHTML={{__html: module.icon}}
            sx={{
              display:'flex',
              alignItems:'center',
            }}
          >
          </Box>
        </Box>
        <Box>
          {module.title}
        </Box>
      </Box>

    </Box>
  )
}