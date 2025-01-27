import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IMovie } from "./movie.rdo";


interface IMovieStore {
    likedMovies: IMovie[];
    likeMovie: (movie: IMovie) => void
  }


export const useMovieStore = create<IMovieStore>()(persist(
    (set) => ({
        likedMovies: [],
        likeMovie: (movie) => set((state) => ({ 
            likedMovies: [...state.likedMovies, movie],
            
        })),
    }),
    {
        name: 'movie-store', // имя для хранения в localStorage
    }
));

