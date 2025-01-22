import { createBrowserRouter } from "react-router-dom";
import { MoviePage } from "../../pages/MoviePage/MoviePage";
import { Search } from "../../pages/Search/Search";

// import "./router.css"

export const router = createBrowserRouter([
    {
        index: true,
        element: <Search />
    },
    {
        path: "movie/:id",
        element: <MoviePage />
    }
])
