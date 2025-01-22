import { useNavigate, useParams } from "react-router-dom"
import { OMDBApi } from "../../shared/OMDBApi/OMDBApi";
import { useEffect, useState } from "react";
import { IMoviePage } from "../../entities/post/movie.rdo";
import img from "./../../assets/placeholder.jpg"
import Button from "../../components/Button/Button";
import { RotateLoader } from "react-spinners";
import "./MoviePage.css";

export function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState<IMoviePage | undefined>(undefined)
    const navigate = useNavigate()
    

    useEffect(() => {
        async function fetch() {
            id && setMovie(await OMDBApi.searchMovie(id))
        }
        fetch()
        
    }, []);

    return (
        <div className={`movie-page ${!movie && "movie-page--loader"}`}>
            {movie ? <>
                <h1 className="movie-page__title">{movie.Title}</h1>
                <img src={img} />
                <p>Год: {movie.Year}</p>
                <p>Продолжительность: {movie.Runtime}. </p>
                <p>Язык: {movie.Language}</p>
                <Button onClick={()=>{
                    navigate(-1)
                }}>Назад</Button>
            </> : <RotateLoader />
            }
                
        </div>

    )
}