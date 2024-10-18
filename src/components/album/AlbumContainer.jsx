import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AlbumCard from './AlbumCard';
import { Label } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function AlbumContainer() {
  const [filter, setFilter] = useState('');

  // Example album data (replace with your own data or fetch from API)
  const albums = [
    { id: 1, title: 'Vacation', count: 10, image: 'https://via.placeholder.com/140' },
    { id: 2, title: 'Birthday Party', count: 5, image: 'https://via.placeholder.com/140' },
    { id: 3, title: 'Wedding', count: 20, image: 'https://via.placeholder.com/140' },
    { id: 4, title: 'Road Trip', count: 15, image: 'https://via.placeholder.com/140' },
    { id: 5, title: 'Vacation', count: 10, image: 'https://via.placeholder.com/140' },
    { id: 6, title: 'Birthday Party', count: 5, image: 'https://via.placeholder.com/140' },
    { id: 7, title: 'Wedding', count: 20, image: 'https://via.placeholder.com/140' },
    { id: 8, title: 'Road Trip', count: 15, image: 'https://via.placeholder.com/140' },
    { id: 1, title: 'Vacation', count: 10, image: 'https://via.placeholder.com/140' },
    { id: 2, title: 'Birthday Party', count: 5, image: 'https://via.placeholder.com/140' },
    { id: 3, title: 'Wedding', count: 20, image: 'https://via.placeholder.com/140' },
    { id: 4, title: 'Road Trip', count: 15, image: 'https://via.placeholder.com/140' },
    { id: 5, title: 'Vacation', count: 10, image: 'https://via.placeholder.com/140' },
    { id: 6, title: 'Birthday Party', count: 5, image: 'https://via.placeholder.com/140' },
    { id: 7, title: 'Wedding', count: 20, image: 'https://via.placeholder.com/140' },
    { id: 8, title: 'Road Trip', count: 15, image: 'https://via.placeholder.com/140' },
  ];

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* Label above the collection */}
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'left', marginY: 3}}>
        Tu colección de Album
      </Typography>

      {/* Filter space */}
{/*       <TextField
        label="Filter albums"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      /> */}

      {/* Grid container */}
      <Grid container spacing={3} justifyContent="left">
        {filteredAlbums.map((album) => (
          <Grid item key={album.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <AlbumCard image={album.image} title={album.title} count={album.count} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}