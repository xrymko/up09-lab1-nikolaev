import axios from "axios"
import { IMoviePage, IMovieRDO } from "../../entities/post/movie.rdo";

const BASE_URL = "https://www.omdbapi.com/"

const OMDBApiInstance = axios.create({ baseURL: BASE_URL });

const API_KEY = import.meta.env.VITE_API_KEY;

export const OMDBApi = {
    searchMovies: async (title: string) => {
        const res = await OMDBApiInstance.get<IMovieRDO>("", {
            params: { apikey: API_KEY, s: title },
        });
        
        return res.data

    },
    searchMovie: async (id: string) => {
        const res = await OMDBApiInstance.get<IMoviePage>("", {
            params: { apikey: API_KEY, i: id },
        });
        return res.data
    },
};