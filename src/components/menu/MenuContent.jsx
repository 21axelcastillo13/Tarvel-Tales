
//Structure Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
/* import Divider from '@mui/material/Divider'; */

//Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibraryRounded';
import ExploreIcon from '@mui/icons-material/ExploreRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
/* import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'; */

const mainListItems = [
  { text: 'Inicio', icon: <HomeRoundedIcon /> },
  { text: 'Explorar', icon: <ExploreIcon /> },
  { text: 'Álbumes', icon: <PhotoLibraryIcon /> },
  { text: 'Perfil', icon: <AssignmentRoundedIcon /> },
];

/* const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon /> },
  { text: 'About', icon: <InfoRoundedIcon /> },
  { text: 'Feedback', icon: <HelpRoundedIcon /> },
]; */

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: '' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

{/*       <Divider />
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}