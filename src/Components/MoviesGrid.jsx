import React, { useState }  from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";




const MoviesGrid = () => {

        // let page=1;

        const [datePel, setdatePel] = useState();
        const [infoUrl, setInfoUrl] = useState();

        function handleChange({target}){
            setdatePel(target.value);
            
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(datePel);
            // setInfoUrl("https://www.omdbapi.com/?s="+datePel+"&apikey="+process.env.REACT_APP_PRIVATE_KEY+"&page="+page)

            setInfoUrl("https://www.omdbapi.com/?t="+datePel+"&apikey="+process.env.REACT_APP_PRIVATE_KEY)
            
            
        }
        
        

    return (  
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Ingrese la pelicula" onChange={handleChange} ></input>
    <button type="submit">Buscar</button>
          <MovieCard movies={useFetch(infoUrl)} />
</form>
    );
}
 

export default MoviesGrid;