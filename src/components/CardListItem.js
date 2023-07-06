import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function CardListItem({ IconComponent, count, text, href }) {
  const compactCount = count &&
    Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 })
      .format(count)
      .toLowerCase();

  return (
    <ListItem disablePadding>
      <ListItemButton
        component="a"
        href={href}
        sx={{ py: 0.7 }}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 1.5 }}>
          <IconComponent size={24} />
        </ListItemIcon>
        <ListItemText >
          <b>{compactCount}</b> {text}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
