import axios from "axios"
import { IMovieRDO } from "../../entities/post/movie.rdo";

const BASE_URL = "http://www.omdbapi.com/"

const OMDBApiInstance = axios.create({ baseURL: BASE_URL });

const API_KEY = import.meta.env.VITE_API_KEY;

export const OMDBApi = {
    searchMovie: async (title: string) => {
        const res = await OMDBApiInstance.get<IMovieRDO>("", {
            params: { apikey: API_KEY, s: title },
        });
        return res.data

    },
};