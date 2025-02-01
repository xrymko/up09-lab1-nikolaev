import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IMovie } from "./movie.rdo";


interface IMovieStore {
    likedMovies: IMovie[];
    toggleLike: (movie: IMovie) => void
}


export const useMovieStore = create<IMovieStore>()(persist(
    (set) => ({
        likedMovies: [],
        toggleLike: (movie) => set((state) => {
            if (state.likedMovies.some((liked) => liked.imdbID === movie.imdbID)) {
                return ({likedMovies: state.likedMovies.filter((el) => el.imdbID !== movie.imdbID)})
            } else {
                return ({
                likedMovies: [...state.likedMovies, movie],
            })
            }
        }),
    }),
    {
        name: 'movie-store', // имя для хранения в localStorage
    }
));

