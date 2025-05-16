import {
  Modal,
  Box,
  Typography,
  IconButton,
  CardMedia,
  Stack,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetMovieById } from '../hooks/useGetMovie';
import Loader from './Loader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%' },
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto'
};

const MovieModal = ({ movie, open, onClose }) => {
  const { loadingMovieId, movieDataId, movieErrorId } = useGetMovieById(
    movie?.imdbID
  );

  if (!movie) return null;

  if (movieErrorId) {
    return (
      <AnimatePresence>
        {open && (
          <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="movie-modal-title"
            aria-describedby="movie-modal-description"
            closeAfterTransition
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={style}>
                <Typography variant="h6">{movieErrorId.message}</Typography>
              </Box>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    );
  }

  if (loadingMovieId)
    return (
      <AnimatePresence>
        {open && (
          <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="movie-modal-title"
            aria-describedby="movie-modal-description"
            closeAfterTransition
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={style}>
                <Loader />
              </Box>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    );

  return (
    <AnimatePresence>
      {open && (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="movie-modal-title"
          aria-describedby="movie-modal-description"
          closeAfterTransition
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={style}>
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500]
                }}
              >
                <CloseIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="300"
                image={
                  movieDataId.Poster ||
                  'https://imageplaceholder.net/266x400?text=no+image+found'
                }
                alt={movieDataId.Title}
                sx={{ objectFit: 'contain', mb: 2 }}
              />
              <Typography
                id="movieDataId-modal-title"
                variant="h4"
                component="h2"
                gutterBottom
              >
                {movieDataId.Title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Year: {movieDataId.Released}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Director: {movieDataId.Director || 'N/A'}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Rating: {movieDataId.Ratings[0].Value || 'N/A'}
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Genres:
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {movieDataId.Genre && movieDataId.Genre.length > 0 ? (
                    movieDataId.Genre.split(',').map((genre) => (
                      <Chip label={genre} key={genre} variant="outlined" />
                    ))
                  ) : (
                    <Typography variant="body2">N/A</Typography>
                  )}
                </Stack>
              </Box>
              <Typography
                id="movie-modal-description"
                variant="body1"
                sx={{ mt: 2 }}
              >
                {movieDataId.Plot || 'No description available.'}
              </Typography>
            </Box>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
