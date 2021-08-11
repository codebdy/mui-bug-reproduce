import { useTheme } from "@material-ui/core";
import { lighten, darken } from '@material-ui/core/styles';

export function useHoverButtonColor(){
  const theme = useTheme();
  return theme.palette.mode === 'dark' 
  ? lighten(theme.palette.text.primary, 0.5)
  : darken(theme.palette.text.primary, 0.5);
}