const Genre = ({ genre }) => {
  return (
    <div
      className="genre"
      style={{
        background: `linear-gradient(127.83deg, ${genre.colorFrom}, ${genre.colorTo})`,
      }}
    >
      <p>{genre.emoji}</p>
      <p>{genre.title}</p>
    </div>
  );
};

export default Genre;
