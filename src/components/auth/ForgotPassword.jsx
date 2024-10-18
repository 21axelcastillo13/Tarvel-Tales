import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword({ open, handleClose }) {


  const handlePasswordReset = async () => {
    const email = document.getElementById('email-recovery');
    console.log(email.value)
    sendPasswordResetEmail(auth, email.value)
    .then(() => {
      alert("Se ha enviado un correo para restablecer su contraseña");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
      alert(errorCode + "\n"+errorMessage);
    });
  };
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
      }}
    >
      <DialogTitle>Restaurar Contraseña</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
        Ingrese la dirección de correo electrónico de su cuenta y le enviaremos un enlace a
        restablecer su contraseña.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email-recovery"
          name="email"
          label="Email address"
          placeholder="ejemplo@dominio.com"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant="contained" type="submit" onClick={handlePasswordReset}>
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;