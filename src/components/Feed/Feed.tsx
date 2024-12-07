import { IMovie, IMovieRDO } from "../../entities/post/movie.rdo"
import { MovieCard } from "../MovieCard/MovieCard"

import "./feed.css"

interface IFeed {
    movies: IMovie[]
}
export const Feed = ({ movies }: IFeed) => {
    return (
        <div className="main">
            {movies.map((movie) => (
                <MovieCard {...movie} />
            ))}
        </div>
    )
}
