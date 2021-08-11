import { useTheme } from "@material-ui/core";
import { lighten, darken } from '@material-ui/core/styles';

export function useHoverButtonBackcolor(){
  const theme = useTheme();
  return  theme.palette.mode === 'dark' 
  ? lighten(theme.palette.primary.main, 0.1)
  : darken(theme.palette.primary.main, 0.1);
}