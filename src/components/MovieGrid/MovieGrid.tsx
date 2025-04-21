import { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
    movieList: Movie[];
    selectMovie: (movie: Movie) => void;
}

export default function MovieGrid({ movieList, selectMovie }: MovieGridProps) {
    return (
        <ul className={css.grid}>
            {movieList.map((movie) => (
                <li key={movie.id}>
                    <div className={css.card}>
                        <img
                            className={css.image}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                            onClick={() => selectMovie(movie)}
                        />
                        <h2 className={css.title}>{movie.title}</h2>
                    </div>
                </li>
            ))}
        </ul>
    );
}
