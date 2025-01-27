
export interface IMovieRDO {
    Response: string
    totalResults: string
    Search: IMovie[]
}

export interface IMovie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export interface IMoviePage {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }
  
  export interface Rating {
    Source: string;
    Value: string;
  }

