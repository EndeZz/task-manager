import { useState } from "react";
import Movies from "./Movies";
import Genres from "./Genres";

const MoviesPage = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Мульт в кино. Выпуск №103. Некогда грустить!",
      description: "",
      img: "../images/cat.png",
    },
    {
      id: 2,
      name: "Новый бэтмен",
      description: "",
      img: "../images/batman.png",
    },
    {
      id: 3,
      name: "Однажды... в Голливуде",
      description:
        "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
      img: "../images/hollywood.png",
    },
    {
      id: 4,
      name: "Стриптизёрши",
      description: "",
      img: "../images/girl.png",
    },
  ]);

  const [genres, setGenres] = useState([
    {
      id: 1,
      title: "Комедии",
      emoji: "😁",
      colorFrom: "#F2C94C",
      colorTo: "#F29A4A",
    },
    {
      id: 2,
      title: "Драмы",
      emoji: "😭",
      colorFrom: "#F2994A",
      colorTo: "#EB5757",
    },
    {
      id: 3,
      title: "Фантастика",
      emoji: "👽",
      colorFrom: "#56CCF2",
      colorTo: "#2F80ED",
    },
    {
      id: 4,
      title: "Ужасы",
      emoji: "👻",
      colorFrom: "#828282",
      colorTo: "#333333",
    },
  ]);

  return (
    <>
      <h1 className="page-header">🔥 Новинки</h1>
      <Movies movies={movies} />
      <h1 className="page-header">Жанры</h1>
      <Genres genres={genres} />
    </>
  );
};

export default MoviesPage;
