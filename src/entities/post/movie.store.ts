import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMovieStore = create(persist(
    (set) => ({
        likedMovies: [],
        // likeMovie: (movie) => set((state) => ({ ??? })),
    }),
    {
        name: 'movie-store', // имя для хранения в localStorage
    }
));
