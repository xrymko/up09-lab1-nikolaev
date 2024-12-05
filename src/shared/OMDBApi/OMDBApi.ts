import axios from "axios"

const BASE_URL = "http://www.omdbapi.com/"

const OMDBApiInstance = axios.create({ baseURL: BASE_URL });

const API_KEY = import.meta.env.VITE_API_KEY;

interface IMovie {

}

interface ISearcMovieRDO {
    Response: string
    totalResults: string
    // Search: 
}

export const OMDBApi = {
    searchMovie: async (title: string) => {
        const res = await OMDBApiInstance.get("", {
            params: { apikey: API_KEY, s: title },
        });
        console.log(res);

    },
};