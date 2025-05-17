import { useQuery } from '@tanstack/react-query';
import { getMovieById, getMovieByName } from '../lib/movieApi';

export function useGetMovie(name) {
  const {
    isPending: loadingMovie,
    data: movieData,
    error
  } = useQuery({
    queryKey: ['movie', name],
    queryFn: () => getMovieByName(name),
  });

  return { loadingMovie, movieData, error };
}

export function useGetMovieById(id) {
  const {
    isPending: loadingMovieId,
    data: movieDataId,
    error: movieErrorId
  } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    enabled: !!id
  });

  return { loadingMovieId, movieDataId, movieErrorId };
}
