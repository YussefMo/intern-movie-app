import { Box, Grid, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './Loader';
import MovieCard from './MovieCard';

const MovieGrid = ({
  movies,
  onMovieClick,
  error,
  loadingMovie,
  debouncedQuery
}) => {
  if (error) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '25rem' }}
        >
          <Typography variant="h6">{error.message}</Typography>
        </motion.div>
      </Box>
    );
  }

  if (debouncedQuery.trim().length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '25rem' }}
        >
          <Typography variant="h6">start search something!</Typography>
        </motion.div>
      </Box>
    );
  }

  if (loadingMovie) return <Loader />;

  if (!movies || movies.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '25rem' }}
        >
          <Typography variant="h6">start search something!</Typography>
        </motion.div>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
      <Grid
        container
        spacing={3}
        sx={{ maxWidth: 'xl' }}
        justifyContent="center"
      >
        <AnimatePresence>
          {movies.map((movie) => (
            <Grid key={movie.imdbID}>
              <MovieCard movie={movie} onClick={onMovieClick} />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default MovieGrid;
