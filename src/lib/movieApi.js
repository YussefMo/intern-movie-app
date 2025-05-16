import axios from 'axios';

const key = import.meta.env.VITE_API_KEY;

const BASE_URL = `https://www.omdbapi.com/?apikey=${key}&s=`;

export async function getMovieByName(name) {
  try {
    if (name.trim() === '') {
      throw new Error('please make sure to input a valid name');
    } else if (name.length < 3) {
      return;
    } else {
      const { data } = await axios.get(`${BASE_URL}${name}`);
      if (data.Response === 'False') {
        throw new Error(data.Error || 'Movie not found');
      }
      return data;
    }
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error(err.message);
      throw new Error(err.message);
    }
  }
}

export async function getMovieById(id) {
  try {
    if (!id) {
      throw new Error('Movie ID is required');
    }
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${key}&i=${id}`
    );
    if (response.data.Response === 'False') {
      throw new Error(response.data.Error);
    }
    return response.data;
  } catch (err) {
    console.error(err.message);
    throw new Error(err.message);
  }
}
