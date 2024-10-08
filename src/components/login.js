// src/components/Login.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, CssBaseline, Avatar, Grid, Link, Checkbox, FormControlLabel, Divider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/system';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticación o registro
    if (isRegistering) {
      console.log('Registro:', { username, email, password, confirmPassword });
    } else {
      console.log('Login:', { email, password });
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  // Estilo personalizado para el borde de los input text
  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: '5px',
      borderColor: '#6A89A6', // Color del borde
    },
  });

  // Estilo personalizado para el checkbox
  const StyledCheckbox = styled(Checkbox)({
    color: '#6A89A6',
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Título TravelTales */}
        <Typography variant="h3" component="h1" gutterBottom>
          <span style={{ color: 'black' }}>Travel</span>
          <span
            style={{
              color: '#6A89A6',
              padding: '0 5px',
              borderRadius: '4px',
            }}
          >
            Tales
          </span>
        </Typography>

      

        <Typography component="h1" variant="h5">
          {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {isRegistering && (
            <StyledTextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de Usuario"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          <StyledTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {isRegistering && (
            <StyledTextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Revisar Contraseña"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {!isRegistering && (
            <FormControlLabel
              control={<StyledCheckbox value="remember" color="primary" />}
              label="Recordar Contraseña"
            />
          )}

          {isRegistering && (
            <FormControlLabel
              control={<StyledCheckbox value="terms" color="primary" required />}
              label="Acepto los términos y condiciones"
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#6A89A6',
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: '#557A8D',
              },
            }}
          >
            {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
          </Button>

          {/* Botones para iniciar con Google o Facebook */}
          <Divider sx={{ mb: 2 }}>O {isRegistering ? 'Regístrate' : 'Inicia sesión'} con</Divider>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
                sx={{
                  color: '#6A89A6',
                  borderColor: '#6A89A6',
                  borderRadius: '5px',
                  '&:hover': {
                    borderColor: '#557A8D',
                    color: '#557A8D',
                  },
                }}
              >
                
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                startIcon={<FacebookIcon />}
                fullWidth
                sx={{
                  color: '#6A89A6',
                  borderColor: '#6A89A6',
                  borderRadius: '5px',
                  '&:hover': {
                    borderColor: '#557A8D',
                    color: '#557A8D',
                  },
                }}
              >
                
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
            <Grid item>
              <Link href="#" variant="body2" onClick={toggleForm} sx={{ color: '#6A89A6' }}>
                {isRegistering ? '¿Ya tienes cuenta? Iniciar sesión' : '¿No tienes cuenta? Regístrate'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
