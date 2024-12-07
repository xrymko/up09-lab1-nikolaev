import { useState } from "react"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { OMDBApi } from "../../shared/OMDBApi/OMDBApi"
import { Feed } from "../../components/Feed/Feed"
import { IMovie, IMovieRDO } from "../../entities/post/movie.rdo"
import "./search.css"

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState<IMovie[]>([])
    const handleSearh = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await OMDBApi.searchMovie(searchQuery)
        setMovies(res.Search)
    }

    return (
        <>
            <div className="search">
                <h1>Ищи Bleeee</h1>
                <form onSubmit={handleSearh} action="" >
                    <Input value={searchQuery} setValue={setSearchQuery} />
                    <Button />
                </form>
            </div>
            <Feed movies={movies} />
        </>
    )
}
