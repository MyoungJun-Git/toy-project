import "react-multi-carousel/lib/styles.css";
import { IMoviesCardData } from "../interface/IMovies";
import MoviesCardView from "./MoviesCardView";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MoviesSlide = ({ results }: any) => {
  return (
    <Carousel responsive={responsive}>
      {data.map((item: IMoviesCardData) => (
        <MoviesCardView
          moviesCardClass={{
            cardClassName: "banner",
          }}
          moviesCardData={{
            poster_path: item?.poster_path,
            title: item?.title,
            genre_ids: item?.genre_ids,
            vote_average: item?.vote_average,
            adult: item?.adult,
          }}
        />
      ))}
    </Carousel>
  );
};

export default MoviesSlide;
