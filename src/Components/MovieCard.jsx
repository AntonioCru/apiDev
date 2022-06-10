import Card from "../Card";

const MovieCard = ({ movies }) => {
  // const [dataPel, setdataPel] = useState([]);
  // let img,title,year;

  const dataCatch = movies.Search;
  console.log(dataCatch);

  // if(movies.Search=="undefined" || movies.Search == null || movies.Search==""){

  //     console.log("--no hay pelicula--")

  // }else if(movies.Search!="undefined"){
  //     dataCatch.forEach(element =>  {
  //         title = element.Title;
  //         console.log("//--"+title+"--//")

  //        img = element.Poster;

  //        year = element.Year
  //     }
  //     );
  // }
  return (
    <ul>
      {dataCatch.map((movie) => (
        <Card >{movie}</Card>
      ))}
    </ul>
  );
};

export default MovieCard;
