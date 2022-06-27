import React, { useState, Fragment } from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";
import NavegatePage from "./NavegatePage";
import styles from "./StylesMovieGrid.module.css";

const MoviesGrid = () => {
  const page = null;
  // const [page, setPage] = useFetch(1);
  const [datePel, setdatePel] = useState();
  const [infoUrl, setInfoUrl] = useState();
  // console.log("page-moviesGrid-" + page);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datePel);
    setInfoUrl(
      "https://www.omdbapi.com/?s=" +
        datePel +
        "&apikey=" +
        process.env.REACT_APP_PRIVATE_KEY +
        "&page=" +
        page
    );
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="formSerch">
          <input
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setdatePel(e.target.value);
              }
            }}
            className={styles.inputText}
            type="text"
            placeholder="Ingrese la pelicula"
            onBlur={(e) => {
              setdatePel(e.target.value || "");
            }}
          ></input>
          <button type="submit" className={styles.button}>
            Buscar
          </button>
        </div>

        <MovieCard movies={useFetch(infoUrl)} />
      </form>
      <NavegatePage
        sendNewPage={(newPage) => {
          setInfoUrl(
            "https://www.omdbapi.com/?s=" +
              datePel +
              "&apikey=" +
              process.env.REACT_APP_PRIVATE_KEY +
              "&page=" +
              newPage
          );
        }}
      />
    </Fragment>
  );
};

export default MoviesGrid;
