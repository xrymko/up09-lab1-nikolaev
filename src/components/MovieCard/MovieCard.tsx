import { IMovie } from "../../entities/post/movie.rdo"
import "./moviecard.css"
import img from "./../../assets/placeholder.jpg"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { useMovieStore } from "../../entities/post/movie.store"

export const MovieCard = (movie: IMovie) => {
    const { toggleLike } = useMovieStore((state) => state)

    const addLikeMovie = () => {
        toggleLike(movie);
    }

    const { Title, Year, imdbID } = movie;
    return (
        <div className="movieCard">
            <div className="title">
                <h1><Link to={`/movie/${imdbID}`}>{Title}</Link></h1>
                <img src={img} />
                <div className="foot">
                    <a>{Year}</a>
                    <Button onClick={addLikeMovie}></Button>
                </div>
            </div>
        </div>
    )
}
