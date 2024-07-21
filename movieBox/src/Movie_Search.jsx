import { useState } from "react";

const Movie_Search = ({onSearch}) => {

    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if(onSearch){
            onSearch(query);
        }
    }

    return ( 
        <div>
            <input
            type="text"
            placeholder="enter movie name ..."
            value={query}
            onChange={ (e) => setQuery(e.target.value)}
            >
            </input>
            <button onClick={handleSearch}>search</button>
        </div>
     );
}
 
export default Movie_Search;