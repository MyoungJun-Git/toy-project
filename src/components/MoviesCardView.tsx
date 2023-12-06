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
      <div className={moviesCardClass.cardChildClassName}>
        <h3>{moviesCardData.title}</h3>
        <div>
          {moviesCardData.genre_ids.map((id: number, index: number) => (
            <Badge key={index} bg={moviesCardClass.cardChildBadgeClassName}>
              {id}
            </Badge>
          ))}
        </div>
        <div>
          <div>{moviesCardData.vote_average}</div>
          <div>{moviesCardData.adult ? "청불" : "Under 18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCardView;
