import { IMovie } from "../../entities/post/movie.rdo"
import "./moviecard.css"
import img from "./../../assets/placeholder.jpg"

export const MovieCard = ({Title, Year, Poster}: IMovie) => {
    return (
        <div className="movieCard">
            <div className="title">
                <h1>{Title}</h1>
                <img src={img} />
                <div className="foot">
                    <a>{Year}</a>
                    <a className="heart"></a>
                </div>
            </div>
        </div>
    )
}
