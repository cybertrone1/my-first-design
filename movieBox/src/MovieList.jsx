const MovieList = ({ movies }) => {
    
    return ( 
        <div className="movieList">
            {
                movies.length > 0 ? (
                    movies.map((movie)  => (
                        <a href={'/movies/'+movie.id}  key={movie.id}>
                            <div className="movieDisplay">
                                <img src={movie.image} alt={movie.title} />
                                <h2>{movie.title}</h2>
                                <h2>{movie.year} . {movie.type}</h2>
                            </div>
                        </a>
                    ))
                ) : (
                    <h2>no related movie found</h2>
                )
            }
        </div>
     );
}
 
export default MovieList;