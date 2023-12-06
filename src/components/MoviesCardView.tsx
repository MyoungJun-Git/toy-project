import { Badge } from "react-bootstrap";
import { IMoviesCard } from "../interface/IMovies";

const MoviesCardView = ({ moviesCardClass, moviesCardData }: IMoviesCard) => {
  return (
    <div
      className={moviesCardClass.cardClassName}
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${moviesCardData?.poster_path}` +
          ")",
      }}
    >
      <div>
        <h3>{moviesCardData.title}</h3>
        <div>
          {moviesCardData.genre_ids.map((id: number) => (
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>
        <div>
          <span>{moviesCardData.vote_average}</span>
          <span>{moviesCardData.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MoviesCardView;
