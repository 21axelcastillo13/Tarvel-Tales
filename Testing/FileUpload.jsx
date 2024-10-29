import React, { useState } from 'react';
import {
  Box,
  Button,
  CssBaseline,
  Typography,
  Card as MuiCard,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  width: '100%',
  maxWidth: '400px',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10], // Aumenté la sombra para un efecto más prominente
}));

const FileUploadContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Logo = styled('img')({
  width: '75%', // Ajusta según el tamaño deseado
  marginBottom: '16px', // Espaciado entre el logo y el texto
});

export default function FileUpload() {
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileType(file.type);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <FileUploadContainer>
        <Card>
          <Logo src={`${process.env.PUBLIC_URL}/logo_light.png`} alt="Logo" />
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Subir Archivos Multimedia
          </Typography>
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Seleccionar Archivo
            <input
              type="file"
              accept="image/*,video/*,audio/*"
              onChange={handleFileChange}
              hidden
            />
          </Button>
          <Box
            sx={{
              marginTop: 2,
              maxWidth: '100%',
              maxHeight: '300px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px dashed',
              borderColor: 'divider',
              padding: 2,
              borderRadius: 1,
              bgcolor: 'background.paper',
            }}
          >
            {!preview && (
              <Typography variant="body2" color="text.secondary">
                Selecciona un archivo para ver la vista previa aquí.
              </Typography>
            )}

            {preview && fileType.startsWith('image/') && (
              <img
                src={preview}
                alt="Vista previa"
                style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
              />
            )}

            {preview && fileType.startsWith('video/') && (
              <video src={preview} controls style={{ maxWidth: '100%', maxHeight: '100%' }} />
            )}

            {preview && fileType.startsWith('audio/') && (
              <audio src={preview} controls style={{ width: '100%' }} />
            )}

            {preview &&
              !fileType.startsWith('image/') &&
              !fileType.startsWith('video/') &&
              !fileType.startsWith('audio/') && (
                <Typography variant="body2" color="error">
                  Tipo de archivo no soportado para vista previa.
                </Typography>
              )}
          </Box>
        </Card>
      </FileUploadContainer>
    </>
  );
}
