import { useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { OMDBApi } from "../../shared/OMDBApi/OMDBApi";


export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearh = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await OMDBApi.searchMovie(searchQuery);
    };
    return(
        <div className="search">
            <h1>Ищи Bleeee</h1>
            <form onSubmit={handleSearh} action="">
                <Input value={searchQuery} setValue={setSearchQuery} />
                <Button />
            </form>
        </div>
    )
};