import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea
} from '@mui/material';
import { motion } from 'framer-motion';

const MovieCard = ({ movie, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Card
        sx={{
          height: '100%',
          width: '266.66px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardActionArea
          onClick={() => onClick(movie)}
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="img"
            height="400"
            width="266.66"
            image={
              movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://imageplaceholder.net/266x400?text=no+image+found'
            }
            alt={movie.Title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              maxWidth={250}
              sx={{
                maxHeight: '3.6em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}
            >
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.Year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default MovieCard;
