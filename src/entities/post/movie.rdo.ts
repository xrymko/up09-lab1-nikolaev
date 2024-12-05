
export interface IMovieRDO {
    Response: string
    totalResults: number
    Search: IMovie[]
}

export interface IMovie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}


