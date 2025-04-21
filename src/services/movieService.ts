import axios from 'axios';
import { Movie } from '../types/movie';

interface WrongTMDBResponse {
    movies: Movie[];
    page: number;
    total_pages: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response = await axios.get<WrongTMDBResponse>(
        'https://api.themoviedb.org/3/search/movie',
        {
            params: {
                query,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
        },
    );

    return response.data.results;
};
