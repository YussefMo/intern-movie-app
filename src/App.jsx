import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';
import Navbar from './components/Navbar';
import { useGetMovie } from './hooks/useGetMovie';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  const [searchQuery, setSearchQuery] = useState('Inception');
  const [debouncedQuery, setDebouncedQuery] = useState('Inception');
  const { movieData, loadingMovie, error } = useGetMovie(debouncedQuery);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleMovieCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMovie(null), 300);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar onSearchChange={handleSearchChange} />
        <Container sx={{ py: 3 }}>
          <MovieGrid
            movies={movieData?.Search}
            loadingMovie={loadingMovie}
            error={error}
            onMovieClick={handleMovieCardClick}
          />
        </Container>
        <MovieModal
          movie={selectedMovie}
          open={isModalOpen}
          onClose={handleCloseModal}
        />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
