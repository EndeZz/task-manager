const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <div className="image-wrapper">
        <img src={movie.img} alt="" />
        <div className="img-overlay">
          <p className="movie-item-description">{movie.description}</p>
        </div>
      </div>
      <p className="movie-item-name">{movie.name}</p>
    </div>
  );
};

export default MovieItem;
