import React, { useState } from 'react';
import {
  Box,
  Button,
  CssBaseline,
  Typography,
  Card as MuiCard,
  Stack,
  LinearProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../firebase';

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
  boxShadow: theme.shadows[10],
}));

const FileUploadContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Logo = styled('img')({
  width: '75%',
  marginBottom: '16px',
});

export default function FileUpload() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    selectedFiles.forEach((file) => handleUpload(file));
  };

  const handleUpload = (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress((prev) => ({ ...prev, [file.name]: percent }));
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at:', downloadURL);
      }
    );
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
            Seleccionar Archivos
            <input
              type="file"
              accept="image/*,video/*,audio/*"
              onChange={handleFileChange}
              hidden
              multiple
            />
          </Button>
          <Box
            sx={{
              marginTop: 2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {files.map((file) => (
              <Box key={file.name} sx={{ width: '100%' }}>
                <Typography variant="body2">{file.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress[file.name] || 0}
                  sx={{ mt: 1, height: 10, borderRadius: 5 }}
                />
              </Box>
            ))}
          </Box>
        </Card>
      </FileUploadContainer>
    </>
  );
}
