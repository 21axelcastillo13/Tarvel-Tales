import  { useState } from 'react';
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  FormLabel,
  FormControl,
  Link,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GoogleIcon, SitemarkIcon } from '../CustomIcons';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import { auth, googleAuthProvider } from '../../firebase'; 
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: 4,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SignIn() {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleProviderGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log("Google sign-in error: ", error);
    }
  };

  const handleSignIn = async () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate("/dashboard");
    } catch (error) {

      setPasswordError(true);
      setPasswordErrorMessage('Correo y/o contraseña han sido incorrectos');
      console.error("Error signing in: ", error);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Stack sx={{ justifyContent: 'center', height: '100dvh', p: 2 }}>
          <Card variant="outlined">
            <SitemarkIcon />
            <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
              Iniciar Sesión
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl>
                <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="ejemplo@dominio.com"
                  autoComplete="email"
                  variant="outlined"
                  error={passwordError}
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="password"
                  type="password"
                  placeholder="••••••"
                  autoComplete="new-password"
                  variant="outlined"
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link component="button" onClick={handleClickOpen} variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Box>

              <ForgotPassword open={open} handleClose={handleClose} />

              <Button fullWidth variant="contained" onClick={handleSignIn}>
                Iniciar Sesión
              </Button>
              <Typography sx={{ textAlign: 'center' }}>
                ¿No tienes una cuenta?{' '}
                <Link href="/auth/sign-up/" variant="body2">
                  Regístrate
                </Link>
              </Typography>
            </Box>

            <Divider>
              <Typography sx={{ color: 'text.secondary' }}>o</Typography>
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleProviderGoogle}
              startIcon={<GoogleIcon />}
            >
              Iniciar sesión con Google
            </Button>
          </Card>
        </Stack>
      </SignUpContainer>
    </>
  );
}
