import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, Menu, Tooltip } from '@material-ui/core';
import intl from 'react-intl-universal';
import { useTheme } from '@material-ui/core';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';

export const ReceiveButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title = {intl.get('receive-mails')} arrow>
        <IconButton 
          onClick={handleClick}
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          <MoveToInboxOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
