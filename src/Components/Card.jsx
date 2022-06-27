import styles from "./Card.module.css";

const Card = ({ movie }) => {
  
 

  return (
    <li className={styles.movieCard} >
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className={styles.title}>{movie.Title}</div>
      <div className={styles.title}>{movie.Year}</div>
    </li>
  );
};

export default Card;
