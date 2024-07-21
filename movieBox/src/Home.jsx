import Movie_Search from "./Movie_Search";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
const Home = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
                const fetchAllMovie = async () => {
                    try{
                        const response = await fetch('http://localhost:3000/api/movies');
                        if (!response.ok) {
                            throw new console.error(`http error ${response.status}`);
                        }
                        const data = await response.json();
                        setMoviesData(data);
                    }
                    catch(error){
                        console.error(`error fetching movie ${error}`);
                    }
                };
                fetchAllMovie();
            }, [])

    const handleSearch = async (query) => {
        try {
            const response = await fetch (`http://localhost:3000/api/movies?search=${query}`);
            if(!response.ok){
                throw new console.error(`http error ${response.status}`);
            }
            const data = await response.json();
            setMoviesData(data);
            console.log("data update: ", JSON.stringify(data, null, 2));
            console.log("movie update: ", JSON.stringify(moviesData, null, 2))
            
        } catch (error) {
            console.error("error fetching movie", error);
        }
    }

    return ( 
        <div className="homeContent">
            <div className="search-sec">
                <h1>welcome to movie box</h1>
                < Movie_Search onSearch={handleSearch} />
            </div>
            <div className="movie-sec">
                < MovieList movies={moviesData} />
            </div>

        </div>
     );
}
 
export default Home;