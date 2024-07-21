import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../jotter/src/useFetch";

const MovieDes = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null)
    const [pending, isPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/movies/${id}`);
                if (!response.ok) {
                    throw new error(`http error status: ${response.status}`)
                }
                const data = await response.json();
                setMovie(data);
                console.log(movie);
            } catch (error) {
                setError(error.message);
            }finally{
                isPending(false);
            }
        };
        fetchMovie();
    }, [id]);

    if(pending) return <p>loading</p>;
    if(error) return <p>{error}</p>;
    return ( 
        <div className="movieDes">
            {
                movie ? (
                    <div className="movies">
                        <div className="details">
                            <img src={movie.image} alt={movie.title} />
                            <div>
                                <h2>{ movie.title }</h2>
                                <h3>{ movie.year } . {movie.type} </h3>
                                <p>{ movie.description }</p>
                            </div>
                        </div>
                        <div className="button">
                            <a href="#">
                                <button>
                                    book ticket
                                </button>
                            </a>
                        </div>
                   :</div>
                ) : (
                    <p>getting it soon</p>
                )
            }
        </div>
     );
}
 
export default MovieDes;