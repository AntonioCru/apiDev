
import Card from "./Card";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movies}) => {
  const arraysMovie = movies.Search;
  // console.log(arraysMovie);
// const auxTotalDate=()=>{
  // let aux=movies.totalResults;
  // console.log(movies.totalResults);
//   sendTotal();
// }

  return (
    <ul className={styles.moviesGrid}>
      {arraysMovie == null? "": arraysMovie.map((movie) => {
            return <Card key={arraysMovie.imdbID} movie={movie} />;
          })}
    </ul>
  );
};

export default MovieCard;
