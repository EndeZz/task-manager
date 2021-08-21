import Genre from "./Genre";

const Genres = ({ genres }) => {
  return (
    <div className="genres">
      {genres.map((genre) => (
        <Genre key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default Genres;
