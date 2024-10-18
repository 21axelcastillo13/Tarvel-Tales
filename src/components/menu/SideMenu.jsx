import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuContent from './MenuContent';
import OptionsMenu from './OptionsMenu';

import { auth } from '../../firebase';
import { useEffect, useState } from 'react';

// Drawer width
const drawerWidth = 300;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function SideMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      console.log(firebaseUser?.photoURL); 
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignContent: "center",
          marginTop: 1.5,
        }}
      >

      <img src="/logo_light.png" alt="Logo" style={{ objectFit: 'scale-down', width: '75%', height: '75%' }} />

      </Box>
      <Divider />
      <MenuContent />
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >

        {user ? (
          <>
            <Avatar
              sizes="small"
              src={user.photoURL}
              sx={{ width: 40, height: 40, objectFit: 'cover' }} 
            />
            <Box sx={{ mr: 'auto' }}>
              <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                {user.displayName || 'Guest'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {user.email}
              </Typography>
            </Box>
          </>
        ) : (
          <Typography variant="body2">Not signed in</Typography>
        )}
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
