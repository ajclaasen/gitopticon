import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function CardListItem({ IconComponent, count, text, href }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>
          {<IconComponent size={24} />}
        </ListItemIcon>
        <ListItemText primary={`${count} ${text}`} />
      </ListItemButton>
    </ListItem>
  );
};
