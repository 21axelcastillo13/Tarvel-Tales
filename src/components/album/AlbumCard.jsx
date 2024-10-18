import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

AlbumCard.propTypes = {
    image: PropTypes.string.isRequired,    // Must be a string and required
    title: PropTypes.string.isRequired,    // Must be a string and required
    count: PropTypes.number.isRequired,    // Must be a number and required
  };

export default function AlbumCard(props) {
  return (
    <Card sx={{ width: 250}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="h7" sx={{ color: 'text.secondary' }}>
            {props.count} elementos
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}