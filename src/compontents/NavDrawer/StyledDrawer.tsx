import { styled } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import { MINI_DRAWER_SIZE } from '../../util/consts';

export const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    '& .MuiDrawer-paper': {
      overflowX: 'hidden',
      width: theme.spacing(MINI_DRAWER_SIZE),
      background: theme.palette.background.paper,
      boxShadow: 0,
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
      border: 0,
      alignItmes: 'center',
    }
  })
);
