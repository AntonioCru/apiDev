const MovieCard = ({movies}) => {
    console.log(movies);

    const titleAux=movies.Title;
    return ( 
        <div className="targetContent">
            <img src={movies.Poster} alt="Img" />
        <h2 className="movieTitle target">{titleAux}</h2>
        <h3 className="movieYear target">{movies.Year}</h3>
        <h4 className="movieLanguage target">{movies.Language}</h4>
        <h5 className="movieTime target">{movies.Runtime}</h5>
        <h6 className="movieGenre target">{movies.Genre}</h6>
        <h6 className="movieActor target">{movies.Actors}</h6>
        <p className="moviePlot target">{movies.Plot}</p>
        </div>
     );
}
 
export default MovieCard;