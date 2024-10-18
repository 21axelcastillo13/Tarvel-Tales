import * as React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';

import MenuButton from './MenuButton';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

//Icons
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';


const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0',
});

export default function OptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();


  const handleClose = () => {
    setAnchorEl(null);
  };



  const handleLogOut = async () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      alert(error);
    });
  };

  
  return (
    <React.Fragment>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: 'transparent' }}
      >
        <MoreVertRoundedIcon />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
        }}
      >


        {/* Mi cuenta */}
        <MenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              mr: '1rem',
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <AccountCircleRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Mi Cuenta</ListItemText>
        </MenuItem>
        
        {/* Preferencias */}
        <MenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              mr: '1rem',
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <TuneRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Preferencias</ListItemText>
        </MenuItem>

        {/* Configuraciones */}
        <MenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              mr: '1rem',
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <SettingsRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Configuraciones</ListItemText>
        </MenuItem>
    

        {/* Cerrar Sesión */}
        <MenuItem
          onClick={handleLogOut}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              mr: '1rem',
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cerrar Sesión</ListItemText>
        </MenuItem>


      </Menu>
    </React.Fragment>
  );
}