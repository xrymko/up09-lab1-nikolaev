import { IMovie } from "../../entities/post/movie.rdo"
import "./moviecard.css"
import img from "./../../assets/placeholder.jpg"
import { Link } from "react-router-dom"

export const MovieCard = ({Title, Year, imdbID}: IMovie) => {
    return (
        <div className="movieCard">
            <div className="title">
                <h1><Link to={`/movie/${imdbID}`}>{Title}</Link></h1>
                <img src={img} />
                <div className="foot">
                    <a>{Year}</a>
                    <a className="heart"></a>
                </div>
            </div>
        </div>
    )
}
