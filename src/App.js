import "./App.css";
import MoviesGrid from "./Components/MoviesGrid";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">PELICULAS</h1>
      </header>

      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
