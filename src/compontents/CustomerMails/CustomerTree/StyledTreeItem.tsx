import { styled } from '@material-ui/core/styles';
import TreeItem, { treeItemClasses } from '@material-ui/lab/TreeItem';

export const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
}));
