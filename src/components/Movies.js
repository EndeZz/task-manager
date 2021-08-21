import MovieItem from "./MovieItem";

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
